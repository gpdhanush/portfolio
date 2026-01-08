import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Globe, Users, Download } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    label: "Apps Launched",
    value: "10+",
    description: "Android & iOS apps",
  },
  {
    icon: Globe,
    label: "Downloads",
    value: "50K+",
    description: "Total across all apps",
  },
  {
    icon: Code2,
    label: "Experience",
    value: "8+",
    description: "Years in development",
  },
  {
    icon: Users,
    label: "Mentored",
    value: "50+",
    description: "Students & professionals",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <span className="text-primary font-mono text-sm">01. About Me</span> */}
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Building Digital Experiences
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <span className="text-foreground font-medium">Senior Flutter and Full-Stack Developer</span> with 8+ years of 
              experience delivering scalable mobile and web applications. My expertise lies in building high-performance 
              solutions using <span className="text-foreground font-medium">Flutter, Angular, Node.js, and RESTful APIs</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have a proven track record of success, having built 10+ production apps across <span className="text-foreground font-medium">Android, iOS, and Web</span>, 
              achieving over 50K+ cumulative downloads. My work focuses on performance optimization, maintainability, 
              and business-driven engineering.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently serving as a <span className="text-foreground font-medium">Senior Software Developer at Naetha Technologies</span>, 
              I lead development for enterprise clients, mentor teams, and ensure the delivery of robust, 
              cross-platform digital experiences.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Cross-Platform Expert", "API Architect", "Performance Optimizer", "Domain Designer"].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <item.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
