"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "The Event Planners",
    description: "A website mockup for an event planning company.",
    image: "/images/projects/1.png",
    tag: ["All", "UI/UX"],
    gitUrl: "https://www.figma.com/file/Xtrm34CLHX7fJQiulMBiRB/Event-Planner?type=design&node-id=0%3A1&mode=design&t=jWticc8aCITmv6dd-1",
    previewUrl: "https://www.behance.net/gallery/183915753/The-Event-Planners", 
  },
  {
    id: 2,
    title: "Gawla Tour App (UI/UX)",
    description: "A mobile app mockup for assigning tour guides to tourists.",
    image: "/images/projects/2.png",
    tag: ["All", "UI/UX"],
    gitUrl: "https://www.behance.net/gallery/182991535/Gawla",
    previewUrl: "https://www.behance.net/gallery/182991535/Gawla",
  },
  {
    id: 3,
    title: "Daily-UI Challenge",
    description: "This is a challenge were I created an element everyday for a couple of days.",
    image: "/images/projects/3.png",
    tag: ["All", "UI/UX"],
    gitUrl: "https://www.behance.net/gallery/173291187/DailyUI",
    previewUrl: "https://www.behance.net/gallery/173291187/DailyUI",
  },
  {
    id: 4,
    title: "Spotify Clone",
    description: "This is a Spotify clone that is implemented using Dart/Flutter.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MariamMowafy/Spotify-Clone-WebApp/tree/main",
    previewUrl: "https://github.com/MariamMowafy/Spotify-Clone-WebApp/blob/main/demo.gif",
  },
  {
    id: 5,
    title: "Flutter CRUD task management app",
    description: "This is a task management app made using Flutter that does CRUD operations.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MariamMowafy/Task-Manager-CRUD/tree/main",
    previewUrl: "https://github.com/MariamMowafy/Task-Manager-CRUD/blob/main/demo.gif",
  },
  {
    id: 6,
    title: "Gawla Tour App (Impelemtation)",
    description: "Gawla was my bachelor project and it is a mobile app implemented using Flutter for assigning tour guides to tourists with authentication.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MariamMowafy/Gamified-tour-app/tree/master",
    previewUrl: "https://docs.google.com/presentation/d/1Euc_n97cPMGnvZQKeu3FCHAPvpMYk4fKR6mqH8J9Bo0/view",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
