import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Dumbbell, BookOpen, Film } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "District Level Kabaddi",
    description: "Led School Kabaddi Team at District Level",
    color: "primary",
  },
  {
    icon: Dumbbell,
    title: "Fitness Enthusiast",
    description: "Actively involved in gym and sports activities",
    color: "accent",
  },
];

const hobbies = [
  {
    icon: BookOpen,
    title: "Book Reading",
    color: "engineering",
  },
  {
    icon: Film,
    title: "Watching Movies",
    color: "primary",
  },
];

const Achievements = () => {
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
    <section id="achievements" className="py-20 px-4" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="section-heading gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements & Interests
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Extra-curricular Activities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold font-heading mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              Extra-Curricular Activities
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    className="glass-card-hover p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl ${getColorClass(
                          achievement.color,
                          "bg"
                        )}`}
                      >
                        <Icon
                          className={`w-6 h-6 ${getColorClass(
                            achievement.color,
                            "text"
                          )}`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold font-heading mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold font-heading mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              Hobbies
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={hobby.title}
                    className="glass-card-hover p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div
                      className={`inline-flex p-4 rounded-2xl ${getColorClass(
                        hobby.color,
                        "bg"
                      )} mb-4`}
                    >
                      <Icon
                        className={`w-8 h-8 ${getColorClass(hobby.color, "text")}`}
                      />
                    </div>
                    <h4 className="font-semibold font-heading">{hobby.title}</h4>
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

export default Achievements;
