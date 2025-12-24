import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Naethra Technologies Pvt Ltd",
    period: "2019 - Present",
    location: "India",
    description: [
      "Built and deployed 15+ scalable Flutter & Angular applications for enterprise clients",
      "Led end-to-end development from architecture design to Play Store & App Store deployment",
      "Implemented offline-first architecture with seamless data synchronization",
      "Integrated complex REST APIs and third-party payment gateways",
      "Optimized app performance reducing load times by 40%",
      "Maintained clean code architecture using BLoC and Provider patterns",
    ],
    technologies: ["Flutter", "Dart", "Angular", "TypeScript", "REST APIs"],
  },
  {
    title: "Technical Trainer",
    company: "Cad Cam World Software Solutions",
    period: "2018 - 2019",
    location: "India",
    description: [
      "Trained 50+ students and working professionals in frontend technologies",
      "Developed comprehensive curriculum for web development courses",
      "Mentored students on real-world projects and industry best practices",
      "Conducted workshops on Angular, JavaScript, and responsive design",
      "Achieved 95% student placement rate in IT companies",
    ],
    technologies: ["JavaScript", "HTML/CSS", "Angular", "jQuery", "Bootstrap"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">03. Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute hidden md:block top-6 ${
                    index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                  } w-4 h-4 bg-primary rounded-full ring-4 ring-background`}
                />

                <div className="glass-card p-6 md:p-8 rounded-xl hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mt-1">{exp.company}</p>
                    </div>
                    <Briefcase className="h-8 w-8 text-primary/50" />
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
