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
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="group data-[state=open]:bg-background flex items-start rounded-b-[10px] data-[state=open]:px-[15px] data-[state=open]:shadow-[0_20px_30px_rgba(0,0,0,0.1)]">
            <div className="flex w-full flex-col gap-2">
              <p className="text-16-20 font-medium group-data-[state=open]:text-orange-900">
                {props.name}
              </p>
              <p className="text-[14px] font-medium text-gray-600">
                {props.title}
              </p>
              <AccordionContent className="bg-background !pb-0 text-balance">
                <p className="text-[14px] font-medium">
                  <span className="text-lg text-yellow-500">★</span>{" "}
                  {props.rating} (
                  <span className="text-orange-900 underline">
                    {props.number}
                  </span>
                  )
                </p>
              </AccordionContent>
            </div>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Teacher;
