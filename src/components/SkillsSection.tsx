import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Database, Terminal, Globe, Layout, Server, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Dart", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Java", level: 80 },
      { name: "PHP", level: 75 },
    ],
  },
  {
    title: "Frameworks & Mobile",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 98 },
      { name: "Angular", level: 90 },
      { name: "Ionic / Cordova", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "Android/iOS", level: 90 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "RESTful APIs", level: 92 },
      { name: "MySQL / PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Terminal,
    skills: [
      { name: "Git / Firebase", level: 90 },
      { name: "VS Code / Cursor AI", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Xcode", level: 80 },
      { name: "Android Studio", level: 85 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        </div>

      <div className="container-narrow relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <span className="text-primary font-mono text-sm">02. Skills</span> */}
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive skill set spanning mobile development, web technologies, and full-stack solutions developed over 8+ years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="relative group/skill"
                  >
                    <div className="px-4 py-2 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                            {skill.name}
                        </span>
                        {/* Optional: Show level as a tiny bar or ring, or just on hover */}
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/skill:bg-primary transition-colors" />
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
