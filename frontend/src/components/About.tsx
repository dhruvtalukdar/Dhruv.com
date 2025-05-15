// import { AccordionHeader } from "@radix-ui/react-accordion";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Next.js",
    "C# .Net",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Gemini API",
    "Three.js",
    "GSAP",
    

  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
            I specialize in building responsive web apps with clean design and cleaner code (until it breaks in production). With a love for frontend polish and backend logic, I bring both sides of the stack together like peanut butter and code.
            </p>
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
