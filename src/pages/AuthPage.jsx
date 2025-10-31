// ...existing code...
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; // added

// ...existing code...
// Reusable Input component with error handling
// ...existing code...
const Input = ({ id, type, placeholder, icon, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    return (
        <div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {icon}
                </div>
                <input
                    id={id}
                    name={id}
                    type={isPassword ? (showPassword ? 'text' : 'password') : type}
                    value={value}
                    onChange={onChange}
                    required
                    className={`w-full pl-10 ${isPassword ? 'pr-12' : 'pr-4'} py-2 border rounded-md shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 ${
                        error
                            ? 'border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500'
                            : 'border-slate-300 dark:border-slate-600 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                    placeholder={placeholder}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowPassword((s) => !s);
                        }}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 focus:outline-none"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? (
                            // eye-off icon
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3-11-7 1.05-2.07 2.7-3.8 4.73-5.01"></path>
                                <path d="M1 1l22 22"></path>
                                <path d="M9.88 9.88A3 3 0 0 0 14.12 14.12"></path>
                            </svg>
                        ) : (
                            // eye icon
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        )}
                    </button>
                )}
            </div>
            {error && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>}
        </div>
    );
};
// ...existing code...
// ...existing code...
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


// Main AuthPage Component (keeps UI identical)
const AuthPage = () => {
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
    const [loading, setLoading] = useState(false); // added

    const navigate = useNavigate(); // added
    const { signIn, signUp } = useAuth(); // added - expects AuthProvider in your app

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

    // Validation logic (unchanged)
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
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            if (isLogin) {
                // signIn expects your AuthProvider to call supabase.auth.signInWithPassword
                const { error } = await signIn({ email: formData.email, password: formData.password });
                if (error) {
                    throw error;
                }
                // successful login
                navigate('/');
            } else {
                // signup: pass data as metadata (AuthProvider should forward to supabase options.data)
                const metadata = {
                    full_name: formData.username,
                    gender: formData.gender,
                    age: formData.age,
                    city: formData.city
                };
                const { error } = await signUp({ email: formData.email, password: formData.password, metadata });
                if (error) {
                    throw error;
                }
                // Supabase may require email confirmation depending on your settings
                alert('Sign up successful. Check your email if confirmation is required.');
                navigate('/auth');
                window.location.reload();
            }
        } catch (err) {
            const msg = err?.message || 'Authentication error';
            alert(msg);
        } finally {
            setLoading(false);
        }
    };
    // ...existing code...
const Select = ({ id, options = [], placeholder, icon, value, onChange, error }) => (
    <div>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {icon}
            </div>

            <select
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                className={`w-full pl-10 pr-10 py-2 border rounded-md shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 ${
                    error
                        ? 'border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500'
                        : 'border-slate-300 dark:border-slate-600 focus:ring-blue-500 focus:border-blue-500'
                }`}
            >
                <option value="">{placeholder}</option>
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDownIcon />
            </div>
        </div>
        {error && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
);
// ...existing code...

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
        { value: 'agartala', label: 'Agartala' },
        { value: 'agra', label: 'Agra' },
        { value: 'ahmedabad', label: 'Ahmedabad' },
        { value: 'aizawl', label: 'Aizawl' },
        { value: 'ajmer', label: 'Ajmer' },
        { value: 'amaravati', label: 'Amaravati' },
        { value: 'amritsar', label: 'Amritsar' },
        { value: 'aurangabad', label: 'Aurangabad' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'bhopal', label: 'Bhopal' },
        { value: 'bhubaneswar', label: 'Bhubaneswar' },
        { value: 'chandigarh', label: 'Chandigarh' },
        { value: 'chennai', label: 'Chennai' },
        { value: 'coimbatore', label: 'Coimbatore' },
        { value: 'dehradun', label: 'Dehradun' },
        { value: 'delhi', label: 'Delhi' },
        { value: 'gandhinagar', label: 'Gandhinagar' },
        { value: 'gangtok', label: 'Gangtok' },
        { value: 'gorakhpur', label: 'Gorakhpur' },
        { value: 'gurugram', label: 'Gurugram' },
        { value: 'guwahati', label: 'Guwahati' },
        { value: 'hyderabad', label: 'Hyderabad' },
        { value: 'imphal', label: 'Imphal' },
        { value: 'indore', label: 'Indore' },
        { value: 'itanagar', label: 'Itanagar' },
        { value: 'jaipur', label: 'Jaipur' },
        { value: 'jamshedpur', label: 'Jamshedpur' },
        { value: 'jammu', label: 'Jammu' },
        { value: 'jodhpur', label: 'Jodhpur' },
        { value: 'kanpur', label: 'Kanpur' },
        { value: 'kavaratti', label: 'Kavaratti' },
        { value: 'kochi', label: 'Kochi' },
        { value: 'kohima', label: 'Kohima' },
        { value: 'kolkata', label: 'Kolkata' },
        { value: 'kota', label: 'Kota' },
        { value: 'kozhikode', label: 'Kozhikode' },
        { value: 'leh', label: 'Leh' },
        { value: 'lucknow', label: 'Lucknow' },
        { value: 'ludhiana', label: 'Ludhiana' },
        { value: 'madurai', label: 'Madurai' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'mysore', label: 'Mysore' },
        { value: 'nagpur', label: 'Nagpur' },
        { value: 'nashik', label: 'Nashik' },
        { value: 'noida', label: 'Noida' },
        { value: 'panaji', label: 'Panaji' },
        { value: 'patna', label: 'Patna' },
        { value: 'port blair', label: 'Port Blair' },
        { value: 'prayagraj', label: 'Prayagraj' },
        { value: 'puducherry', label: 'Puducherry' },
        { value: 'pune', label: 'Pune' },
        { value: 'raipur', label: 'Raipur' },
        { value: 'rajkot', label: 'Rajkot' },
        { value: 'ranchi', label: 'Ranchi' },
        { value: 'shillong', label: 'Shillong' },
        { value: 'shimla', label: 'Shimla' },
        { value: 'siliguri', label: 'Siliguri' },
        { value: 'solapur', label: 'Solapur' },
        { value: 'srinagar', label: 'Srinagar' },
        { value: 'surat', label: 'Surat' },
        { value: 'thiruvananthapuram', label: 'Thiruvananthapuram' },
        { value: 'vadodara', label: 'Vadodara' },
        { value: 'varanasi', label: 'Varanasi' },
        { value: 'vijayawada', label: 'Vijayawada' },
        { value: 'visakhapatnam', label: 'Visakhapatnam' },
        { value: 'other', label: 'Other' }
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
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-800 transition-all transform hover:scale-105 disabled:opacity-60"
                            >
                                {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
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

export default AuthPage;
// ...existing code...