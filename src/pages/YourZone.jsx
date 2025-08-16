import React, { useState } from 'react';

export default function YourZone() {
  const [activeTab, setActiveTab] = useState('overview');

  const userData = {
    name: "Alex Johnson",
    joinDate: "March 2024",
    totalSessions: 12,
    currentStreak: 5,
    moodScore: 7.5,
    goals: [
      { id: 1, title: "Practice daily meditation", completed: 8, total: 30, status: "in-progress" },
      { id: 2, title: "Exercise 3 times per week", completed: 2, total: 12, status: "in-progress" },
      { id: 3, title: "Read for 30 minutes daily", completed: 15, total: 30, status: "in-progress" }
    ],
    recentActivities: [
      { id: 1, type: "meditation", duration: "15 min", date: "Today", mood: "calm" },
      { id: 2, type: "therapy_session", duration: "50 min", date: "Yesterday", mood: "relieved" },
      { id: 3, type: "exercise", duration: "30 min", date: "2 days ago", mood: "energized" }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'goals', label: 'Goals', icon: 'Target' },
    { id: 'activities', label: 'Activities', icon: 'Activity' },
    { id: 'progress', label: 'Progress', icon: 'TrendingUp' },
    { id: 'resources', label: 'Resources', icon: 'BookOpen' }
  ];

  const getMoodColor = (score) => {
    if (score >= 8) return 'text-green-600 bg-green-100 dark:bg-green-900/30';
    if (score >= 6) return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
    if (score >= 4) return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30';
    return 'text-red-600 bg-red-100 dark:bg-red-900/30';
  };

  const getActivityIcon = (type) => {
    const icons = {
      meditation: "🧘",
      therapy_session: "💬",
      exercise: "🏃",
      reading: "📚",
      journaling: "✍️"
    };
    return icons[type] || "📝";
  };

  const getMoodIcon = (mood) => {
    const icons = {
      calm: "😌",
      relieved: "😌",
      energized: "😊",
      happy: "😄",
      sad: "😔",
      anxious: "😰"
    };
    return icons[mood] || "😐";
  };

  return (
    // <div className="space-y-8">
    //   <div className="text-center">
    //     <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
    //       Welcome to Your Zone
    //     </h1>
    //     <p className="text-xl text-gray-600 dark:text-gray-400">
    //       Your personal space for mental health tracking and growth
    //     </p>
    //   </div>

    //   {/* User Stats Overview */}
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //     <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-sm text-gray-500 dark:text-gray-400">Total Sessions</p>
    //           <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{userData.totalSessions}</p>
    //         </div>
    //         <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
    //           <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-sm text-gray-500 dark:text-gray-400">Current Streak</p>
    //           <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{userData.currentStreak} days</p>
    //         </div>
    //         <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
    //           <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-sm text-gray-500 dark:text-gray-400">Mood Score</p>
    //           <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{userData.moodScore}/10</p>
    //         </div>
    //         <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getMoodColor(userData.moodScore)}`}>
    //           <span className="text-xl">😊</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
    //       <div className="flex items-center justify-between">
    //         <div>
    //           <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
    //           <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{userData.joinDate}</p>
    //         </div>
    //         <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
    //           <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Navigation Tabs */}
    //   <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
    //     <div className="border-b border-gray-200 dark:border-gray-700">
    //       <nav className="flex space-x-8 px-6">
    //         {tabs.map((tab) => (
    //           <button
    //             key={tab.id}
    //             onClick={() => setActiveTab(tab.id)}
    //             className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
    //               activeTab === tab.id
    //                 ? 'border-blue-500 text-blue-600 dark:text-blue-400'
    //                 : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
    //             }`}
    //           >
    //             {tab.label}
    //           </button>
    //         ))}
    //       </nav>
    //     </div>

    //     <div className="p-6">
    //       {activeTab === 'overview' && (
    //         <div className="space-y-6">
    //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //             <div>
    //               <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Activities</h3>
    //               <div className="space-y-3">
    //                 {userData.recentActivities.slice(0, 3).map((activity) => (
    //                   <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
    //                     <span className="text-2xl">{getActivityIcon(activity.type)}</span>
    //                     <div className="flex-1">
    //                       <p className="font-medium text-gray-900 dark:text-gray-100 capitalize">
    //                         {activity.type.replace('_', ' ')}
    //                       </p>
    //                       <p className="text-sm text-gray-500 dark:text-gray-400">
    //                         {activity.duration} • {activity.date}
    //                       </p>
    //                     </div>
    //                     <span className="text-xl">{getMoodIcon(activity.mood)}</span>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>

    //             <div>
    //               <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Current Goals</h3>
    //               <div className="space-y-3">
    //                 {userData.goals.slice(0, 2).map((goal) => (
    //                   <div key={goal.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
    //                     <div className="flex items-center justify-between mb-2">
    //                       <p className="font-medium text-gray-900 dark:text-gray-100">{goal.title}</p>
    //                       <span className="text-sm text-gray-500 dark:text-gray-400">
    //                         {goal.completed}/{goal.total}
    //                       </span>
    //                     </div>
    //                     <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
    //                       <div 
    //                         className="bg-blue-600 h-2 rounded-full transition-all duration-300"
    //                         style={{ width: `${(goal.completed / goal.total) * 100}%` }}
    //                       ></div>
    //                     </div>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       )}

    //       {activeTab === 'goals' && (
    //         <div className="space-y-6">
    //           <div className="flex justify-between items-center">
    //             <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Your Goals</h3>
    //             <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
    //               Add New Goal
    //             </button>
    //           </div>
              
    //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //             {userData.goals.map((goal) => (
    //               <div key={goal.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
    //                 <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">{goal.title}</h4>
    //                 <div className="mb-4">
    //                   <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
    //                     <span>Progress</span>
    //                     <span>{goal.completed}/{goal.total}</span>
    //                   </div>
    //                   <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
    //                     <div 
    //                       className="bg-blue-600 h-2 rounded-full transition-all duration-300"
    //                       style={{ width: `${(goal.completed / goal.total) * 100}%` }}
    //                     ></div>
    //                   </div>
    //                 </div>
    //                 <div className="flex space-x-2">
    //                   <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
    //                     Update
    //                   </button>
    //                   <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
    //                     Edit
    //                   </button>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       )}

    //       {activeTab === 'activities' && (
    //         <div className="space-y-6">
    //           <div className="flex justify-between items-center">
    //             <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Activity History</h3>
    //             <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
    //               Log Activity
    //             </button>
    //           </div>
              
    //           <div className="space-y-3">
    //             {userData.recentActivities.map((activity) => (
    //               <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
    //                 <span className="text-3xl">{getActivityIcon(activity.type)}</span>
    //                 <div className="flex-1">
    //                   <h4 className="font-medium text-gray-900 dark:text-gray-100 capitalize">
    //                     {activity.type.replace('_', ' ')}
    //                   </h4>
    //                   <p className="text-sm text-gray-500 dark:text-gray-400">
    //                     {activity.duration} • {activity.date}
    //                   </p>
    //                 </div>
    //                 <div className="text-right">
    //                   <span className="text-2xl">{getMoodIcon(activity.mood)}</span>
    //                   <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{activity.mood}</p>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       )}

    //       {activeTab === 'progress' && (
    //         <div className="space-y-6">
    //           <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Progress Charts</h3>
    //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //             <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
    //               <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-4">Mood Trends</h4>
    //               <div className="h-32 bg-gray-200 dark:bg-gray-600 rounded flex items-end justify-center">
    //                 <div className="text-gray-500 dark:text-gray-400 text-sm">Chart placeholder</div>
    //               </div>
    //             </div>
    //             <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
    //               <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-4">Activity Frequency</h4>
    //               <div className="h-32 bg-gray-200 dark:bg-gray-600 rounded flex items-end justify-center">
    //                 <div className="text-gray-500 dark:text-gray-400 text-sm">Chart placeholder</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       )}

    //       {activeTab === 'resources' && (
    //         <div className="space-y-6">
    //           <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recommended Resources</h3>
    //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //             <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
    //               <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Meditation Guide</h4>
    //               <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Learn basic meditation techniques</p>
    //               <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
    //                 Start Learning
    //               </button>
    //             </div>
    //             <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
    //               <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Breathing Exercises</h4>
    //               <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Simple breathing techniques</p>
    //               <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
    //                 Try Now
    //               </button>
    //             </div>
    //             <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
    //               <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Journaling Prompts</h4>
    //               <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Daily reflection questions</p>
    //               <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
    //                 Get Prompts
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className='h-screen flex justify-center items-center font-bold text-4xl'>
      <h1 className='dark:text-white'>Your zone</h1>
    </div>
  );
} 