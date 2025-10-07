
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";

type Feature = {
  label: string;
  active: boolean;
};

type PricingPackProps = {
  title: string;
  features: Feature[];
  price: string;
};

const PricingPack = ({ title, features, price }: PricingPackProps) => {
  return (
    <Card className="w-[360px] rounded-2xl border border-gray-200 shadow-sm flex flex-col bg-white hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <CardHeader className="flex flex-col items-start py-8 px-8">
        <img src="/price-tag.svg" alt="price tag" className="w-8 h-8 mb-2" />
        <CardTitle className="text-2xl font-extrabold text-gray-800">{title}</CardTitle>
      </CardHeader>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200" />

      {/* Features */}
      <CardContent className="px-8 py-6 flex-1">
        <div className="space-y-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-left">
              {feature.active ? (
                <CheckCircle className="text-green-500 h-5 w-5" />
              ) : (
                <XCircle className="text-red-400 h-5 w-5" />
              )}
              <span
                className={`text-[15px] ${
                  feature.active ? "text-gray-900 font-medium" : "text-gray-500"
                }`}
              >
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-3xl font-bold mt-8 text-gray-900">{price}</p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="pb-8">
        <Button
          variant="outline"
          className="
            w-[260px] h-[2.8rem] mx-auto font-semibold text-[16px]
            border border-purple-600 text-purple-700
            hover:bg-purple-700 hover:text-white hover:shadow-md
            transition-all duration-300
          "
        >
          Purchase Course
        </Button>
      </CardFooter>
    </Card>
  );
};

// ----------------------
// Parent Section
// ----------------------

const pricingData = [
  {
    title: "Basic Pack",
    price: "$200",
    features: [
      { label: "3 HD video lessons & tutorials", active: true },
      { label: "1 Official exam", active: true },
      { label: "100 Practice questions", active: true },
      { label: "1 Month subscriptions", active: true },
      { label: "1 Free book", active: true },
      { label: "Practice quizzes & assignments", active: false },
      { label: "In depth explanations", active: false },
      { label: "Personal instructor Assistance", active: false },
    ],
  },
  {
    title: "Standard Pack",
    price: "$600",
    features: [
      { label: "8 HD video lessons & tutorials", active: true },
      { label: "2 Official exam", active: true },
      { label: "200 Practice questions", active: true },
      { label: "1 Month subscriptions", active: true },
      { label: "3 Free books", active: true },
      { label: "Practice quizzes & assignments", active: true },
      { label: "In depth explanations", active: false },
      { label: "Personal instructor Assistance", active: false },
    ],
  },
  {
    title: "Premium Pack",
    price: "$1200",
    features: [
      { label: "15 HD video lessons & tutorials", active: true },
      { label: "3 Official exam", active: true },
      { label: "300 Practice questions", active: true },
      { label: "1 Month subscriptions", active: true },
      { label: "5 Free books", active: true },
      { label: "Practice quizzes & assignments", active: true },
      { label: "In depth explanations", active: true },
      { label: "Personal instructor Assistance", active: true },
    ],
  },
];

const PricingPackList = () => (
  <section className="flex flex-col items-center justify-center text-center mt-12">
    <h2 className="text-3xl md:text-4xl font-extrabold max-w-3xl mx-auto">
      We create a monthly pricing package for all standard students
    </h2>

    <p className="text-lg md:text-xl mt-4 text-gray-600 max-w-2xl mx-auto">
      Basically we create this package for those who are really interested and get benefited from our courses or books.
    </p>

    <div className="grid grid-cols-1 gap-8 mt-16 mb-20 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {pricingData.map((pack, idx) => (
        <PricingPack key={idx} {...pack} />
      ))}
    </div>
  </section>
);

export default PricingPackList;
