import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const internships = [
  {
    company: "NLC India Limited",
    location: "Neyveli",
    date: "August 2024",
    highlights: [
      "Exposure to gearbox design principles",
      "Studied material selection, gear geometry optimization, and lubrication systems",
      "Assisted in failure analysis of SME gearboxes",
      "Identified issues such as gear tooth wear, bearing damage, and misalignment",
      "Used vibration analysis and visual inspection methods",
    ],
  },
  {
    company: "Magna Electro Castings Limited",
    location: "Coimbatore",
    date: "July 2025",
    highlights: [
      "Hands-on exposure to sand casting and die casting processes",
      "Learned mold preparation, melting, pouring, and solidification techniques",
      "Knowledge of post-casting operations such as fettling and machining",
      "Performed quality inspection for dimensional accuracy and material integrity",
    ],
  },
];

const Internship = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internship" className="py-20 px-4" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="section-heading gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Internship Experience
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-engineering transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card-hover p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/20 flex-shrink-0">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-heading">
                          {internship.company}
                        </h3>
                        <p className="text-muted-foreground">
                          {internship.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{internship.date}</span>
                    </div>

                    <ul className="space-y-2">
                      {internship.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
