"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            {/* <span className={`font-inter transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Digital
            </span>
            <span className="text-accent">Agency</span> */}
            <div className="logo">
              <img
                src="/planit-logo.png"
                alt="Logo"
                className="h-28 py-2 my-2 md:h-20 md:py-0 md:my-0"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className={`font-medium transition-colors duration-300 hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Navigation clicked: ${item.label}`);
                }}
              >
                {item.label}
              </motion.a>
            ))}

            <Button
              variant={isScrolled ? "custom" : "outline"}
              className={`transition-all duration-300 ${
                isScrolled
                  ? "bg-black hover:bg-purple-800 text-primary-foreground"
                  : "border-white/30 text-black hover:bg-purple-700 "
              }`}
              onClick={() => console.log("Get Quote clicked")}
            >
              Get A Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-foreground font-medium py-2 hover:text-accent transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Mobile navigation clicked: ${item.label}`);
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => {
                      console.log("Mobile Get Quote clicked");
                      setIsOpen(false);
                    }}
                  >
                    Get Quote
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
