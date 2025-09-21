import React, { useState } from 'react';
import profileimg from './../assets/contactform/profileimg1.png';

// Mock profile image - replace with your actual image path

// The main App component that renders the contact form.
export default function ContactForm() {
  // State for form fields. We use a single object for convenience.
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // State to handle form submission status (loading, success, error).
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [responseMessage, setResponseMessage] = useState('');

  // Handles changes to any input field.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles the form submission using Web3Forms API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');

    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus('error');
      setResponseMessage('Please fill in all required fields.');
      return;
    }

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      
      // Add the access key
      formDataToSend.append('access_key', 'd290f82f-7500-42b4-8542-20474e674f20');
      
      // Add form fields
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      
      // Optional: Add a combined name field for better email formatting
      formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setResponseMessage('Thank you! Your message has been sent successfully.');
        // Clear the form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setStatus('error');
        setResponseMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setResponseMessage('Network error. Please check your connection and try again.');
    }
  };

  // Define the icons using inline SVG for a clean, dependency-free solution.
  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.278 1.139a9.6 9.6 0 004.836 4.836l1.139-2.278a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
        
        {/* Left Section: Contact Form */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10">
          <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1 text-sm">Get in Touch</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Let's Chat, Contact with Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
            Have any questions or feedback? We're here to help. Send us a message, we'll get back to you within 24 hours.
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">First name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="yourname@example.com"
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Phone number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98xx78xx70"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
                rows="4"
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none text-sm"
              ></textarea>
            </div>

            {/* Display status messages */}
            {status === 'loading' && (
              <div className="flex items-center gap-2 text-blue-500 dark:text-blue-400 text-sm">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                Sending message...
              </div>
            )}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-500 dark:text-green-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {responseMessage}
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {responseMessage}
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full py-3 px-5 font-semibold text-base text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={status === 'loading'}
            >
              <SendIcon />
              <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
            </button>
          </div>
        </div>

        {/* Right Section: Contact Information and Image */}
        <div className="flex-1 bg-gray-50 dark:bg-gray-700 flex flex-col items-center justify-start p-6 sm:p-8 lg:p-10 rounded-3xl lg:rounded-l-none">
          {/* Hero Image */}
          <div className="relative w-full h-56 lg:h-64 xl:h-80 rounded-3xl overflow-hidden mb-6">
            <div className="absolute rounded-2xl"></div>
            <img
              src={profileimg}
              alt="Profile"
              className="object-cover w-full h-full rounded-2xl shadow-xl"
            />
          </div>
          
          {/* Contact Cards */}
          <div className="w-full space-y-4">
            <div className="flex items-center p-4 bg-gray-800 dark:bg-gray-900 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <div className="p-2 bg-gray-700 dark:bg-gray-800 rounded-full text-white mr-3">
                <MailIcon />
              </div>
              <div className="text-white">
                <h4 className="font-semibold text-xs">Email</h4>
                <a href="mailto:abhisheksharma7340733@mail.com" className="text-gray-400 text-xs hover:underline">atomconnect@mail.com</a>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-800 dark:bg-gray-900 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <div className="p-2 bg-gray-700 dark:bg-gray-800 rounded-full text-white mr-3">
                <PhoneIcon />
              </div>
              <div className="text-white">
                <h4 className="font-semibold text-xs">Phone</h4>
                <a href="tel:+917340733286" className="text-gray-400 text-xs hover:underline">(+91) 7340733286</a>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-800 dark:bg-gray-900 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <div className="p-2 bg-gray-700 dark:bg-gray-800 rounded-full text-web mr-3">
                <LocationIcon />
              </div>
              <div className="text-white">
                <h4 className="font-semibold text-xs">Address</h4>
                <p className="text-gray-400 text-xs">Chandigarh, India</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}