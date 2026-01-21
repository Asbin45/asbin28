import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="section-heading gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card-hover p-8 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-2xl bg-primary/20 inline-flex">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold font-heading mb-2">
                    B.E – Mechanical Engineering
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Government College of Engineering, Srirangam
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">2022 – 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">
                        CGPA: <span className="text-foreground font-semibold">8.1</span> (up to 6th semester)
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary">
                      Mechanical Engineering
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent">
                      Design Focus
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-engineering/20 text-engineering">
                      CAD/CAM
                    </span>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="flex-shrink-0 text-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center">
                      <div>
                        <div className="text-2xl font-bold gradient-text">8.1</div>
                        <div className="text-xs text-muted-foreground">CGPA</div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-accent/30"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
