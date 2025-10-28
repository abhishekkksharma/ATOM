import React, { useState } from 'react';

// Reusable Input component with error handling
const Input = ({ id, type, placeholder, icon, value, onChange, error }) => (
    <div>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {icon}
            </div>
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={onChange}
                required
                className={`w-full pl-10 pr-4 py-2 border rounded-md shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 ${
                    error
                        ? 'border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500'
                        : 'border-slate-300 dark:border-slate-600 focus:ring-blue-500 focus:border-blue-500'
                }`}
                placeholder={placeholder}
            />
        </div>
        {error && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
);

// Reusable Select component with error handling
const Select = ({ id, options, placeholder, icon, value, onChange, error }) => (
    <div>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                {icon}
            </div>
            <select
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required
                className={`w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 appearance-none ${
                    error
                        ? 'border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500'
                        : 'border-slate-300 dark:border-slate-600 focus:ring-blue-500 focus:border-blue-500'
                }`}
            >
                <option value="" disabled className="text-slate-400 dark:text-slate-500">
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDownIcon />
            </div>
        </div>
        {error && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
);

// --- SVG Icons (Unchanged) ---
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const GenderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);
// --- End SVG Icons ---


// Main App Component (Renamed from AuthPage)
const App = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
        age: '',
        city: ''
    });
    // State to hold validation errors
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        
        // Clear the error for the field being edited
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: null
            });
        }
    };

    // Validation logic
    const validateForm = () => {
        const newErrors = {};
        
        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        
        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required.';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters.';
        }

        // Sign Up specific validations
        if (!isLogin) {
            if (!formData.username.trim()) {
                newErrors.username = 'Username is required.';
            }
            if (!formData.gender) {
                newErrors.gender = 'Please select your gender.';
            }
            if (!formData.age) {
                newErrors.age = 'Please select your age.';
            }
            if (!formData.city) {
                newErrors.city = 'Please select your city.';
            }
        }
        
        setErrors(newErrors);
        // Return true if the newErrors object is empty (no errors)
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the form before submitting
        if (validateForm()) {
            console.log(isLogin ? 'Login Data:' : 'Sign Up Data:', formData);
            // Here you would typically send data to a server
            
            // Reset form and errors after successful submission
            setFormData({
                username: '', email: '', password: '',
                gender: '', age: '', city: ''
            });
            setErrors({});
            alert(isLogin ? 'Login Successful!' : 'Sign Up Successful!'); // Using alert as placeholder for success message
        } else {
            console.log('Validation failed. Please check errors.');
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        // Reset form data and errors when switching
        setFormData({
            username: '',
            email: '',
            password: '',
            gender: '',
            age: '',
            city: ''
        });
        setErrors({}); // Reset errors
    };

    // --- Options for Selects (Unchanged) ---
    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'non-binary', label: 'Non-binary' },
        { value: 'prefer-not-to-say', label: 'Prefer not to say' }
    ];

    const ageOptions = Array.from({ length: 83 }, (_, i) => ({
        value: (i + 13).toString(),
        label: (i + 13).toString()
    }));

    const cityOptions = [
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'delhi', label: 'Delhi' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'hyderabad', label: 'Hyderabad' },
        { value: 'ahmedabad', label: 'Ahmedabad' },
        { value: 'chennai', label: 'Chennai' },
        { value: 'kolkata', label: 'Kolkata' },
        { value: 'pune', label: 'Pune' },
        { value: 'jaipur', label: 'Jaipur' },
        { value: 'other', label: 'Other' }
        // Truncated city list for brevity
    ];
    // --- End Options ---

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 transition-colors duration-300 font-inter antialiase">
            <div className="max-w-md w-full mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
                        {isLogin ? 'Welcome Back!' : 'Get Started'}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                        {isLogin ? 'Sign in to continue your journey.' : 'Create an account to begin.'}
                    </p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg dark:shadow-slate-700/30 w-full transition-colors duration-300">
                    <div className="flex justify-center mb-6">
                        <div className="relative flex w-full max-w-xs bg-slate-100 dark:bg-slate-700 p-1 rounded-full">
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`w-1/2 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out
                                ${isLogin ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`w-1/2 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out
                                ${!isLogin ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                    
                    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                        {!isLogin && (
                            <Input 
                                id="username" 
                                type="text" 
                                placeholder="Username" 
                                icon={<UserIcon />} 
                                value={formData.username}
                                onChange={handleInputChange}
                                error={errors.username}
                            />
                        )}

                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="Email Address" 
                            icon={<MailIcon />} 
                            value={formData.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />
                        <Input 
                            id="password" 
                            type="password" 
                            placeholder="Password" 
                            icon={<LockIcon />} 
                            value={formData.password}
                            onChange={handleInputChange}
                            error={errors.password}
                        />
                        
                        {!isLogin && (
                            <>
                                <Select
                                    id="gender"
                                    options={genderOptions}
                                    placeholder="Select Gender"
                                    icon={<GenderIcon />}
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    error={errors.gender}
                                />
                                
                                <Select
                                    id="age"
                                    options={ageOptions}
                                    placeholder="Select Age"
                                    icon={<CalendarIcon />}
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    error={errors.age}
                                />
                                
                                <Select
                                    id="city"
                                    options={cityOptions}
                                    placeholder="Select City"
                                    icon={<LocationIcon />}
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    error={errors.city}
                                />
                            </>
                        )}
                        
                        {isLogin && (
                            <div className="flex items-center justify-between text-sm">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
                                    Forgot your password?
                                </a>
                            </div>
                        )}
                        
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-800 transition-all transform hover:scale-105"
                            >
                                {isLogin ? 'Sign In' : 'Create Account'}
                            </button>
                        </div>
                    </form>
                    
                    <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                        <button onClick={toggleForm} className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 focus:outline-none">
                            {isLogin ? 'Sign up' : 'Sign in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
