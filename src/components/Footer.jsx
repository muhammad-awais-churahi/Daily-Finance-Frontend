import React from "react";
import { Facebook, Twitter, Smartphone } from "lucide-react";

const Footer = () => {
  const linkItems = [
    { href: "#home", label: "Home", aria: "Go to Home page" },
    {
      href: "#privacy",
      label: "Privacy Policy",
      aria: "Read our Privacy Policy",
    },
    { href: "#contact", label: "Contact Us", aria: "Contact us" },
  ];

  const socialLinks = [
    {
      href: "#facebook",
      label: "Facebook",
      icon: <Facebook size={18} />,
      aria: "Follow us on Facebook",
    },
    {
      href: "#twitter",
      label: "Twitter",
      icon: <Twitter size={18} />,
      aria: "Follow us on Twitter",
    },
    {
      href: "#android",
      label: "Android",
      icon: <Smartphone size={18} />,
      aria: "Download our Android app",
    },
  ];

  return (
    <footer className="bg-sky-700 text-white py-8 px-4 mt-6" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Links Section */}
          <nav className="h-full" aria-labelledby="footer-links">
            <h2 id="footer-links" className="text-xl font-semibold mb-4 pb-2">
              Links
            </h2>
            <ul className="space-y-3">
              {linkItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-600 rounded hover:underline"
                    aria-label={item.aria}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* About Us Section */}
          <section className="h-full" aria-labelledby="about-us">
            <h2 id="about-us" className="text-xl font-semibold mb-4 pb-2">
              About Us
            </h2>
            <p className="text-white leading-relaxed text-sm md:text-base">
              IESCOBILL.PK is free service website for all WAPDA consumers who
              can download and print a duplicate copy of their bill (if not
              received). Users can also calculate electricity bill and subscribe
              to monthly bill email service.
            </p>
          </section>

          {/* Follow Us Section */}
          <section className="h-full" aria-labelledby="social-media">
            <h2 id="social-media" className="text-xl font-semibold mb-4 pb-2">
              FOLLOW US
            </h2>
            <nav aria-label="Social media links">
              <ul className="space-y-3">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-600 rounded hover:underline"
                      aria-label={link.aria}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>

        {/* Separator Line */}
        <hr className="border-blue-400 mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-blue-100 text-sm">
            Copyright © 2025 - iescobill.pk all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
