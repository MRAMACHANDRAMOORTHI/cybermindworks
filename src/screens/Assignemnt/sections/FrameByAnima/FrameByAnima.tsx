import { ChevronDownIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Slider } from "../../../../components/ui/slider";

export const FrameByAnima = (): JSX.Element => {
  // Salary range data
  const salaryRange = {
    min: 50,
    max: 80,
    current: 80,
  };

  return (
    <Card className="w-full bg-white shadow-[0px_0px_14px_#c5bfbf40] p-4 relative">
      <div className="flex flex-col h-[214px]">
        {/* SearchIcon fields container */}
        <div className="flex items-center mt-auto mb-6">
          {/* SearchIcon by job title */}
          <div className="flex items-center flex-1 mr-4">
            <SearchIcon className="w-5 h-5 text-[#686868] mr-6" />
            <Input
              className="border-none text-[#686868] font-medium placeholder:text-[#686868] focus-visible:ring-0"
              placeholder="SearchIcon By Job Title, Role"
            />
          </div>

          <Separator orientation="vertical" className="h-12" />

          {/* Location dropdown */}
          <div className="flex items-center flex-1 mx-4">
            <img
              className="w-[18px] h-[23px] mr-6"
              alt="Location"
              src="/location.png"
            />
            <span className="text-[#686868] font-medium text-base">
              Preferred Location
            </span>
            <ChevronDownIcon className="w-6 h-6 ml-auto" />
          </div>

          <Separator orientation="vertical" className="h-12" />

          {/* Job type dropdown */}
          <div className="flex items-center flex-1 mx-4">
            <img
              className="w-5 h-[18px] mr-6"
              alt="Vector"
              src="/vector-6.svg"
            />
            <span className="text-[#686868] font-medium text-base">
              Job type
            </span>
            <ChevronDownIcon className="w-6 h-6 ml-auto" />
          </div>

          <Separator orientation="vertical" className="h-12" />

          {/* Salary slider */}
          <div className="flex flex-col ml-4 w-[264px]">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-[#222222] text-base">
                Salary Per Month
              </span>
              <span className="font-bold text-[#222222] text-base">
                ₹50k - ₹80k
              </span>
            </div>
            <div className="relative">
              <Slider
                defaultValue={[salaryRange.current]}
                max={salaryRange.max}
                min={salaryRange.min}
                step={1}
                className="w-[250px] mx-auto"
              />
              <div className="absolute w-[15px] h-[15px] left-0 top-0 bg-white rounded-[7.5px] border-[5px] border-solid border-black" />
              <div className="absolute w-[15px] h-[15px] left-[170px] top-0 bg-white rounded-[7.5px] border-[5px] border-solid border-black" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
