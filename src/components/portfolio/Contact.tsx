import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9342596741",
    href: "tel:+919342596741",
    color: "primary",
  },
  {
    icon: Mail,
    label: "Email",
    value: "asbinarjun@gmail.com",
    href: "mailto:asbinarjun@gmail.com",
    color: "accent",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "asbin-arjunan",
    href: "https://www.linkedin.com/in/asbin-arjunan",
    color: "engineering",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
    color: "primary",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClass = (color: string, type: "bg" | "text") => {
    const colorMap: Record<string, Record<string, string>> = {
      primary: { bg: "bg-primary/20", text: "text-primary" },
      accent: { bg: "bg-accent/20", text: "text-accent" },
      engineering: { bg: "bg-engineering/20", text: "text-engineering" },
    };
    return colorMap[color]?.[type] || colorMap.primary[type];
  };

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="section-heading gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm actively seeking opportunities in design engineering. Feel free to
          reach out if you'd like to discuss potential collaborations or job
          opportunities.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                className="glass-card-hover p-6 text-center h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl ${getColorClass(
                    item.color,
                    "bg"
                  )} mb-4`}
                >
                  <Icon
                    className={`w-6 h-6 ${getColorClass(item.color, "text")}`}
                  />
                </div>
                <h3 className="font-semibold font-heading mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground break-all">
                  {item.value}
                </p>
              </motion.div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="mailto:asbinarjun@gmail.com">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              <Send className="w-4 h-4 mr-2" />
              <span className="relative z-10">Send Me a Message</span>
              <motion.div
                className="absolute inset-0 bg-accent"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
