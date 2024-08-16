import React from "react";

type Experience = {
  name: string;
  period: string;
  location: string;
};

type prop = {
  Exprience: Experience[];
};

function TimelineItem({
  name,
  period,
  company,
  location,
  current,
  description,
}: {
  name: string;
  period: string;
  company: string;
  location: string;
  current?: boolean;
  description: string;
}) {
  return (
    <div className="mx-4">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-8 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-red-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900">
            <svg
              className="w-2.5 h-2.5 text-red-800 dark:text-red-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-medium text-gray-900 dark:text-white">
            {name}{" "}
            {current && (
              <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 ms-3">
                Present
              </span>
            )}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-2 text-gray-400 dark:text-gray-500 ">
            {period}
          </time>
          <div className="block mb-2 text-sm font-normal leading-2 text-gray-400 dark:text-gray-500 ">
            {company} {location}
          </div>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </li>
      </ol>
    </div>
  );
}

export default TimelineItem;
