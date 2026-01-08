import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container-narrow relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <span className="text-primary font-mono text-sm">05. Contact</span> */}
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time
            opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Looking for a dedicated developer to bring your ideas to life? I
                specialize in building high-quality mobile and web applications
                that deliver real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="mailto:agprakash406@gmail.com"
                className="flex flex-col items-center text-center p-6 glass-card rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-foreground text-sm break-all">
                    agprakash406@gmail.com
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 mt-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/gnana-prakasam-arulanantha-raj-705aba14a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 glass-card rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <p className="font-medium text-foreground text-sm">
                    View Profile
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 mt-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <div className="flex flex-col items-center text-center p-6 glass-card rounded-xl">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium text-foreground text-sm">
                    Remote / Worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
