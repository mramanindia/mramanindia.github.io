
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
      value: "+91 620006160",
      href: "tel:+916200061602"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/amanprasad",
      href: "https://linkedin.com/in/amanprasad"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/amanprasad",
      href: "https://github.com/amanprasad"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            or collaborating on AI/ML initiatives. Let's connect!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card key={index} className="glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 border-white/20 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all border border-white/20">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-white">{contact.label}</p>
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white/70 hover:text-white transition-colors break-all"
                      >
                        {contact.value}
                      </a>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="inline-block glass-effect border-white/20 hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-white/80 mb-6">
                Whether you have a project in mind or just want to chat about AI/ML, I'd love to hear from you.
              </p>
              <Button size="lg" className="px-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 transition-all duration-300 hover:scale-105" asChild>
                <a href="mailto:amanindiamuzz@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send a Message
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-sm text-white/60">
            © 2024 Aman Prasad. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
