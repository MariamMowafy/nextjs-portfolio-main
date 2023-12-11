"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Backend and DevOps",
    id: "Backend and DevOps",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>NodeJS</li>
        <li>C#</li>
        <li>Jenkins</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>Linux</li>
        <li>Shell</li>
      </ul>
    ),
  },
  {
    title: "Data ETL and Visualization",
    id: "Data ETL and Visualization",
    content: (
      <ul className="list-disc pl-2">
        <li>SQL</li>
        <li>Power BI</li>
        <li>Power Automate</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Frontend and UI/UX",
    id: "Frontend and UI/UX",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Flutter</li>
        <li>JavaScript</li>
        <li>Figma</li>
        <li>Angular</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Persuing Master's Degree at Ain Shams University</li>
        <li>Accuried BSc. in Computer Science and Engineering from the German University in Cairo</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Data Analytics Specialization Certificate </li>
        <li>Google Project Management Specialization Certificate </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Backend and DevOps");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Software Engineer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Angular, Node.js, Python, PostgreSQL,
            Figma, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Backend and DevOps")}
              active={tab === "Backend and DevOps"}
            >
              {" "}
              Backend and DevOps{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Data ETL and Visualization")}
              active={tab === "Data ETL and Visualization"}
            >
              {" "}
              Data ETL and Visualization{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Frontend and UI/UX")}
              active={tab === "Frontend and UI/UX"}
            >
              {" "}
              Frontend and UI/UX{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
