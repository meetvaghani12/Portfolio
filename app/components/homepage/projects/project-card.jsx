// @flow strict
"use client";
import Image from 'next/image';
import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] h-full overflow-hidden">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image || '/projects/placeholder.png'}
          alt={project.name}
          fill
          className="object-cover transform transition-transform duration-300 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] to-transparent opacity-60"></div>
      </div>

      <div className="p-4">
        <h3 className="text-[#16f2b3] text-lg font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool, idx) => (
            <span key={idx} className="text-xs bg-[#1a1443] text-white px-2 py-1 rounded">
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-xs bg-[#1a1443] text-white px-2 py-1 rounded">
              +{project.tools.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;