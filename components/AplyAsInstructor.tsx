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
    <section className="w-full py-16 bg-[#F6F4FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Image */}
            <div className="lg:w-1/2 bg-[#FFE4DE] p-8 flex items-start justify-center relative overflow-visible">
              <div 
                className="relative bg-[#FFE4DE] rounded-[15px] overflow-hidden"
                style={{
                  width: '510px',
                  height: '620px',
                }}
              >
                <Image
                  src="/front-view-male-student-red-checkered-shirt-with-backpack-holding-felt-pens-copybook-light-blue-wall 3.png"
                  alt="Instructor with notebook and pens"
                  fill
                  className="object-contain object-top"
                  priority
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-[#1a1625] mb-6">
                Apply As Instructor
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Teaching is a vital and admirable career. As such, it comes with quite a bit of 
                responsibility, both in practice and in preparation with many skills required to 
                be a teacher. The following steps provide a general breakdown of the 
                requirements for teachers:
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
                        <span className="text-gray-800 leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>

              {/* Apply Button */}
              <Button className="mt-8 bg-[#9c4df4] hover:bg-[#8b42e0] text-white px-8 py-3 rounded-xl font-medium text-base w-fit">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
