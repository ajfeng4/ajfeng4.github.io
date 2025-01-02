"use client";
import React, { useState } from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { projectsData } from "@/common/lib/data";
import Project from "./_components/project";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.25);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
      selectedCategory === "All"
          ? projectsData
          : projectsData.filter((p) => p.category === selectedCategory);

  return (
      <section
          className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
          id="projects"
          ref={ref}
      >
        <SectionHeading>Projects</SectionHeading>
        <div className="flex justify-center space-x-4 mb-6">
          <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
          >
            All
          </button>
          <button
              onClick={() => setSelectedCategory("Web")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === "Web"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
          >
            Web
          </button>
          <button
              onClick={() => setSelectedCategory("Mobile")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === "Mobile"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
          >
            Mobile
          </button>
        </div>
        <div className="my-24">
          {filteredProjects.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
          ))}
        </div>
        <SectionDivider />
      </section>
  );
}
