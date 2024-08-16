import Image from "next/image";
import EducationCard from "./EducationCard";
import TimelineItem from "./TimelineItem";
import { Education, Experience, SoftSkills } from "../application/Data";
import Skills from "./Skills";

function Aboutme() {
  return (
    <section className="container mx-auto flex items-center bg-background-pattern">
      <div className="flex flex-col p-10 mx-4 my-3 text-white rounded-sm w-full  bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <h1 className="text-3xl">About Me</h1>
        <div className="flex lg:flex-row flex-col my-2 ">
          <div className="relative m-2 lg:w-1/3 lg:h-full  md:w-3/5 w-1/2 h-1/2  border border-black">
            <Image
              className="rounded-md"
              src={`/images/pfp.jpg`}
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="picture of author"
              width={400}
              height={500}
            />
          </div>
          <div className="flex my-2 mx-1 flex-col w-full">
            <div className="w-full">
              <h1 className="text-xl font-medium">Intro </h1>
              <p className="font-thin">
                Hello, I&apos;m Mohammed Muqtadir Ahad, a software engineer born
                and raised in Lautoka, amidst the stunning landscapes of the
                Fiji Islands. Growing up in this tropical paradise, I&apos;ve
                witnessed firsthand how technology can bridge gaps and create
                opportunities, even in remote corners of the world. As a
                Software engineer, I&apos;m passionate about leveraging my
                expertise in Microsoft technologies and full-stack development
                to not only craft innovative solutions for global clients but
                also to contribute to the booming tech scene in Fiji, where
                digital transformation is gradually reshaping our island nation.
              </p>
            </div>

            {/* Education */}
            <div className="mt-3 ">
              <h1 className=" font-medium text-xl pb-2 border-b border-red-100">
                Education
              </h1>
              <div className="flex flex-col mt-2 ">
                {Education.map((value, index) => (
                  <EducationCard key={index} {...value} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience  */}
        <div className="mt-3">
          <h1 className="text-xl font-medium pb-2 mb-8 border-b border-red-100">
            Experience
          </h1>
          <div className="flex flex-col mt-2">
            {Experience.map((value, index) => (
              <TimelineItem key={index} {...value} />
            ))}
          </div>
        </div>

        {/* Skills  */}
        <div className="mt-3">
          <h1 className="text-xl font-medium pb-2 mb-3 border-b border-red-100">
            Tech & Skills
          </h1>
          <p className="font-light">
            Some of the tech that I&apos;m familiar with
          </p>
          <Skills />
        </div>

        <div className="mt-3">
          <h1 className="text-xl font-medium pb-2 mb-3 border-b border-red-100">
            Soft skills
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 ">
            {SoftSkills.map((value, index) => (
              <div
                key={index}
                className="font-normal m-2 rounded-md p-4 border border-red-700 bg-red-700 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100"
              >
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
