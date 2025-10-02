import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface TeacherProps {
  image: string;
  name: string;
  title: string;
  rating: number;
  number: number;
}
const Teacher = (props: TeacherProps) => {
  // const [open, setOpen] = useState(false);
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="flex items-start"
            // onClick={() => setOpen(!open)}
          >
            <div className="flex flex-col gap-2">
              <p className="text-16-20 font-medium">{props.name}</p>
              <p className="text-[14px] font-medium text-gray-600">
                {props.title}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-balance">
            <p className="text-[14px] font-medium">
              ⭐ {props.rating}{" "}
              <span className="text-orange-900">({props.number})</span>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Teacher;
