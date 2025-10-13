"use client";

import SimilarCourses from "@/components/SimilarCourses";
import Description from "@/components/Description";
import { Button } from "@/components/ui/button";
import { Star, StarOutline } from "@/components/icons/Icons";

export default function CourseDetails() {
  type Section = {
    title: string;
    description: string;
  };

  type list = {
    title: string;
    li: string[];
  };

  type Course = {
    Certification: Section;
    CourseDetails: Section;
    WhoThisCourseIsFor: Section;
    WhatYouWillLearn: list;
    Instructor: string;
    Price: number;
    Rating: number;
    Durations: number;
    Lessons: number;
    Quzzes: number;
    Certifcate: boolean;
    Language: string;
    Access: string;
  };

  const course: Course = {
    Certification: {
      title: "Certification",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`,
    },
    CourseDetails: {
      title: "Course Details",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`,
    },
    WhoThisCourseIsFor: {
      title: "Who this course is for",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    WhatYouWillLearn: {
      title: "What you'll learn in this course:",
      li: [
        `Lorem ipsum dolor sit amet, consectetur`,
        `Lorem ipsum dolor sit amet, consectetur`,
        `Lorem ipsum dolor sit amet, consectetur`,
        `Lorem ipsum dolor sit amet, consectetur`,
        `Lorem ipsum dolor sit amet, consectetur`,
      ],
    },
    Instructor: "Wade Warren",
    Price: 45,
    Rating: 3,
    Durations: 10,
    Lessons: 30,
    Quzzes: 5,
    Certifcate: true,
    Language: "English",
    Access: "Lifetime",
  };

  return (
    <>
      <div className="flex flex-col gap-x-10 gap-y-7.5 sm:flex-row-reverse">
        <div className="flex flex-col gap-5 sm:h-fit sm:w-100">
          <ul className="text-16-100 flex flex-col gap-6.25 rounded-[10px] bg-white px-5 py-7.5 font-semibold dark:bg-black">
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-white/70">Total Course</p>
              <p className="text-20-100 text-orange-900">
                {"$" + course.Price.toFixed(2)}
              </p>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-white/70">Instructor</p>
              <p>{course.Instructor}</p>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-white/70">Ratings</p>
              <p className="text-yellow-400">
                <div className="flex gap-0.75">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-sm">
                        {i < course.Rating ? <Star /> : <StarOutline />}
                      </span>
                    ))}
                </div>
              </p>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-white/70">Durations</p>
              <p>{course.Durations} Days</p>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-white/70">Lessons</p>
              <p>{course.Lessons}</p>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-white/70">Quzzes</p>
              <p>{course.Quzzes}</p>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-white/70">Certifcate</p>
              <p>{course.Certifcate && <span>Yes</span>}</p>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-white/70">Language</p>
              <p>{course.Language}</p>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-white/70">Access</p>
              <p>{course.Access}</p>
            </li>
          </ul>
          <Button className="h-12.5 w-full rounded-[5px] sm:h-15">
            Purchase Course
          </Button>
        </div>

        <div className="flex flex-1 flex-col gap-7.5">
          <Description
            title={course.CourseDetails.title}
            description={course.CourseDetails.description}
          />
          <Description
            title={course.Certification.title}
            description={course.Certification.description}
          />
          <Description
            title={course.WhoThisCourseIsFor.title}
            description={course.WhoThisCourseIsFor.description}
          />
          <Description
            title={course.WhatYouWillLearn.title}
            li={course.WhatYouWillLearn.li}
            variant="toggle"
          />
        </div>
      </div>
      <SimilarCourses />
    </>
  );
}
