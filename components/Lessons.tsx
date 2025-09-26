"use client";
import { useState } from "react";
import CardNumber from "./CardNumber";
import { Eight, Five, Four, One, Seven, Six, Three, Two } from "./icons";
import { Button } from "./ui/button";

const Lessons = () => {
  type LessonItem = {
    icon: React.ReactNode;
    title: string;
    description: string;
  };

  type LessonCategory = "Kindergarten" | "High School" | "College";

  const [active, setActive] = useState<LessonCategory>("High School");
  const steps: LessonCategory[] = ["Kindergarten", "High School", "College"];

  const lessonsData: Record<LessonCategory, LessonItem[]> = {
    Kindergarten: [
      {
        icon: <One />,
        title: "Kindergarten One",
        description:
          "In Kindergarten 1, children learn basic shapes, colors, and social interaction skills...",
      },
      {
        icon: <Two />,
        title: "Kindergarten Two",
        description:
          "In Kindergarten 2, children are introduced to simple numbers, letters, and storytelling...",
      },
      {
        icon: <Three />,
        title: "Kindergarten Three",
        description:
          "Children in Kindergarten 3 focus on creativity, drawing, and developing fine motor skills...",
      },
      {
        icon: <Four />,
        title: "Kindergarten Four",
        description:
          "This stage emphasizes teamwork, sharing, and early problem-solving activities...",
      },
      {
        icon: <Five />,
        title: "Kindergarten Five",
        description:
          "Children start learning simple songs, poems, and basic memory games...",
      },
      {
        icon: <Six />,
        title: "Kindergarten Six",
        description:
          "Focus on listening, communication, and understanding classroom routines...",
      },
      {
        icon: <Seven />,
        title: "Kindergarten Seven",
        description:
          "Practical life activities like washing hands, organizing toys, and responsibility...",
      },
      {
        icon: <Eight />,
        title: "Kindergarten Eight",
        description:
          "Preparing children for primary school with simple reading and counting exercises...",
      },
    ],

    "High School": [
      {
        icon: <One />,
        title: "Standard One",
        description:
          "Standard 1 is a foundation Standard that reflects 7 important concepts...",
      },
      {
        icon: <Two />,
        title: "Standard Two",
        description:
          "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
      },
      {
        icon: <Three />,
        title: "Standard Three",
        description:
          "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...",
      },
      {
        icon: <Four />,
        title: "Standard Four",
        description:
          "Standard 4 of the Aged Care Quality Standards focuses on services and supports...",
      },
      {
        icon: <Five />,
        title: "Standard Five",
        description:
          "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
      },
      {
        icon: <Six />,
        title: "Standard Six",
        description:
          "Standard 6 requires an organisation to have a system to resolve complaints...",
      },
      {
        icon: <Seven />,
        title: "Standard Seven",
        description:
          "Standard 7 Blood Management mandates that leaders of health service organisations...",
      },
      {
        icon: <Eight />,
        title: "Standard Eight",
        description:
          "Standard 8 Course from NCERT Solutions help students to understand...",
      },
    ],

    College: [
      {
        icon: <One />,
        title: "Course One",
        description:
          "Course 1 introduces students to academic writing, research methods, and critical thinking...",
      },
      {
        icon: <Two />,
        title: "Course Two",
        description:
          "Course 2 focuses on advanced mathematics, logic, and problem-solving skills...",
      },
      {
        icon: <Three />,
        title: "Course Three",
        description:
          "This course covers basics of programming, algorithms, and data structures...",
      },
      {
        icon: <Four />,
        title: "Course Four",
        description:
          "Course 4 explores economics, management, and teamwork in professional environments...",
      },
      {
        icon: <Five />,
        title: "Course Five",
        description:
          "Focus on scientific research, experiments, and lab-based projects...",
      },
      {
        icon: <Six />,
        title: "Course Six",
        description:
          "Developing communication, presentation, and public speaking skills...",
      },
      {
        icon: <Seven />,
        title: "Course Seven",
        description:
          "Professional ethics, leadership training, and project management...",
      },
      {
        icon: <Eight />,
        title: "Course Eight",
        description:
          "Final year capstone project combining all knowledge into real-world application...",
      },
    ],
  };

  return (
    <section className="flex flex-col gap-5 sm:mx-auto sm:max-w-[944px] lg:max-w-[1280px]">
      <h2 className="text-28-32 sm:text-35-40 lg:text-45-55 text-center font-bold">
        Qualified lessons for students
      </h2>
      <p className="text-16-26 sm:text-14-28 lg:text-16-30 mx-auto max-w-2xl px-1 text-center">
        A lesson or class is a structured period of time where learning is
        intended to occur. It involves one or more students being taught by a
        teacher or instructor.
      </p>
      <div className="no-scrollbar flex -space-x-3 overflow-x-auto sm:justify-center">
        {steps.map((step) => (
          <Button
            key={step}
            variant="EducationSteps"
            size="EducationSteps"
            className={
              active === step
                ? "text-background bg-orange-900 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                : ""
            }
            onClick={() => setActive(step)}
          >
            {step}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 justify-between gap-9 sm:grid-cols-3 lg:grid-cols-4">
        {lessonsData[active].map((item: LessonItem, index: number) => (
          <CardNumber
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            action="Class Details"
          />
        ))}
      </div>
      <Button variant="Lessons" size="Lessons" className="mx-auto">
        Visit More Classes
      </Button>
    </section>
  );
};

export default Lessons;
