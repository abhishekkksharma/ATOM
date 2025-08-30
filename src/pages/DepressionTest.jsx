// import React, { useState } from 'react';

// export default function DepressionTest() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResults, setShowResults] = useState(false);

//   const questions = [
//     {
//       id: 1,
//       question: "Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?",
//       options: [
//         { value: 0, label: "Not at all" },
//         { value: 1, label: "Several days" },
//         { value: 2, label: "More than half the days" },
//         { value: 3, label: "Nearly every day" }
//       ]
//     },
//     {
//       id: 2,
//       question: "Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
//       options: [
//         { value: 0, label: "Not at all" },
//         { value: 1, label: "Several days" },
//         { value: 2, label: "More than half the days" },
//         { value: 3, label: "Nearly every day" }
//       ]
//     },
//     {
//       id: 3,
//       question: "Over the last 2 weeks, how often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
//       options: [
//         { value: 0, label: "Not at all" },
//         { value: 1, label: "Several days" },
//         { value: 2, label: "More than half the days" },
//         { value: 3, label: "Nearly every day" }
//       ]
//     },
//     {
//       id: 4,
//       question: "Over the last 2 weeks, how often have you been bothered by feeling tired or having little energy?",
//       options: [
//         { value: 0, label: "Not at all" },
//         { value: 1, label: "Several days" },
//         { value: 2, label: "More than half the days" },
//         { value: 3, label: "Nearly every day" }
//       ]
//     },
//     {
//       id: 5,
//       question: "Over the last 2 weeks, how often have you been bothered by poor appetite or overeating?",
//       options: [
//         { value: 0, label: "Not at all" },
//         { value: 1, label: "Several days" },
//         { value: 2, label: "More than half the days" },
//         { value: 3, label: "Nearly every day" }
//       ]
//     }
//   ];

//   const handleAnswer = (value) => {
//     setAnswers(prev => ({
//       ...prev,
//       [questions[currentQuestion].id]: value
//     }));
//   };

//   const nextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       calculateResults();
//     }
//   };

//   const previousQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const calculateResults = () => {
//     const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
//     setShowResults(true);
//   };

//   const getResultMessage = (score) => {
//     if (score <= 4) return { severity: "Minimal", color: "text-green-600", bgColor: "bg-green-100", message: "Your symptoms suggest minimal depression. Continue monitoring your mental health." };
//     if (score <= 9) return { severity: "Mild", color: "text-yellow-600", bgColor: "bg-yellow-100", message: "Your symptoms suggest mild depression. Consider talking to a mental health professional." };
//     if (score <= 14) return { severity: "Moderate", color: "text-orange-600", bgColor: "bg-orange-100", message: "Your symptoms suggest moderate depression. We recommend seeking professional help." };
//     return { severity: "Severe", color: "text-red-600", bgColor: "bg-red-100", message: "Your symptoms suggest severe depression. Please seek immediate professional help." };
//   };

//   const resetTest = () => {
//     setCurrentQuestion(0);
//     setAnswers({});
//     setShowResults(false);
//   };

//   if (showResults) {
//     const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
//     const result = getResultMessage(totalScore);
    
//     return (
//       <div className="space-y-8">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
//             Your Depression Test Results
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-400">
//             Based on your responses, here's what we found:
//           </p>
//         </div>

//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
//           <div className={`text-center p-6 rounded-xl ${result.bgColor} dark:bg-gray-700 mb-8`}>
//             <h2 className={`text-3xl font-bold ${result.color} dark:text-gray-100 mb-2`}>
//               {result.severity} Depression
//             </h2>
//             <p className="text-lg text-gray-700 dark:text-gray-300">
//               Score: {totalScore}/15
//             </p>
//           </div>

//           <div className="space-y-6">
//             <div className="text-center">
//               <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
//                 {result.message}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
//                   Next Steps
//                 </h3>
//                 <ul className="space-y-2 text-gray-600 dark:text-gray-400">
//                   <li>• Monitor your symptoms</li>
//                   <li>• Practice self-care activities</li>
//                   <li>• Consider professional help</li>
//                   <li>• Reach out to support networks</li>
//                 </ul>
//               </div>

//               <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
//                   Resources
//                 </h3>
//                 <ul className="space-y-2 text-gray-600 dark:text-gray-400">
//                   <li>• Crisis helpline: 988</li>
//                   <li>• Find a therapist</li>
//                   <li>• Support groups</li>
//                   <li>• Educational materials</li>
//                 </ul>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={resetTest}
//                 className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
//               >
//                 Take Test Again
//               </button>
//               <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
//                 Find a Therapist
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
//           Depression Screening Test
//         </h1>
//         <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//           This is a self-assessment tool to help you understand your mental health. 
//           It's not a diagnosis, but it can help you decide if you should seek professional help.
//         </p>
//       </div>

//       <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-4">
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               Question {currentQuestion + 1} of {questions.length}
//             </span>
//             <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//               <div 
//                 className="bg-blue-600 h-2 rounded-full transition-all duration-300"
//                 style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         <div className="space-y-8">
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
//               {questions[currentQuestion].question}
//             </h2>
            
//             <div className="space-y-3">
//               {questions[currentQuestion].options.map((option) => (
//                 <button
//                   key={option.value}
//                   onClick={() => handleAnswer(option.value)}
//                   className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
//                     answers[questions[currentQuestion].id] === option.value
//                       ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
//                       : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
//                   }`}
//                 >
//                   {option.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-between">
//             <button
//               onClick={previousQuestion}
//               disabled={currentQuestion === 0}
//               className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
//                 currentQuestion === 0
//                   ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
//                   : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
//               }`}
//             >
//               Previous
//             </button>
            
//             <button
//               onClick={nextQuestion}
//               disabled={!answers[questions[currentQuestion].id]}
//               className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
//                 !answers[questions[currentQuestion].id]
//                   ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
//                   : 'bg-blue-600 hover:bg-blue-700 text-white'
//               }`}
//             >
//               {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
//         <div className="flex items-start space-x-3">
//           <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           <div>
//             <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Important Note</h3>
//             <p className="text-blue-800 dark:text-blue-200 text-sm">
//               This test is for informational purposes only and is not a substitute for professional medical advice, 
//               diagnosis, or treatment. If you're experiencing severe symptoms, please contact a mental health 
//               professional or call the National Suicide Prevention Lifeline at 988.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     // <div className='h-screen flex justify-center items-center font-bold text-4xl'>
//     //   <h1 className='text-black dark:text-white'>Depression test</h1>
//     // </div>
//   );
// } 

import React, { useState } from 'react';

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
    </div>
  );
}


