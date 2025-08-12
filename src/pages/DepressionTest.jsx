import React, { useState } from 'react';

export default function DepressionTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?",
      options: [
        { value: 0, label: "Not at all" },
        { value: 1, label: "Several days" },
        { value: 2, label: "More than half the days" },
        { value: 3, label: "Nearly every day" }
      ]
    },
    {
      id: 2,
      question: "Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
      options: [
        { value: 0, label: "Not at all" },
        { value: 1, label: "Several days" },
        { value: 2, label: "More than half the days" },
        { value: 3, label: "Nearly every day" }
      ]
    },
    {
      id: 3,
      question: "Over the last 2 weeks, how often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
      options: [
        { value: 0, label: "Not at all" },
        { value: 1, label: "Several days" },
        { value: 2, label: "More than half the days" },
        { value: 3, label: "Nearly every day" }
      ]
    },
    {
      id: 4,
      question: "Over the last 2 weeks, how often have you been bothered by feeling tired or having little energy?",
      options: [
        { value: 0, label: "Not at all" },
        { value: 1, label: "Several days" },
        { value: 2, label: "More than half the days" },
        { value: 3, label: "Nearly every day" }
      ]
    },
    {
      id: 5,
      question: "Over the last 2 weeks, how often have you been bothered by poor appetite or overeating?",
      options: [
        { value: 0, label: "Not at all" },
        { value: 1, label: "Several days" },
        { value: 2, label: "More than half the days" },
        { value: 3, label: "Nearly every day" }
      ]
    }
  ];

  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    setShowResults(true);
  };

  const getResultMessage = (score) => {
    if (score <= 4) return { severity: "Minimal", color: "text-green-600", bgColor: "bg-green-100", message: "Your symptoms suggest minimal depression. Continue monitoring your mental health." };
    if (score <= 9) return { severity: "Mild", color: "text-yellow-600", bgColor: "bg-yellow-100", message: "Your symptoms suggest mild depression. Consider talking to a mental health professional." };
    if (score <= 14) return { severity: "Moderate", color: "text-orange-600", bgColor: "bg-orange-100", message: "Your symptoms suggest moderate depression. We recommend seeking professional help." };
    return { severity: "Severe", color: "text-red-600", bgColor: "bg-red-100", message: "Your symptoms suggest severe depression. Please seek immediate professional help." };
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const result = getResultMessage(totalScore);
    
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Your Depression Test Results
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Based on your responses, here's what we found:
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
          <div className={`text-center p-6 rounded-xl ${result.bgColor} dark:bg-gray-700 mb-8`}>
            <h2 className={`text-3xl font-bold ${result.color} dark:text-gray-100 mb-2`}>
              {result.severity} Depression
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Score: {totalScore}/15
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                {result.message}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Next Steps
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Monitor your symptoms</li>
                  <li>• Practice self-care activities</li>
                  <li>• Consider professional help</li>
                  <li>• Reach out to support networks</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Resources
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Crisis helpline: 988</li>
                  <li>• Find a therapist</li>
                  <li>• Support groups</li>
                  <li>• Educational materials</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetTest}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Take Test Again
              </button>
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                Find a Therapist
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Depression Screening Test
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          This is a self-assessment tool to help you understand your mental health. 
          It's not a diagnosis, but it can help you decide if you should seek professional help.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    answers[questions[currentQuestion].id] === option.value
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                currentQuestion === 0
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Previous
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={!answers[questions[currentQuestion].id]}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                !answers[questions[currentQuestion].id]
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Important Note</h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              This test is for informational purposes only and is not a substitute for professional medical advice, 
              diagnosis, or treatment. If you're experiencing severe symptoms, please contact a mental health 
              professional or call the National Suicide Prevention Lifeline at 988.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 