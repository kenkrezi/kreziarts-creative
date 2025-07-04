
import { useState } from "react";
import { Play, ExternalLink, Eye } from "lucide-react";
import { Project } from "@/types";

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGrid = ({ projects, onProjectClick }: ProjectGridProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
            index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
          }`}
          style={{ animationDelay: `${index * 150}ms` }}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => onProjectClick(project)}
        >
          <div className="relative overflow-hidden rounded-xl bg-gray-800 shadow-2xl">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
              hoveredId === project.id ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-white/20 transition-colors">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  {project.link && (
                    <button className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                  {project.videoUrl && (
                    <button className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Category Icon */}
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                {project.category === 'film' && <Play className="w-4 h-4 text-white" />}
                {project.category === 'web' && <ExternalLink className="w-4 h-4 text-white" />}
                {project.category === 'poster' && <Eye className="w-4 h-4 text-white" />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
