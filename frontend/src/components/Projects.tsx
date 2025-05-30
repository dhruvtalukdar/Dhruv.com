
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "3D Portfolio",
    description:
      "An interactive 3D portfolio built with Three.js and GSAP, featuring smooth animations and a modern UI to showcase my work with style and motion.(It's still in progress)",
    tags: ["React", "Three.js", "GSAP", "JavaScript", "Tailwind CSS"],
    image: "/3d-portfolio.png",
    github: "https://github.com/dhruvtalukdar/My-PortFolio-3d.git",
    // live: "https://example.com",
  },
  {
    title: "DevAI",
    description:
      "An AI chatbot that teaches MERN stack concepts through engaging stories, built with Gemini API and custom prompt engineering.",
    tags: ["ExpressJs", "MongoDB", "Gemini API", "Node.js", "React"],
    image: "/DevAi.png",
    github: "https://github.com/dhruvtalukdar/DevAi-Refactored.git",
    // live: "https://example.com",
  },
  // {
  //   title: "Project Three",
  //   description:
  //     "A responsive dashboard application with data visualization and analytics.",
  //   tags: ["React", "D3.js", "Material UI"],
  //   image: "/placeholder.svg",
  //   github: "https://github.com",
  //   live: "https://example.com",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border hover:border-primary/20 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
