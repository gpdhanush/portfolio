import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 95 },
      { name: "Ionic", level: 75 },
      { name: "Android Studio", level: 85 },
      { name: "Xcode", level: 80 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "Angular", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Tools & Database",
    skills: [
      { name: "Git", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Firebase", level: 75 },
      { name: "Postman", level: 85 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">02. Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive skill set developed over 5.5+ years of building production-grade applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
