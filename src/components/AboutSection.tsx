import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Globe, Users } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    label: "Mobile Apps",
    value: "20+",
    description: "Flutter applications built",
  },
  {
    icon: Globe,
    label: "Web Apps",
    value: "15+",
    description: "Angular projects delivered",
  },
  {
    icon: Code2,
    label: "Experience",
    value: "5.5+",
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
          <span className="text-primary font-mono text-sm">01. About Me</span>
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
              I'm a passionate Senior Software Developer with over 5.5 years of experience 
              crafting high-quality mobile and web applications. My expertise lies in 
              <span className="text-foreground font-medium"> Flutter, Angular, and modern JavaScript</span> 
              {" "}ecosystems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building scalable, performant applications with clean architecture. 
              From concept to deployment, I handle the complete development lifecycle including 
              <span className="text-foreground font-medium"> API integration, offline support, 
              and app store deployments</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond development, I've trained and mentored 50+ students and professionals, 
              sharing knowledge in frontend technologies and guiding them through real-world projects.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Problem Solver", "Team Player", "Detail Oriented", "Fast Learner"].map((trait) => (
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
