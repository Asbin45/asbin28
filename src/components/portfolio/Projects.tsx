import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Cpu, Lightbulb, Monitor, Award } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="section-heading gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card-hover p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-engineering/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              {/* Project header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className="p-4 rounded-2xl bg-engineering/20 inline-flex flex-shrink-0">
                  <Droplets className="w-10 h-10 text-engineering" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold font-heading">
                      Water Tank Level Monitoring System
                    </h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Mini Project
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    An IoT-based smart monitoring solution implemented under the
                    Naan Mudhalvan Scheme
                  </p>
                </div>
              </div>

              {/* Features grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                  <Cpu className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Ultrasonic Sensor</h4>
                    <p className="text-sm text-muted-foreground">
                      Accurate water level detection using ultrasonic technology
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                  <Monitor className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Real-time Display</h4>
                    <p className="text-sm text-muted-foreground">
                      Live water level indication on display unit
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                  <Lightbulb className="w-5 h-5 text-engineering flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">LED Indicators</h4>
                    <p className="text-sm text-muted-foreground">
                      Visual alerts for different water levels
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Naan Mudhalvan Scheme</h4>
                    <p className="text-sm text-muted-foreground">
                      Implemented under government skill development initiative
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs rounded-full bg-primary/20 text-primary font-medium">
                  IoT
                </span>
                <span className="px-3 py-1.5 text-xs rounded-full bg-accent/20 text-accent font-medium">
                  Embedded Systems
                </span>
                <span className="px-3 py-1.5 text-xs rounded-full bg-engineering/20 text-engineering font-medium">
                  Sensors
                </span>
                <span className="px-3 py-1.5 text-xs rounded-full bg-muted text-muted-foreground font-medium">
                  Electronics
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
