import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Message sent! I'll get back to you within 24 hours.");
    reset();
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "nadendlasrilalitha@gmail.com",
      href: "mailto:nadendlasrilalitha@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8096700702",
      href: "tel:+918096700702",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "nadendlasrilalitha",
      href: "https://www.linkedin.com/in/nadendlasrilalitha/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "srilalitha-30",
      href: "https://github.com/srilalitha-30",
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Looking for a skilled developer to join your team or have a project in mind? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glassmorphism p-8 rounded-3xl h-full flex flex-col space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />

              <div className="relative">
                <h3 className="text-xl font-bold mb-1">Contact Information</h3>
                <p className="text-muted-foreground text-sm">Fill out the form and I'll get back to you within 24 hours.</p>
              </div>

              <div className="space-y-5 relative">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
                          <div className="font-semibold text-sm group-hover:text-primary transition-colors">{item.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
                          <div className="font-semibold text-sm">{item.value}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glassmorphism p-8 md:p-10 rounded-3xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <input
                    id="name"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl bg-background border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all ${errors.name ? "border-red-500" : "border-border"}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl bg-background border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all ${errors.email ? "border-red-500" : "border-border"}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject"
                  {...register("subject")}
                  className={`w-full px-4 py-3 rounded-xl bg-background border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all ${errors.subject ? "border-red-500" : "border-border"}`}
                  placeholder="Job Opportunity / Collaboration"
                />
                {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-background border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none ${errors.message ? "border-red-500" : "border-border"}`}
                  placeholder="Hello, I'd like to discuss..."
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-accent text-white font-bold text-base flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin" size={20} /> Sending...</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
