import React from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiCsharp,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiOracle,
  SiPowershell,
  SiAzuredevops,
  SiMicrosoftazure,
  SiTypescript,
  SiPowerapps,
  SiPowerautomate,
  SiVuedotjs,
  SiAzurepipelines,
} from "react-icons/si";
import { DiJavascript1, DiDotnet } from "react-icons/di";

interface Tech {
  category: string;
  technologies: {
    name: string;
    icon: JSX.Element;
  }[];
}

export const Technologies: Tech[] = [
  {
    category: "Backend",
    technologies: [
      { name: "ASP.NET", icon: <DiDotnet /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C#", icon: <SiCsharp /> },
      { name: "Entity Framework", icon: <DiDotnet /> },
      { name: "Web APIs", icon: <DiDotnet /> }, // No specific icon, using .NET icon
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "JavaScript", icon: <DiJavascript1 /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Vue", icon: <SiVuedotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Mobile",
    technologies: [
      { name: "JAVA", icon: <FaJava /> },
      { name: "Android Java", icon: <FaJava /> }, // Using Java icon for both
    ],
  },
  {
    category: "Databases",
    technologies: [
      { name: "MSSQL", icon: <SiMicrosoftsqlserver /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Oracle", icon: <SiOracle /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Microsoft Stack",
    technologies: [
      { name: "Power Apps", icon: <SiPowerapps /> },
      { name: "Power Automate", icon: <SiPowerautomate /> },
      { name: "Azure DevOps", icon: <SiAzuredevops /> },
      { name: "Azure Cloud", icon: <SiMicrosoftazure /> },
      { name: "M365 Finance & Operations", icon: <SiPowershell /> },
      { name: "X++", icon: <DiDotnet /> },
    ],
  },
  {
    category: "Version Control & CI/CD",
    technologies: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Azure Pipelines", icon: <SiAzurepipelines /> }, // Using a gear icon for pipelines
    ],
  },
];

function Skills() {
  return (
    <>
      <div className="flex flex-col justify-start w-full mt-2">
        {Technologies.map(({ category, technologies }) => (
          <div key={category}>
            <h1 className="mx-2 my-auto font-semibold">{category}</h1>
            <div className="md:flex grid grid-cols-2 mx-2 flex-wrap">
              {technologies.map(({ name, icon }) => (
                <div key={name} className="flex m-2 align-middle">
                  <div className=" my-auto mx-2 text-red-600">{icon}</div>
                  <p className="my-auto">{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
