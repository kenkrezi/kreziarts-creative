
import { X, ExternalLink, Play, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-4xl w-full mx-4 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </Badge>
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-6">
            <Tag className="w-4 h-4 text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="border-gray-700 text-gray-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.link && (
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Site
              </Button>
            )}
            {project.videoUrl && (
              <Button className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700">
                <Play className="w-4 h-4 mr-2" />
                Watch Film
              </Button>
            )}
            <Button 
              variant="outline" 
              className="border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-400"
            >
              View Process
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
