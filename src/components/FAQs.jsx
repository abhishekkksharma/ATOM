import React, { useState } from 'react';

// --- Data for the FAQ section ---
// You can easily replace these with your actual FAQs.
const faqData = [
    {
        question: "What is ATOM?",
        answer: "ATOM is a user-first mental health ecosystem that unifies essential wellness tools like self-assessments, chatbot support, therapist connections, and calming resources into one accessible platform."
    },
    {
        question: "Is ATOM free to use?",
        answer: "Yes, ATOM offers free access to its core features such as the depression test, chatbot support, and personal relaxation zone. Premium features like advanced analytics and exclusive therapist sessions may be introduced in the future."
    },
    {
        question: "What features does ATOM provide?",
        answer: "ATOM includes a depression self-assessment test, 24/7 chatbot support, a safe community space, local therapist finder, gamified social connections, and a personal relaxation hub with calming music, guided breathing, and quick stress-relief tools."
    },
    {
        question: "Can I trust ATOM with my data?",
        answer: "Yes, ATOM is designed with privacy and security as top priorities. All personal and mental health data is stored securely and handled in compliance with data protection standards."
    },
    {
        question: "Who can benefit from using ATOM?",
        answer: "ATOM is ideal for students, working professionals, and anyone seeking reliable mental health support, relaxation tools, or a safe community space for sharing and learning."
    },
    {
        question: "Have more questions?",
        answer: "Connect with us by submitting the form available above."
    }
];
// --- Helper Component for a single FAQ item ---
const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="rounded-lg border border-purple-200 dark:border-gray-700 transition-all duration-300 overflow-hidden">
            {/* Question Button */}
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left p-4 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-purple-50 dark:bg-black"
            >
                <h3 className="text-md font-medium text-gray-800 dark:text-white">
                    {question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                    {/* Chevron icon */}
                    <svg
                        className={`w-6 h-6 text-purple-600 dark:text-white transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Answer Panel (conditionally rendered) */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className="p-4 bg-white dark:bg-gray-900">
                    <p className="text-gray-600 dark:text-gray-300">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};


// --- Main FAQ Component ---
const FaqComponent = () => {
    // State to keep track of the currently open FAQ item. Set to null for all to be closed by default.
    const [openIndex, setOpenIndex] = useState(null); 

    // Function to handle clicking on a question
    const handleItemClick = (index) => {
        // If the clicked item is already open, close it. Otherwise, open it.
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white dark:bg-black min-h-screen p-4 sm:p-8 flex items-center justify-center font-sans">
            <div className="w-full max-w-2xl mx-auto">
                {/* Header Text */}
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-widest uppercase">
                        TRUSTED BY
                    </p>
                    <h1 className="mt-2 text-4xl sm:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight">
                        Frequently Asked Questions
                    </h1>
                </div>

                {/* FAQ List Container */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqComponent;

