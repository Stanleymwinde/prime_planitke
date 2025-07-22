"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { number: 150, suffix: "+", label: "Projects Completed" },
  { number: 95, suffix: "%", label: "Client Satisfaction" },
  { number: 50, suffix: "+", label: "Team Members" },
  { number: 24, suffix: "/7", label: "Support Available" }
];

function AnimatedNumber({ number, suffix, duration = 2 }: { number: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      console.log(`Animating number: ${number}`);
      let start = 0;
      const increment = number / (duration * 60); // 60 FPS
      const timer = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, number, duration]);

  return (
    <span ref={ref} className="font-bold text-4xl md:text-5xl text-white">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  console.log("StatsSection component rendered");

  return (
    <section className="py-20 bg-gradient-agency">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            Numbers That Speak
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our track record of success speaks for itself
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <AnimatedNumber number={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-white/80 font-medium text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}