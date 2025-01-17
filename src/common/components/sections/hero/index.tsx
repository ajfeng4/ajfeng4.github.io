"use client";

import "next-cloudinary/dist/cld-video-player.css";
import SectionDivider from "@/common/components/shared/section-divider";
import TextAnimation from "./_components/text-animation";
import { useSectionInView } from "@/common/lib/hooks";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { smoothScrollTo } from "@/common/lib/utils";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const { ref } = useSectionInView("home");
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <>
            <section
                className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
                id="home"
                ref={ref}
            >
                <div className="container flex flex-col items-start justify-center tracking-wide text-black dark:text-white">
                    <div className="container relative flex h-full w-full flex-col items-center">
                        <div className="h-72 w-[280px] text-center text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem]">
                            <motion.span
                                initial={{ y: -100, x: "-50%", opacity: 0 }}
                                animate={{ y: 0, x: "-50%", opacity: 1 }}
                                style={{ color: "#ED6E27" }}
                                className="mb-10 text-start font-extrabold"
                            >
                                Hello!
                            </motion.span>
                            <br />
                            <TextAnimation delay={1} baseText={`I'm Alex Feng`} />
                        </div>
                        <motion.div
                            className="w-92 flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:mt-12 md:flex-row lg:text-lg"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.1,
                            }}
                            style={{ color: "#ED6E27" }}
                        >
                            <a
                                className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-darkBg px-7 py-3 text-white outline-none transition hover:bg-[#F6B68A] hover:text-black hover:dark:text-black sm:w-auto"
                                onClick={(e) => {
                                    smoothScrollTo({ e, id: "contact" });
                                    setActiveSection("contact");
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                <span>Contact me here</span>
                            </a>

                            <a
                                className="borderBlack group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#ED6E27] px-7 py-3 text-white outline-none transition hover:bg-[#F39D69] dark:hover:bg-[#F39D69] sm:w-auto"
                                href="/CV_ajfeng.pdf"
                                download
                            >
                                <span>Download CV</span>
                            </a>

                            <div className="flex gap-2">
                                <a
                                    className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F39D69] p-2 text-black transition hover:bg-[#F6B68A] hover:text-gray-950 dark:bg-[#F39D69] dark:text-white/60 dark:hover:bg-[#F6B68A]"
                                    href="https://www.linkedin.com/in/ajfeng/"
                                    target="_blank"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F39D69] p-2 text-gray-700 transition hover:bg-[#F6B68A] hover:text-gray-950 dark:bg-[#F39D69] dark:text-white/60 dark:hover:bg-[#F6B68A]"
                                    href="https://github.com/ajfeng4"
                                    target="_blank"
                                >
                                    <Image
                                        width={25}
                                        height={25}
                                        src={"/svgs/github.svg"}
                                        alt="github icon"
                                    />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <div className="flex w-full justify-center dark:bg-darkBg">
                <SectionDivider />
            </div>
        </>
    );
}
