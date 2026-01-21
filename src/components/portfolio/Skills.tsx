import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Cog, PenTool, Cpu, Lightbulb, Users, MessageSquare, FileSpreadsheet } from "lucide-react";

const technicalSkills = [
  { name: "SolidWorks", level: 85, icon: Cog },
  { name: "AutoCAD", level: 80, icon: PenTool },
  { name: "Fusion 360", level: 45, icon: Cpu },
];

const otherSkills = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Leadership", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Microsoft Office", icon: FileSpreadsheet },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setAnimate(true), 300);
    }
  }, [isInView]);

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="section-heading gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* CAD Skills */}
          <motion.div
            className="glass-card-hover p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold font-heading mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Cog className="w-5 h-5 text-primary" />
              </div>
              CAD Software
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-accent" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={animate ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: index * 0.2,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                    {skill.level < 50 && (
                      <p className="text-xs text-muted-foreground mt-1">Beginner</p>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Other Skills */}
          <motion.div
            className="glass-card-hover p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold font-heading mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <Lightbulb className="w-5 h-5 text-accent" />
              </div>
              Other Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {otherSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <Icon className="w-6 h-6 text-primary mb-2" />
                    <p className="font-medium text-sm">{skill.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
