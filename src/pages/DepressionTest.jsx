import React, { useState } from 'react';
import TestInfo from '../components/DepressionTestInfo';

// Icon component to display the result visually
const ResultIcon = ({ level }) => {
  const iconProps = {
    className: "w-20 h-20 mx-auto mb-4",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    stroke: "currentColor"
  };

  const icons = {
    Minimal: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Mild: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 14.25h5M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Moderate: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4 4 0 01-6.364 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    "Moderately Severe": (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4 4 0 01-6.364 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Severe: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.182a4 4 0 01-6.364 0M9 9h.01M15 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };


  const colorClasses = {
    Minimal: "text-green-500",
    Mild: "text-yellow-500",
    Moderate: "text-orange-500",
    "Moderately Severe": "text-red-500",
    Severe: "text-red-700 dark:text-red-600",
  }

  return <div className={colorClasses[level]}>{icons[level] || icons.Mild}</div>;
};


// Main Component for the Depression Self-Assessment
export default function DepressionAssessment() {
  const questions = [
    { text: "Little interest or pleasure in doing things" },
    { text: "Feeling down, depressed, or hopeless" },
    { text: "Trouble falling or staying asleep, or sleeping too much" },
    { text: "Feeling tired or having little energy" },
    { text: "Poor appetite or overeating" },
    { text: "Feeling bad about yourself — or that you are a failure" },
    { text: "Trouble concentrating on things, like reading or watching TV" },
    { text: "Moving or speaking so slowly that others have noticed, or being restless" },
    { text: "Thoughts that you would be better off dead or of hurting yourself" }
  ];

  const options = [
    { text: "Not at all", value: 0 },
    { text: "Several days", value: 1 },
    { text: "More than half the days", value: 2 },
    { text: "Nearly every day", value: 3 }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Handles the user selecting an answer
  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Calculates the final score
  const calculateResults = () => {
    const totalScore = answers.reduce((sum, value) => sum + (value || 0), 0);
    setScore(totalScore);
  };
  
  // Resets the quiz to its initial state
  const retakeQuiz = () => {
      setCurrentQuestionIndex(0);
      setAnswers(Array(questions.length).fill(null));
      setShowResults(false);
      setScore(0);
  };

  // Determines the interpretation text based on the score
  const getInterpretation = (score) => {
    if (score <= 4) return { level: "Minimal", text: "Your score suggests you may be experiencing few, if any, symptoms of depression. It's always good to practice self-care." };
    if (score <= 9) return { level: "Mild", text: "Your score suggests mild symptoms. Consider talking to a friend, family member, or a professional." };
    if (score <= 14) return { level: "Moderate", text: "Your score suggests moderate symptoms. It is recommended to consult with a doctor or mental health professional." };
    if (score <= 19) return { level: "Moderately Severe", text: "Your score suggests moderately severe symptoms. Professional help is highly recommended." };
    return { level: "Severe", text: "Your score suggests severe symptoms. Please seek professional help as soon as possible." };
  };

  const interpretation = getInterpretation(score);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isCurrentQuestionAnswered = answers[currentQuestionIndex] !== null;

  return (
    <div className="font-sans text-slate-800 dark:text-slate-200 antialiased transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Depression Self-Assessment</h1>
            <p className="mt-2 text-md text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Based on the PHQ-9 Questionnaire</p>
        </header>
        
        <main className="w-full max-w-2xl bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 min-h-[450px]">
            {!showResults ? (
                <div key={currentQuestionIndex} className="animate-fade-in flex flex-col h-full">
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Question {currentQuestionIndex + 1} of {questions.length}</p>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h2 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Over the last 2 weeks, how often have you been bothered by the following problem?</h2>
                      <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8">{questions[currentQuestionIndex].text}</p>
                      
                      <div className="space-y-4">
                          {options.map((option) => (
                              <button
                                  key={option.value}
                                  onClick={() => handleAnswer(option.value)}
                                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                                    answers[currentQuestionIndex] === option.value
                                      ? 'bg-indigo-100 dark:bg-indigo-900/50 border-indigo-500'
                                      : 'bg-slate-100 dark:bg-gray-700 border-transparent hover:bg-indigo-50 dark:hover:bg-gray-600 hover:border-indigo-400'
                                  }`}
                              >
                                  {option.text}
                              </button>
                          ))}
                      </div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-gray-700 flex justify-between items-center">
                      <button 
                        onClick={handlePrevious} 
                        disabled={currentQuestionIndex === 0}
                        className="py-2 px-6 bg-slate-200 dark:bg-gray-600 text-slate-800 dark:text-slate-200 rounded-lg font-semibold hover:bg-slate-300 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Prev
                      </button>
                      <button 
                        onClick={handleNext}
                        disabled={!isCurrentQuestionAnswered}
                        className="py-2 px-6 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:bg-indigo-400 dark:disabled:bg-indigo-800 disabled:cursor-not-allowed transition-colors"
                      >
                        {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next'}
                      </button>
                    </div>
                </div>
            ) : (
                <div className="text-center animate-fade-in">
                    <ResultIcon level={interpretation.level} />
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Your Result</h2>
                    <div className="my-6">
                        <p className="text-slate-600 dark:text-slate-400">Your score is</p>
                        <p className="text-6xl md:text-7xl font-bold text-indigo-600 dark:text-indigo-500">{score}</p>
                        <p className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-2">{interpretation.level} Depression</p>
                    </div>
                    <p className="text-md text-slate-700 dark:text-slate-300 mb-6 max-w-md mx-auto">{interpretation.text}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-8">
                        <strong>Disclaimer:</strong> This result is not a diagnosis. A doctor or therapist can help you understand these results and discuss your mental health.
                    </p>
                    <button
                        onClick={retakeQuiz}
                        className="w-full md:w-auto bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                    >
                        Take the Test Again
                    </button>
                </div>
            )}
        </main>
      </div>
      <TestInfo/>
    </div>
  );
}


