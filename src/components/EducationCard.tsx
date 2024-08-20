import React from "react";
import Image from "next/image";
import Link from "next/link";

function EducationCard({
  name,
  period,
  location,
  gpa,
}: {
  name: string;
  period: string;
  location: string;
  gpa: number;
}) {
  return (
    <div
      className="flex flex-row m-1 px-2 py-2 border-red-600 border rounded-md  w-full bg-red-700 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100"
      key={name}
    >
      <div className=" rounded-md">
        <Link href={"https://www.usp.ac.fj/"} rel="noopener" target="_blank">
          <Image
            className=" rounded-md"
            src={"/images/usplogo.jpg"}
            width={50}
            height={50}
            alt="USP logo"
          />
        </Link>
      </div>
      <div className="my-auto mx-2">
        <h1 className="text-lg font-medium">{name}</h1>
        <p className=" text-sm font-extralight text-gray-200">
          {location} - <span className="">{period}</span>
        </p>
      </div>

      <div className=" font-light text-sm absolute bg-red-700 rounded-tr-md md:h-6 h-5 top-0 right-0 text-white ">
        <p className="m-auto font-light md:font-semibold px-1 text-center">
          GPA: {gpa}
        </p>
      </div>
    </div>
  );
}

export default EducationCard;
