"use client";
import { projectsData } from '@/utils/data/projects-data';
import { useState } from 'react';
import ProjectCard from './project-card';
import ProjectModal from './project-modal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="w-full text-center mb-16">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute left-1/2 -translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex flex-col items-center justify-center relative">
          <div className="flex items-center gap-4">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#1a1443] to-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white px-8 py-3 text-xl rounded-md">
              PROJECTS
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-r from-[#1a1443] to-[#1a1443] via-transparent"></span>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Projects;