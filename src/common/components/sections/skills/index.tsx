"use client"
import React, { useState } from "react"
import { skillsData } from "@/common/lib/data"
import { useSectionInView } from "@/common/lib/hooks"
import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "@/common/components/shared/section-heading"
import SectionDivider from "@/common/components/shared/section-divider"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView("skills")
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("language")
  const filteredSkills = skillsData.filter(
      (skill) => skill.category === selectedSkillCategory
  )

  return (
      <section
          id="skills"
          ref={ref}
          className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40"
      >
        <SectionHeading>My skills</SectionHeading>
        <div className="flex justify-center space-x-4 mb-6">
          <button
              onClick={() => setSelectedSkillCategory("language")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedSkillCategory === "language"
                      ? "bg-[#ED6E27] text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
          >
            Technical Skills
          </button>
          <button
              onClick={() => setSelectedSkillCategory("tool")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedSkillCategory === "tool"
                      ? "bg-[#ED6E27] text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
          >
            Tools
          </button>
        </div>
        <ul className="my-26 mb-[150px] flex max-w-[53rem] flex-wrap items-center justify-center gap-2 text-lg text-gray-800">
          {filteredSkills.map((skill, index) => (
              <motion.li
                  className="borderBlack flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
              >
                <Image
                    src={skill.iconPath}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className="mr-2 inline h-6 w-6"
                />
                {skill.name}
              </motion.li>
          ))}
        </ul>
        <div className="flex w-full justify-center dark:bg-darkBg">
          <SectionDivider />
        </div>
      </section>
  )
}
