import React from 'react';
import { icons } from './header/icons';
import atomLogo from '../assets/logo2.png';

export default function Footer() {
    const footerLinks = {
        "Quick Links": [ 
            { name: "Chatbot", href: "#" }, 
            { name: "Depression Test", href: "#" }, 
            { name: "Therapists", href: "#" }, 
            { name: "Stories", href: "#" }, 
        ],
        "Support": [ 
            { name: "FAQs", href: "#" }, 
            { name: "Contact", href: "#" }, 
            { name: "About Us", href: "#" }, 
        ],
    };

    const socialLinks = [
        { name: "GitHub", icon: "GitHub", href: "https://github.com/abhishekkksharma", colorClass: "hover:text-gray-900 dark:hover:text-white" },
        { name: "Linkedin", icon: "Linkedin", href: "https://www.linkedin.com/in/abhishek-sharma-16a8071b7/", colorClass: "hover:text-blue-500" },
        { name: "Mail", icon: "Mail", href: "mailto:abhisheksharma7340733@gmail.com", colorClass: "hover:text-red-600" },
    ];

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center md:items-start gap-8">
                    {/* Logo */}
                    <div className="w-full md:w-auto mb-8 md:mb-0">
                         <a href="#" className="inline-block">
                            <img 
                                src={atomLogo}
                                alt="ATOM Logo" 
                                className="w-1/2 dark:invert mx-auto md:mx-0" 
                            />
                        </a>
                    </div>
                    
                    {/* Links */}
                    <div className="flex-grow grid grid-cols-2 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase">{title}</h3>
                                <ul className="mt-4 space-y-4">
                                    {links.map(link => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                                {link.name}
                                            </a>
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
                                  <a key={link.name} href={link.href} className={`text-gray-400 dark:text-gray-500 ${link.colorClass} transition-colors`}>
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
