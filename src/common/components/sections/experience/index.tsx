"use client";

import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";
import { useHasMounted, useSectionInView } from "@/common/lib/hooks";
import SectionHeading from "@/common/components/shared/section-heading";
import { experiencesData } from "@/common/lib/data";
import SectionDivider from "@/common/components/shared/section-divider";

export default function Experience() {
  const { ref } = useSectionInView("experience");
  const { theme } = useTheme();
  const hasMounted = useHasMounted();
  const [selectedSection, setSelectedSection] = useState("experience");

  const filteredData = experiencesData.filter(
      (item) => item.section === selectedSection
  );

  function getIconElement(icon: React.ReactNode | StaticImageData, title: string) {
    if (icon && typeof icon === "object" && "src" in icon) {
      return (
          <Image
              src={icon as StaticImageData}
              alt={title}
              width={50}
              height={50}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
      );
    }
    return icon;
  }

  return (
      <section
          id="experience"
          ref={ref}
          className="w-full scroll-mt-20 dark:bg-darkBg dark:text-white"
      >
        <SectionHeading>My experience</SectionHeading>
        <div className="flex justify-center space-x-4 mb-6">
          <button
              onClick={() => setSelectedSection("experience")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedSection === "experience"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
          >
            Experiences
          </button>
          <button
              onClick={() => setSelectedSection("education")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedSection === "education"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
          >
            Education
          </button>
          <button
              onClick={() => setSelectedSection("extracurriculars")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedSection === "extracurriculars"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
          >
            Extracurriculars
          </button>
        </div>
        <VerticalTimeline animate={false}>
          {hasMounted &&
              filteredData.map((item, index) => (
                  <VerticalTimelineElement
                      key={index}
                      contentStyle={{
                        background:
                            theme === "light"
                                ? "#f3f4f6"
                                : "rgba(255, 255, 255, 0.05)",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                      }}
                      contentArrowStyle={{
                        borderRight:
                            theme === "light"
                                ? "0.4rem solid #9ca3af"
                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                        display: theme === "dark" ? "none" : "block",
                      }}
                      date={item.date}
                      icon={getIconElement(item.icon, item.title)}
                      iconStyle={{
                        background:
                            theme === "light"
                                ? "#fff"
                                : "rgba(255, 255, 255, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        overflow: "hidden",
                        width: "50px",
                        height: "50px",
                      }}
                  >
                    <h3 className="font-semibold capitalize">{item.title}</h3>
                    <p className="!mt-0 !mb-1 font-medium">{item.company}</p>
                    <p className="!mt-0 font-normal">{item.location}</p>
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                      {item.description}
                    </p>
                  </VerticalTimelineElement>
              ))}
        </VerticalTimeline>
        <div className="flex w-full justify-center dark:bg-darkBg">
          <SectionDivider />
        </div>
      </section>
  );
}
