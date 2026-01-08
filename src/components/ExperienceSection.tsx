import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Naetha Technologies PVT LTD",
    period: "Jul 2025 – Present",
    location: "Chennai",
    description: [
      "Leading development of cross-platform mobile and web applications using Flutter and Angular for enterprise clients.",
      "Designed scalable UI and application architecture, reducing future feature development time by ~30%.",
      "Integrated secure RESTful APIs and improved data handling reliability by 25%.",
      "Collaborating with product owners and stakeholders to deliver features aligned with business goals and timelines.",
    ],
    technologies: ["Flutter", "Angular", "RESTful APIs", "Architecture"],
  },
  {
    title: "Flutter Developer",
    company: "NRD TECH",
    period: "Feb 2025 - Jul 2025",
    location: "Coimbatore",
    description: [
      "Developed the SMRT mobile application for meter reading on Android and iOS, serving 1,000+ field users.",
      "Delivered 2 major modules within schedule; 1 module successfully published to Play Store and App Store, with the second released to internal testing.",
      "Implemented domain-based white-label architecture, enabling a single app to support multiple client companies and reducing new client onboarding effort by 40%.",
      "Optimized UI rendering and API calls, improving app performance and screen load times by ~35%.",
    ],
    technologies: ["Flutter", "Android", "iOS", "White-label"],
  },
  {
    title: "Senior Software Developer",
    company: "Naetha Technologies PVT LTD",
    period: "Nov 2018 – Feb 2025",
    location: "Chennai",
    description: [
      "Developed and released 7+ production mobile and web applications using Flutter, Ionic, Angular, & Cordova.",
      "Built reusable UI components and modular SPAs, reducing duplicated code by ~45% across projects.",
      "Integrated RESTful APIs and backend services, improving data synchronization reliability by 30%.",
      "Managed end-to-end release cycles including build generation, production deployment, and app store submissions for Android and iOS.",
      "Delivered performance and stability enhancements that reduced crash rates by ~40% and increased user satisfaction scores.",
      "Collaborated with cross-functional teams to meet 100% of committed delivery timelines across multiple client projects.",
    ],
    technologies: ["Flutter", "Ionic", "Angular", "Cordova", "Node.js"],
  },
  {
    title: "Trainee",
    company: "Cad Cam World Software Solution",
    period: "Jun 2016 – Oct 2018",
    location: "Dindigul",
    description: [
      "Conducted training sessions on HTML, CSS, JavaScript, PHP, and MySQL for 100+ students and junior developers.",
      "Created technical documentation and training manuals, reducing onboarding time by ~50%.",
      "Provided hands-on project support and troubleshooting, achieving a 90% training completion success rate.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
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
          {/* <span className="text-primary font-mono text-sm">03. Experience</span> */}
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
          
          {/* Timeline Line - Mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:hidden" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative pl-10 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline Dot - Mobile */}
                <div className="absolute left-2 top-6 w-4 h-4 bg-primary rounded-full ring-4 ring-background md:hidden" />
                
                {/* Timeline Dot - Desktop */}
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
