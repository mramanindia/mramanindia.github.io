import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amanindiamuzz@gmail.com",
      href: "mailto:amanindiamuzz@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6200061860",
      href: "tel:+916200061860"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mramanindia",
      href: "https://linkedin.com/in/mramanindia"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mramanindia",
      href: "https://github.com/mramanindia"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">
            Interested in AI agent building, Agentic AI, or collaboration?
            Let's connect!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card
                key={index}
                className="liquid-glass card-hover rounded-2xl border-white/70 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-100 rounded-full group-hover:bg-slate-200/80 transition-colors">
                      <Icon className="h-6 w-6 text-[#1d1d1f]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-[#1d1d1f]">{contact.label}</p>
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[#0071e3] hover:underline break-all text-sm"
                      >
                        {contact.value}
                      </a>
                    </div>
                    <ExternalLink className="h-4 w-4 text-[#86868b] group-hover:text-[#1d1d1f] transition-colors flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="inline-block liquid-glass card-hover rounded-2xl border-white/70">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-[#6e6e73] mb-6 max-w-md mx-auto">
                Whether you have a project in mind or want to discuss AI agents and
                Agentic AI, I'd love to hear from you.
              </p>
              <Button
                size="lg"
                className="px-8 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium transition-all duration-300"
                asChild
              >
                <a href="mailto:amanindiamuzz@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send a Message
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-[#86868b]">
            © 2025 Aman India. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
