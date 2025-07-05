
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/types";
import { projects } from "@/data/projects";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className={`text-center z-10 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Creative Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Graphic Designer & Visual Storyteller crafting compelling narratives through 
            <span className="text-purple-400"> posters</span>, 
            <span className="text-blue-400"> web experiences</span>, and 
            <span className="text-pink-400"> cinematic visuals</span>
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
              onClick={scrollToProjects}
            >
              View Work
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <button 
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Selected Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A curated collection of projects spanning visual identity, digital experiences, and cinematic storytelling
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: "all", label: "All Work" },
              { key: "poster", label: "Posters" },
              { key: "web", label: "Web Design" },
              { key: "film", label: "Films" }
            ].map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <ProjectGrid 
            projects={filteredProjects} 
            onProjectClick={setSelectedProject}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">About the Studio</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            I'm a passionate visual creative with over 5 years of experience in graphic design, 
            web development, and film production. My work bridges the gap between artistic expression 
            and strategic communication, creating memorable experiences that resonate with audiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Design</h3>
              <p className="text-gray-300">Visual identity, poster design, and brand storytelling</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Development</h3>
              <p className="text-gray-300">Interactive web experiences and digital platforms</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Film</h3>
              <p className="text-gray-300">Cinematography, editing, and visual storytelling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your vision to life? Let's discuss your next project.
          </p>
          <div className="flex justify-center gap-6">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-400"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-400"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Index;
