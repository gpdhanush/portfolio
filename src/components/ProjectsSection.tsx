import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "driEV",
    subtitle: "EV Charging Platform",
    description:
      "A comprehensive Flutter hybrid application for electric vehicle charging infrastructure. Features include real-time station discovery, seamless payment integration, booking management, and user analytics.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Dart", "REST APIs", "Payment Gateway", "Google Maps"],
    highlights: [
      "10K+ active users",
      "Multi-payment support",
      "Real-time availability",
      "Cross-platform iOS & Android",
    ],
    type: "mobile",
  },
  {
    title: "PropEdge",
    subtitle: "Property Data Collection",
    description:
      "Offline-first Flutter application designed for field data collection in property assessment. Features robust offline storage, automatic sync capabilities, and intuitive mobile-optimized forms.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "SQLite", "Hive", "REST APIs", "Offline-First"],
    highlights: [
      "100% offline capable",
      "Auto-sync on connectivity",
      "Photo documentation",
      "GPS location tracking",
    ],
    type: "mobile",
  },
  {
    title: "SIFR",
    subtitle: "QR Payment Solution (UAE)",
    description:
      "A secure QR-based payment application for the UAE market. Implements advanced security protocols, biometric authentication, and seamless merchant integration for contactless transactions.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "QR Technology", "Biometrics", "Encryption", "Firebase"],
    highlights: [
      "UAE market compliant",
      "Biometric security",
      "Instant transactions",
      "Merchant dashboard",
    ],
    type: "mobile",
  },
  {
    title: "Risk Engineering Platform",
    subtitle: "Insurance Workflow System",
    description:
      "Enterprise-grade Angular web application for comprehensive insurance risk assessment workflows. Features complex form builders, document management, reporting dashboards, and multi-role access control.",
    image: "/placeholder.svg",
    technologies: ["Angular", "TypeScript", "REST APIs", "MySQL", "Bootstrap"],
    highlights: [
      "Enterprise-scale",
      "Complex workflows",
      "Role-based access",
      "Advanced reporting",
    ],
    type: "web",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">04. Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building production-ready applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.type === "mobile" ? (
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Smartphone className="h-5 w-5 text-primary" />
                      </div>
                    ) : (
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="p-6 pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-foreground text-xs font-mono rounded-full"
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
    </section>
  );
};

export default ProjectsSection;
