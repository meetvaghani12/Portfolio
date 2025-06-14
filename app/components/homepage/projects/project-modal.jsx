"use client";
import { FaCode, FaPlay, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d1224] rounded-lg border border-[#1b2c68a0]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <FaTimes size={24} />
        </button>

        <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src={project.image || '/projects/placeholder.png'}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 1536px) 100vw, 1536px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] to-transparent opacity-60"></div>
          <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-[#16f2b3]">{project.name}</h2>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#1a1443] text-white rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-[#16f2b3] text-black rounded-lg hover:bg-[#13d69f] transition-colors"
              >
                <FaPlay /> Live Demo
              </Link>
            )}
            {project.code && (
              <Link
                href={project.code}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1443] text-white rounded-lg hover:bg-[#251e5e] transition-colors"
              >
                <FaCode /> View Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;