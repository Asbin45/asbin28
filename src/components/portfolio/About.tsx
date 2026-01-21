import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Lightbulb } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="section-heading gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="md:col-span-2 glass-card-hover p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/20">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-heading mb-2">
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A passionate Mechanical Engineering fresher with strong interest
                  in design engineering and product development. Skilled in CAD
                  tools such as AutoCAD and SolidWorks, with a keen interest in
                  building efficient, reliable, and innovative designs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/20">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-heading mb-2">
                  My Goal
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seeking opportunities to contribute technical knowledge,
                  creativity, and problem-solving skills to a dynamic engineering
                  team. I aim to grow as a Design Engineer and work on innovative
                  product development projects.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card-hover p-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="inline-flex p-4 rounded-2xl bg-engineering/20 mb-4">
                <Lightbulb className="w-8 h-8 text-engineering" />
              </div>
              <h3 className="text-lg font-semibold font-heading mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">India</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Degree</span>
                  <span className="font-medium">B.E Mechanical</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium">Design Engineering</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-primary font-medium">Open to Work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
