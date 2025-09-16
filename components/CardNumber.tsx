import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface CardProps {
  title: string;
  description: string;
  action: string;
  icon: React.ReactNode;
}

const CardNumber = ({ title, description, action, icon }: CardProps) => {
  return (
    <Card className="flex h-[329px] items-center justify-evenly rounded-[15px] transition-transform duration-300 hover:scale-105">
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-25-100 flex min-w-[205px] flex-col items-center gap-5 px-0 text-center font-semibold">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-16-30 px-7 text-center">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button variant="ClassDetails" size="ClassDetails">
            {action}
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default CardNumber;
