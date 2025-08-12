import React, { useState } from 'react';

export default function Connect() {
  const [activeTab, setActiveTab] = useState('community');
  const [searchQuery, setSearchQuery] = useState('');

  const communityPosts = [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      content: "Just completed my first week of daily meditation! Feeling so much more centered and peaceful. Anyone else trying to build a meditation habit?",
      likes: 24,
      comments: 8,
      timeAgo: "2 hours ago",
      tags: ["meditation", "wellness", "new-habit"]
    },
    {
      id: 2,
      author: "Mike R.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      content: "Struggling with anxiety today. The breathing exercises from the app really helped me get through a tough moment. Remember, it's okay to not be okay sometimes.",
      likes: 42,
      comments: 15,
      timeAgo: "5 hours ago",
      tags: ["anxiety", "breathing", "support"]
    },
    {
      id: 3,
      author: "Emma L.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      content: "Celebrating small wins! Finally got out of bed and went for a walk after feeling down for days. Sometimes the smallest steps lead to the biggest changes.",
      likes: 67,
      comments: 23,
      timeAgo: "1 day ago",
      tags: ["celebration", "depression", "small-wins"]
    }
  ];

  const supportGroups = [
    {
      id: 1,
      name: "Anxiety Support Circle",
      members: 156,
      description: "A safe space for those dealing with anxiety disorders. Share experiences, coping strategies, and support each other.",
      category: "Anxiety",
      meetingTime: "Every Tuesday, 7 PM EST"
    },
    {
      id: 2,
      name: "Depression Recovery Group",
      members: 203,
      description: "Support group for individuals on their journey to recovery from depression. Weekly check-ins and shared resources.",
      category: "Depression",
      meetingTime: "Every Thursday, 6 PM EST"
    },
    {
      id: 3,
      name: "Mindfulness & Meditation",
      members: 89,
      description: "Learn and practice mindfulness techniques together. Perfect for beginners and experienced practitioners alike.",
      category: "Mindfulness",
      meetingTime: "Every Saturday, 10 AM EST"
    },
    {
      id: 4,
      name: "LGBTQ+ Mental Health",
      members: 134,
      description: "Support group specifically for LGBTQ+ individuals dealing with mental health challenges. Inclusive and affirming space.",
      category: "LGBTQ+",
      meetingTime: "Every Monday, 8 PM EST"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Virtual Mental Health Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 4:00 PM EST",
      description: "Join us for an interactive workshop on managing stress and building resilience. Led by licensed therapists.",
      attendees: 45,
      maxAttendees: 100,
      type: "workshop"
    },
    {
      id: 2,
      title: "Art Therapy Session",
      date: "March 18, 2024",
      time: "6:00 PM - 7:30 PM EST",
      description: "Express yourself through art! No artistic experience required. Materials list will be provided.",
      attendees: 28,
      maxAttendees: 30,
      type: "therapy"
    },
    {
      id: 3,
      title: "Peer Support Meetup",
      date: "March 22, 2024",
      time: "7:00 PM - 8:30 PM EST",
      description: "Casual meetup to connect with others on similar mental health journeys. Share stories and build friendships.",
      attendees: 67,
      maxAttendees: 80,
      type: "meetup"
    }
  ];

  const tabs = [
    { id: 'community', label: 'Community', icon: 'Users' },
    { id: 'groups', label: 'Support Groups', icon: 'Users' },
    { id: 'events', label: 'Events', icon: 'Calendar' },
    { id: 'resources', label: 'Resources', icon: 'BookOpen' }
  ];

  const getEventIcon = (type) => {
    const icons = {
      workshop: "🎓",
      therapy: "🎨",
      meetup: "🤝"
    };
    return icons[type] || "📅";
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Connect & Support
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Join our supportive community, find support groups, and participate in events designed to help you on your mental health journey.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for posts, groups, or events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'community' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Community Posts</h3>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Create Post
                </button>
              </div>
              
              <div className="space-y-6">
                {communityPosts.map((post) => (
                  <div key={post.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">{post.author}</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{post.timeAgo}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">{post.content}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{post.comments}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'groups' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Support Groups</h3>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Create Group
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supportGroups.map((group) => (
                  <div key={group.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{group.name}</h4>
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full mb-3">
                          {group.category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{group.members} members</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{group.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{group.meetingTime}</span>
                    </div>
                    <div className="flex space-x-3">
                      <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                        Join Group
                      </button>
                      <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Upcoming Events</h3>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Create Event
                </button>
              </div>
              
              <div className="space-y-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{getEventIcon(event.type)}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{event.title}</h4>
                        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <span>{event.date}</span>
                          <span>{event.time}</span>
                          <span>{event.attendees}/{event.maxAttendees} attending</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
                        <div className="flex space-x-3">
                          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                            Attend
                          </button>
                          <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                            Add to Calendar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Community Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Community Guidelines</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Learn about our community rules and how to be supportive</p>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    Read Guidelines
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Crisis Resources</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Emergency contacts and crisis support information</p>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    View Resources
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Moderation Team</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Meet our community moderators and learn how to report issues</p>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    Contact Mods
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 