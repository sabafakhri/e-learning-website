"use client";
import { useEffect, useState } from "react";
import {
  Eight,
  Eleven,
  Five,
  Four,
  Nine,
  One,
  Seven,
  Six,
  Ten,
  Three,
  Two,
} from "./icons";
import { Button } from "./ui/button";
import CardNumber from "./CardNumber";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const StandardClasses = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxItems = windowWidth >= 1024 ? 11 : 8;

  type LessonItem = {
    icon: React.ReactNode;
    title: string;
    description: string;
  };

  type LessonCategory =
    | "All Courses"
    | "Kindergarten"
    | "High School"
    | "College"
    | "Computer"
    | "Science"
    | "Engineering"
    | "More Courses";

  const [active, setActive] = useState<LessonCategory>("All Courses");
  const steps: LessonCategory[] = [
    "All Courses",
    "Kindergarten",
    "High School",
    "College",
    "Computer",
    "Science",
    "Engineering",
    "More Courses",
  ];

  const lessonsData: Record<LessonCategory, LessonItem[]> = {
    "All Courses": [],
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
      {
        icon: <Nine />,
        title: "Kindergarten Nine",
        description: "Extra activities for learning reinforcement...",
      },
      {
        icon: <Ten />,
        title: "Kindergarten Ten",
        description: "Group learning and creative play...",
      },
      {
        icon: <Eleven />,
        title: "Kindergarten Eleven",
        description: "Final preparations for transition to primary school...",
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
      {
        icon: <Nine />,
        title: "Standard Nine",
        description: "Standard 9 supplementary content...",
      },
      {
        icon: <Ten />,
        title: "O- Level",
        description: "O-Level course details...",
      },
      {
        icon: <Eleven />,
        title: "A- Level",
        description: "A-Level course details...",
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
      {
        icon: <Nine />,
        title: "Course Nine",
        description: "Electives and workshops...",
      },
      {
        icon: <Ten />,
        title: "Course Ten",
        description: "Special topics in the field...",
      },
      {
        icon: <Eleven />,
        title: "Course Eleven",
        description: "Final presentations and evaluations...",
      },
    ],

    Computer: [
      {
        icon: <One />,
        title: "Computer Basics",
        description:
          "Introduction to computer fundamentals, operating systems, and essential applications...",
      },
      {
        icon: <Two />,
        title: "Programming Foundations",
        description:
          "Learn the basics of coding, algorithms, and problem-solving using Python...",
      },
      {
        icon: <Three />,
        title: "Web Development",
        description:
          "Covers HTML, CSS, and JavaScript to build interactive websites...",
      },
      {
        icon: <Four />,
        title: "Database Systems",
        description:
          "Understand relational databases, SQL queries, and data modeling...",
      },
      {
        icon: <Five />,
        title: "Computer Networks",
        description:
          "Learn about internet protocols, network security, and communication systems...",
      },
      {
        icon: <Six />,
        title: "Software Engineering",
        description:
          "Focus on software design, development life cycle, and agile methodology...",
      },
      {
        icon: <Seven />,
        title: "Cybersecurity",
        description:
          "Understand threats, cryptography, and secure coding practices...",
      },
      {
        icon: <Eight />,
        title: "Artificial Intelligence",
        description:
          "Introduction to AI concepts, machine learning, and real-world applications...",
      },
      {
        icon: <Nine />,
        title: "Computer Nine",
        description: "Additional topics in computing...",
      },
      {
        icon: <Ten />,
        title: "Computer Ten",
        description: "Advanced projects and case studies...",
      },
      {
        icon: <Eleven />,
        title: "Computer Eleven",
        description: "Capstone project and assessment...",
      },
    ],

    Science: [
      {
        icon: <One />,
        title: "Physics Fundamentals",
        description:
          "Explore motion, forces, energy, and the fundamental laws of nature...",
      },
      {
        icon: <Two />,
        title: "Chemistry Basics",
        description:
          "Learn about atoms, molecules, chemical reactions, and the periodic table...",
      },
      {
        icon: <Three />,
        title: "Biology Introduction",
        description:
          "Study cells, genetics, ecosystems, and the basics of human anatomy...",
      },
      {
        icon: <Four />,
        title: "Environmental Science",
        description:
          "Focus on ecosystems, climate change, and sustainable development...",
      },
      {
        icon: <Five />,
        title: "Astronomy",
        description:
          "Introduction to the universe, stars, planets, and galaxies...",
      },
      {
        icon: <Six />,
        title: "Earth Science",
        description:
          "Study geology, meteorology, oceanography, and the structure of Earth...",
      },
      {
        icon: <Seven />,
        title: "Advanced Physics",
        description:
          "Dive deeper into quantum mechanics, relativity, and particle physics...",
      },
      {
        icon: <Eight />,
        title: "Scientific Research",
        description:
          "Learn about research methods, experiments, and data analysis in science...",
      },
      {
        icon: <Nine />,
        title: "Science Nine",
        description: "Additional scientific concepts...",
      },
      {
        icon: <Ten />,
        title: "Science Ten",
        description: "Laboratory experiments and practicals...",
      },
      {
        icon: <Eleven />,
        title: "Science Eleven",
        description: "Research project and evaluation...",
      },
    ],

    Engineering: [
      {
        icon: <One />,
        title: "Mechanical Engineering",
        description:
          "Study machines, thermodynamics, and principles of design and manufacturing...",
      },
      {
        icon: <Two />,
        title: "Civil Engineering",
        description:
          "Focus on construction, architecture, and infrastructure development...",
      },
      {
        icon: <Three />,
        title: "Electrical Engineering",
        description: "Learn about circuits, power systems, and electronics...",
      },
      {
        icon: <Four />,
        title: "Chemical Engineering",
        description:
          "Explore chemical processes, materials science, and industrial applications...",
      },
      {
        icon: <Five />,
        title: "Aerospace Engineering",
        description:
          "Introduction to flight mechanics, aircraft design, and space exploration...",
      },
      {
        icon: <Six />,
        title: "Biomedical Engineering",
        description:
          "Combine medicine and engineering to design medical devices and technologies...",
      },
      {
        icon: <Seven />,
        title: "Software Engineering",
        description:
          "Application of engineering principles in software development and systems...",
      },
      {
        icon: <Eight />,
        title: "Robotics Engineering",
        description:
          "Study robotics, automation, and artificial intelligence in engineering...",
      },
      {
        icon: <Nine />,
        title: "Engineering Nine",
        description: "Specialized topics in engineering...",
      },
      {
        icon: <Ten />,
        title: "Engineering Ten",
        description: "Advanced labs and projects...",
      },
      {
        icon: <Eleven />,
        title: "Engineering Eleven",
        description: "Capstone design and assessment...",
      },
    ],

    "More Courses": [
      {
        icon: <One />,
        title: "Business Management",
        description:
          "Learn leadership, decision-making, and business administration skills...",
      },
      {
        icon: <Two />,
        title: "Economics",
        description:
          "Introduction to microeconomics, macroeconomics, and financial systems...",
      },
      {
        icon: <Three />,
        title: "Psychology",
        description:
          "Study human behavior, cognitive science, and emotional intelligence...",
      },
      {
        icon: <Four />,
        title: "History",
        description:
          "Explore world history, civilizations, and cultural heritage...",
      },
      {
        icon: <Five />,
        title: "Political Science",
        description:
          "Understand governance, political theories, and international relations...",
      },
      {
        icon: <Six />,
        title: "Philosophy",
        description:
          "Focus on logic, ethics, metaphysics, and critical thinking...",
      },
      {
        icon: <Seven />,
        title: "Art & Design",
        description:
          "Covers painting, sculpture, digital design, and creative expression...",
      },
      {
        icon: <Eight />,
        title: "Music",
        description:
          "Learn music theory, instruments, and composition techniques...",
      },
      {
        icon: <Nine />,
        title: "More Nine",
        description: "Additional creative courses...",
      },
      {
        icon: <Ten />,
        title: "More Ten",
        description: "Workshops and applied learning...",
      },
      {
        icon: <Eleven />,
        title: "More Eleven",
        description: "Final evaluation and showcase...",
      },
    ],
  };
  const currentLessons =
    active === "All Courses"
      ? [
          ...lessonsData["Kindergarten"].slice(0, 1),
          ...lessonsData["High School"].slice(1, 2),
          ...lessonsData["College"].slice(2, 3),
          ...lessonsData["Computer"].slice(3, 4),
          ...lessonsData["Science"].slice(4, 5),
          ...lessonsData["Engineering"].slice(5, 6),
          ...lessonsData["More Courses"].slice(6, 11),
        ].slice(0, maxItems)
      : lessonsData[active].slice(0, maxItems);
  return (
    <section className="flex flex-col gap-5 sm:mx-auto sm:max-w-[944px] lg:max-w-[1280px]">
      <ScrollArea className="max-w-[90vw] whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {steps.map((step) => (
            <Button
              key={step}
              variant="hobberd"
              size="hobberd"
              className={
                active === step
                  ? "text-background bg-orange-900 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  : step === "More Courses"
                    ? "bg-background text-purple-900"
                    : "bg-background"
              }
              onClick={() => setActive(step)}
            >
              {step}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h2 className="text-30-100 mt-3 hidden font-semibold sm:block">
        Standard Classes
      </h2>
      <div className="grid grid-cols-1 gap-[15px] max-sm:px-5 sm:grid-cols-3 sm:gap-10 lg:grid-cols-4">
        {currentLessons.map((item: LessonItem, index: number) => (
          <CardNumber
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            action="Class Details"
          />
        ))}
      </div>
    </section>
  );
};

export default StandardClasses;
