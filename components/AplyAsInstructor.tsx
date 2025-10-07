"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const requirements = [
  "An undergraduate degree",
  "Participate in supervised teaching",
  "State teaching license",
  "Purse graduate studies",
];

const rules = [
  "Maintain professional conduct at all times",
  "Provide timely and constructive student feedback",
  "Update course materials regularly",
  "Follow platform guidelines and policies",
];

export default function AplyAsInstructor() {
  const [activeTab, setActiveTab] = useState("requirements");

  return (
    <section className="w-full py-10 md:py-16 ">
      <div className="max-w-7xl mx-auto px-5 md:px-4">
        <div className="  overflow-hidden md:pb-0">
          <div className="flex flex-col lg:flex-row ">
            {/* Image Block */}
            <div className="order-1 lg:order-1 lg:w-1/2 flex justify-center md:justify-start bg-transparent md:bg-transparent p-2 md:py-10">
              <div className="relative bg-[#FFE4DE] rounded-[15px]  w-[335px] h-[362px] md:w-[510px] md:h-[620px]">
                <Image
                  src="/front-view-male-student-red-checkered-shirt-with-backpack-holding-felt-pens-copybook-light-blue-wall 3.png"
                  alt="Instructor with notebook and pens"
                  fill
                  className="object-contain object-top    w-[443px] h-[585px] top-[465px] left-[174px] rotate-[0deg] opacity-100"
            
                />
              </div>
            </div>

            {/* Content Block */}
            <div className="order-2 lg:order-2 lg:w-1/2 px-2 pt-8 md:p-12 flex flex-col justify-start md:justify-center">
              <h2 className="text-[28px] leading-8 md:text-4xl font-bold  mb-5 md:mb-6 tracking-tight">
                Apply As Instructor
              </h2>
              <p className="text-gray-600 text-[14px] leading-[26px] md:text-base md:leading-relaxed mb-6 md:mb-8">
                Teaching is a vital and admirable career. As such, it comes with quite a bit of responsibility, both in practice and in preparation with many skills required to be a teacher. The following steps provide a general breakdown of the requirements for teachers:
              </p>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="h-auto bg-transparent p-0 rounded-none w-full justify-start relative">
                  {/* Bottom border line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
                  
                  <TabsTrigger 
                    value="requirements"
                    className="relative bg-transparent text-[#ff6652] rounded-none px-0 pb-3 mr-8 data-[state=active]:bg-transparent data-[state=active]:text-[#ff6652] data-[state=active]:shadow-none font-medium border-0 hover:bg-transparent focus:bg-transparent"
                  >
                    <span className="text-[#ff6652] font-medium">Instructor Requirements</span>
                    {activeTab === "requirements" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff6652] rounded-full"></div>
                    )}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="rules"
                    className="relative bg-transparent text-gray-500 rounded-none px-0 pb-3 data-[state=active]:bg-transparent data-[state=active]:text-gray-500 data-[state=active]:shadow-none font-medium border-0 hover:bg-transparent focus:bg-transparent"
                  >
                    <span className="text-gray-500 font-medium">Instructor Rules</span>
                    {activeTab === "rules" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff6652] rounded-full"></div>
                    )}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="requirements" className="mt-6">
                  <ul className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#ff6652] mt-2 flex-shrink-0"></div>
                        <span className="text-gray-800 leading-relaxed">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="rules" className="mt-6">
                  <ul className="space-y-4">
                    {rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#ff6652] mt-2 flex-shrink-0"></div>
                        <span className=" leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>

              {/* Apply Button */}
              <Button
                className="my-8 md:mt-8 bg-[#9c4df4] hover:bg-[#8b42e0] text-white w-[143px] h-[54px] rounded-[10px] font-medium text-base flex items-center justify-center"
                style={{ opacity: 1 }}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
