// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
import {
  Zap,
  Droplets,
  Phone,
  Flame,
  Calculator,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useState } from "react";
import ImageCarousel from "./ImageCarousel";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Electricity Bills",
      description: "Pay your electricity bills quickly and securely",
      icon: Zap,
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
      route: "/electricity",
    },
    {
      title: "WASA Bills",
      description: "Water and sanitation authority bill payments",
      icon: Droplets,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      route: "/wasa",
    },
    {
      title: "PTCL Bills",
      description: "Telecommunication services bill management",
      icon: Phone,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      route: "/ptcl",
    },
    {
      title: "Gas Bills",
      description: "Natural gas utility bill payments",
      icon: Flame,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      route: "/gas",
    },
    {
      title: "Income Tax Calculator",
      description: "Calculate your income tax with ease",
      icon: Calculator,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      route: "/tax-calculator",
    },
    {
      title: "Gold Rate Checker",
      description: "Check current gold rates and trends",
      icon: TrendingUp,
      color: "bg-amber-500",
      hoverColor: "hover:bg-amber-600",
      route: "/gold-rates",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">
                  Utility<span className="text-emerald-600">Hub</span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
                  className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link
                  to="/"
                  className="text-gray-900 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ImageCarousel />

      {/* Services Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access all your essential utility and financial services through
              our secure, user-friendly platform designed for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link key={index} to={service.route}>
                  <div className="h-full hover:shadow-xl border-2 rounded-2xl py-5 border-gray-200 transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                    <div className="p-8 text-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.color} ${service.hoverColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who trust UtilityHub for their
            utility and financial service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              // size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Get Started Today
            </button>
            <button
              // size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Utility<span className="text-emerald-600">Hub</span>
              </h3>
              <p className="text-gray-600 mb-4">
                Your trusted partner for all utility bill payments and financial
                services. Secure, fast, and reliable.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/security"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} UtilityHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
