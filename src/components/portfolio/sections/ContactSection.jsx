import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export function ContactSection({ locale }) {
  return (
    <footer id="contact" className="contact-section" data-gsap-section>
      <div className="section-shell">
        <div className="contact-main" data-gsap-section-heading>
          <div>
            <h2>{locale.contact.title}</h2>
            <p>{locale.contact.desc}</p>
          </div>
          <a href="mailto:marcmclara@gmail.com" className="button button-primary">
            <Mail size={18} aria-hidden="true" />
            {locale.contact.emailLabel}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-row">
          <p>© {new Date().getFullYear()} Marc Muntané Clarà</p>
          <div>
            <a
              href="https://github.com/MarcMunta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={locale.footer.githubAria}
            >
              <Github size={18} aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/marc-muntan%C3%A9-clar%C3%A0-ab6a0a276/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={locale.footer.linkedinAria}
            >
              <Linkedin size={18} aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
