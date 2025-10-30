// ...existing code...
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import send from '../assets/chatbotpage/send.png';
import chatbotIcon from '../assets/chatbotpage/chatbot.png';
import { useAuth } from '../context/AuthProvider';
import LoginSignUpButton from '../components/LoginSignUpButton';
import LoginRequired from '../components/LoginRequired';
import { supabase } from '../lib/supabaseClient';
// import logo from '/public/logo.png'

// Helper component for SVG icons
const Icon = ({ name, className }) => {
  const icons = {
    send: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
    ),
    user: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    ),
    bot: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path><path d="M12 16l-2 2.5 2 2.5 2-2.5-2-2.5z"></path></svg>
    ),
    mic: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
    ),
    micOff: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="2" y1="2" x2="22" y2="22"></line><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"></path><path d="M5 10v2a7 7 0 0 0 12 5"></path><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"></path><path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
    ),
  };
  return icons[name] || null;
};

// Component to render text with multiple formatting options
const FormattedText = ({ text }) => {
  const formatText = (text) => {
    // Create a comprehensive regex that matches all formatting patterns
    const formatRegex = /(\*\*.*?\*\*|\*(?!\*)[^*]*?\*|~~.*?~~|`[^`]*?`)/g;
    const parts = text.split(formatRegex);
    
    return parts.map((part, index) => {
      // Bold text (**text**)
      if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
        const boldText = part.slice(2, -2);
        return <strong key={index}>{boldText}</strong>;
      }
      
      // Italic text (*text*) - but not if it's part of **text**
      if (part.startsWith('*') && part.endsWith('*') && part.length > 2 && !part.startsWith('**')) {
        const italicText = part.slice(1, -1);
        return <em key={index}>{italicText}</em>;
      }
      
      // Strikethrough text (~~text~~)
      if (part.startsWith('~~') && part.endsWith('~~') && part.length > 4) {
        const strikeText = part.slice(2, -2);
        return <span key={index} className="line-through">{strikeText}</span>;
      }
      
      // Code text (`text`)
      if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
        const codeText = part.slice(1, -1);
        return (
          <code 
            key={index} 
            className="px-1 py-0.5 rounded text-xs bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 font-mono"
          >
            {codeText}
          </code>
        );
      }
      
      // Regular text
      return part;
    });
  };

  return <span>{formatText(text)}</span>;
};

// Main Chatbot Component
const Chatbot = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // If user is not logged in, show a prompt and the shared LoginSignUpButton (mobile + desktop)
  if (!user) {
    return (
      <div id='chat' className="font-sans text-slate-800 dark:text-slate-200 antialiased transition-colors duration-300 p-4">
        <LoginRequired />
      </div>
    );
  }

  // State management for logged-in chat UI
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatInitiated, setChatInitiated] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Generate or retrieve conversation ID
  useEffect(() => {
    // Try to get existing conversation ID from localStorage
    const storedConvId = localStorage.getItem('conversation_id');
    if (storedConvId) {
      setConversationId(storedConvId);
    } else {
      // Generate new conversation ID
      const newConvId = crypto.randomUUID();
      localStorage.setItem('conversation_id', newConvId);
      setConversationId(newConvId);
    }
  }, []);

  // Initialize with welcome message
  useEffect(() => {
    setMessages([{ sender: 'bot', text: "Hello! How can I assist you today?" }]);
    setIsLoadingHistory(false);
  }, []);

  // Function to save message to Supabase
  const saveMessageToDatabase = async (role, content) => {
    if (!conversationId || !user) return;

    try {
      const { error } = await supabase
        .from('chat_messages')
        .insert({
          conversation_id: conversationId,
          user_id: user.id,
          role: role, // 'user' or 'assistant'
          content: content
        });

      if (error) {
        console.error('Error saving message:', error);
      }
    } catch (error) {
      console.error('Error in saveMessageToDatabase:', error);
    }
  };

  // Check for speech recognition support and initialize
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setSpeechSupported(true);
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      const recognition = recognitionRef.current;
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Effect to scroll to the latest message
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  // Pre-defined frequently asked questions
  const faqs = [
    "What are your capabilities?",
    "What to do when stressed?",
    "How to seek mental health assistance?",
    "How do I get started with my therapy?",
  ];

  // Function to toggle speech recognition
  const toggleSpeechRecognition = () => {
    if (!speechSupported) {
      alert('Speech recognition is not supported in your browser');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  // Function to handle sending a message (user or FAQ)
  const handleSendMessage = async (text) => {
    const messageText = text.trim();
    if (!messageText) return;

    // Hide suggestions once the first message is sent
    if (!chatInitiated) {
        setChatInitiated(true);
    }

    // Add user message to the chat
    const userMessage = { sender: 'user', text: messageText };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    // Save user message to database (only user messages)
    await saveMessageToDatabase('user', messageText);

    // Prepare the conversation history for the API with the system prompt
    const conversationHistory = [
        { 
            role: 'system', 
            content: 'You are warm, calm, and friendly. If the user seems emotionally distressed, respond with gentle empathy and brief comfort. Otherwise, reply helpfully to whatever they ask. Always keep responses short (1–2 sentences), kind, and—when it fits—a little humorous.' 
        },
        ...newMessages.map(msg => ({
            role: msg.sender === 'bot' ? 'assistant' : 'user',
            content: msg.text
        }))
    ];

    try {
      // --- API Call to OpenRouter ---
      const getapi = import.meta.env.VITE_API_KEY;
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${getapi}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  
          model: "deepseek/deepseek-chat",
          messages: conversationHistory,
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      // Add bot response to the chat
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);

      // Bot messages are NOT saved to database - only user inputs are stored

    } catch (error) {
      console.error("Error fetching from OpenRouter:", error);
      const errorMessage = "Sorry, I'm having trouble connecting. Please try again later.";
      setMessages(prev => [...prev, { sender: 'bot', text: errorMessage }]);
      
      // Error messages are also NOT saved to database
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state while initializing
  if (isLoadingHistory) {
    return (
      <div id='chat' className="max-h-[80vh] font-sans flex flex-col items-center justify-center p-4 transition-colors duration-500">
        <div className="text-gray-600 dark:text-gray-400">Initializing chat...</div>
      </div>
    );
  }

  return (
    <div id='chat' className="max-h-[80vh] font-sans flex flex-col items-center p-4 transition-colors duration-500 ">
      <div className="w-full max-w-2xl h-full max-h-[80vh] flex flex-col">

        {/* Header and Theme Toggle */}
        <header className="relative w-full flex justify-center items-center p-4 flex-shrink-0">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Ask anything
          </h1>
        </header>

        {/* Chat Container with Glass Effect */}
        <div className="flex-1 flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 bg-white/60 dark:border-gray-700/50 dark:bg-gray-800/60 backdrop-blur-xl min-h-0">
          
          {/* Messages Display */}
          <div ref={chatContainerRef} className="flex-1 p-6 px-4 space-y-4 overflow-y-auto no-scrollbar">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    <img className='w-10 h-auto rounded-full' src={chatbotIcon} alt="" />
                  </div>
                )}
                <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${msg.sender === 'user' ? 'rounded-br-lg bg-blue-500 text-white dark:bg-blue-600' : 'rounded-bl-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                  <p className="text-sm break-words">
                    <FormattedText text={msg.text} />
                  </p>
                </div>
                 {msg.sender === 'user' && (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-200">
                    <Icon name="user" className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                 <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    <img className='w-10 h-auto rounded-full' src={chatbotIcon} alt="" />
                  </div>
                <div className="px-4 py-3 rounded-2xl rounded-bl-lg bg-gray-200 dark:bg-gray-700">
                  <div className="flex items-center justify-center space-x-1">
                    <span className="h-2 w-2 rounded-full animate-bounce [animation-delay:-0.3s] bg-gray-500 dark:bg-gray-400"></span>
                    <span className="h-2 w-2 rounded-full animate-bounce [animation-delay:-0.15s] bg-gray-500 dark:bg-gray-400"></span>
                    <span className="h-2 w-2 rounded-full animate-bounce bg-gray-500 dark:bg-gray-400"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* FAQ and Input Section */}
          <div className="p-6 border-t border-t-gray-200/50 dark:border-t-gray-700/50">
            {/* FAQ Buttons - Conditionally rendered */}
            {!chatInitiated && (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(faq)}
                    className="text-xs text-left p-3 rounded-lg transition-colors bg-white/80 hover:bg-gray-200/80 text-gray-600 dark:bg-gray-900/50 dark:hover:bg-gray-700/70 dark:text-gray-300"
                  >
                    {faq}
                  </button>
                ))}
              </div>
            )}

            {/* Input Section with Speech Button */}
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(inputValue);
                    }
                  }}
                  placeholder={isListening ? "Listening..." : "Type your message..."}
                  className={`w-full p-3 pr-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white/80 border-gray-300 text-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${isListening ? 'ring-2 ring-red-400 border-red-400' : ''}`}
                  disabled={isLoading}
                />
                {speechSupported && (
                  <button
                    type="button"
                    onClick={toggleSpeechRecognition}
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-200 ${isListening ? 'bg-red-100 text-red-600 hover:bg-red-200 animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500'}`}
                    disabled={isLoading}
                    title={isListening ? "Stop recording" : "Start voice input"}
                  >
                    <Icon name={isListening ? "micOff" : "mic"} className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button 
                onClick={() => handleSendMessage(inputValue)}
                disabled={isLoading || !inputValue.trim()} 
                className="p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <img className='w-6 h-6' src={send} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;