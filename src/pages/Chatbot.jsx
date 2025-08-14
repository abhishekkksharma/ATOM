import React, { useState, useEffect, useRef } from 'react';
// import './custom css/chatbot.css';
// Helper component for SVG icons
const Icon = ({ name, className }) => {
  const icons = {
    sun: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    ),
    moon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    ),
    send: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
    ),
    user: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    ),
    bot: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path><path d="M12 16l-2 2.5 2 2.5 2-2.5-2-2.5z"></path></svg>
    ),
  };
  return icons[name] || null;
};

// Main Chatbot Component
const Chatbot = () => {
  // State management
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! How can I assist you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatInitiated, setChatInitiated] = useState(false); // New state to track conversation start
  const messagesEndRef = useRef(null);

  // Effect to scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Pre-defined frequently asked questions
  const faqs = [
    "What are your capabilities?",
    "What is React?",
    "Explain Tailwind CSS in simple terms.",
    "How do I get started with AI?",
  ];

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
      // IMPORTANT: Replace "YOUR_OPENROUTER_API_KEY" with your actual key.
      const getapi = "get the api key from process.env here to make it work.";
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${getapi}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat", // Using DeepSeek model
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

    } catch (error) {
      console.error("Error fetching from OpenRouter:", error);
      // Display an error message to the user in the chat
      setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, I'm having trouble connecting. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-h-[80vh] font-sans flex flex-col items-center p-4 transition-colors duration-500 ">
      <div className="w-full max-w-2xl h-full max-h-[80vh] flex flex-col">

        {/* Header and Theme Toggle */}
        <header className="relative w-full flex justify-center items-center p-4 flex-shrink-0">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Ask anything
          </h1>
          {/* Note: You'll need to hook up your own theme toggling logic to this button */}
        </header>

        {/* Chat Container with Glass Effect */}
        <div className="flex-1 flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 bg-white/60 dark:border-gray-700/50 dark:bg-gray-800/60 backdrop-blur-xl min-h-0">
          
          {/* Messages Display */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto no-scrollbar">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    <Icon name="bot" className="w-6 h-6" />
                  </div>
                )}
                <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${msg.sender === 'user' ? 'rounded-br-lg bg-blue-500 text-white dark:bg-blue-600' : 'rounded-bl-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                  <p className="text-sm">{msg.text}</p>
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
                    <Icon name="bot" className="w-6 h-6" />
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

            {/* Input Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white/80 border-gray-300 text-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading || !inputValue.trim()} className="p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
                <Icon name="send" className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
