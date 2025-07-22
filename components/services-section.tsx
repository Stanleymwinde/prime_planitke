"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Globe, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Strategy, tone, and brand all come together in social media. We help nurture your audience and connect it to your full marketing ecosystem.",
    features: [
      "Social Media Strategy",
      "Brand Development",
      "Audience Growth",
      "Marketing Automation",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "Web Design and Build",
    description:
      "Websites crafted for the digital world using trending styles, top functionality and the best in CMS platforms and coding.",
    features: [
      "Modern Web Design",
      "CMS Integration",
      "Mobile Responsive",
      "Performance Optimization",
    ],
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: GraduationCap,
    title: "Training and Consulting",
    description:
      "The program aims at empowering young people with the prerequisite digital skills to become world-class Digital Experts in a rapidly changing industry.",
    features: [
      "Digital Skills Training",
      "Industry Mentorship",
      "Career Development",
      "Certification Programs",
    ],
    color: "from-pink-500 to-orange-600",
  },
];

export function ServicesSection() {
  console.log("ServicesSection component rendered");

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and
            drive meaningful growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 font-inter">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                        />
                        <span className="text-sm font-medium text-foreground">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                    onClick={() =>
                      console.log(`${service.title} - Learn More clicked`)
                    }
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
            onClick={() => console.log("Get Consultation clicked")}
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
