import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground text-sm">
              Built with{" "}
              <Heart className="inline h-4 w-4 text-primary fill-primary" />{" "}
              by Gnana Prakasam
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/gnanaprakasam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/gnanaprakasam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:gnanaprakasam@example.com"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
