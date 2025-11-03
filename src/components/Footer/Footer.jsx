import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { icons } from '../header/icons';
import atomLogo from '../../assets/logo2.png';

// ...existing code...
export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const footerLinks = {
        "Quick Links": [ 
            { name: "Chatbot", href: "/chatbot#chat" }, 
            { name: "Depression Test", href: "/depression-test#test" }, 
            { name: "Therapists", href: "/therapists" }, 
            { name: "Stories", href: "/connect#shareStories" }, 
            { name: "FAQs", href: "/#faqs" }, // <- hash link to FAQ section on home
        ],
        "Support": [ 
            { name: "FAQs", href: "/#faqs" },
            { name: "Contact", href: "/about#contact" }, 
            { name: "About Us", href: "/about#startAbout" }, 
        ],
    };

    const socialLinks = [
        { name: "GitHub", icon: "GitHub", href: "https://github.com/abhishekkksharma", colorClass: "hover:text-gray-900 dark:hover:text-white" },
        { name: "Linkedin", icon: "Linkedin", href: "https://www.linkedin.com/in/abhishek-sharma-16a8071b7/", colorClass: "hover:text-blue-500" },
        { name: "Mail", icon: "Mail", href: "mailto:abhisheksharma7340733@gmail.com", colorClass: "hover:text-red-600" },
    ];

    const handleHashNavigation = (e, href) => {
        if (!href.includes('#')) return;
        e.preventDefault();
        const [pathPart, hashPart] = href.split('#');
        const targetId = hashPart;

        const scrollToId = () => {
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        if (!pathPart || pathPart === '/') {
            if (location.pathname === '/') {
                scrollToId();
            } else {
                navigate('/');
                // small delay to allow home component to mount and DOM to render
                setTimeout(scrollToId, 120);
            }
            return;
        }

        // fallback: navigate to other path and then try to scroll after a delay
        navigate(pathPart);
        setTimeout(scrollToId, 120);
    };

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center md:items-start gap-8">
                    {/* Logo */}
                    <div className="w-full md:w-auto mb-8 md:mb-0">
                         <Link to="/" className="inline-block">
                            <img 
                                src={atomLogo}
                                alt="ATOM Logo" 
                                className="w-1/2 dark:invert mx-auto md:mx-0" 
                            />
                        </Link>
                    </div>
                    
                    {/* Links */}
                    <div className="flex-grow grid grid-cols-2 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase">{title}</h3>
                                <ul className="mt-4 space-y-4">
                                    {links.map(link => (
                                        <li key={link.name}>
                                            {link.href.startsWith('/') && link.href.includes('#') ? (
                                                <a href={link.href} onClick={(e) => handleHashNavigation(e, link.href)} className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                                                    {link.name}
                                                </a>
                                            ) : link.href.startsWith('/') ? (
                                                <Link to={link.href} className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                                                    {link.name}
                                                </Link>
                                            ) : (
                                                <a href={link.href} className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                                                    {link.name}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-center md:justify-end items-center">
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} ATOM. All rights reserved.</p>
                      <div className="flex space-x-4">
                          {socialLinks.map(link => {
                              const IconComponent = icons[link.icon];
                              return (
                                  <a key={link.name} href={link.href} className={`text-gray-400 dark:text-gray-500 ${link.colorClass} transition-colors duration-200`}>
                                      <span className="sr-only">{link.name}</span>
                                      <IconComponent />
                                  </a>
                              )
                          })}
                      </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
// ...existing code...