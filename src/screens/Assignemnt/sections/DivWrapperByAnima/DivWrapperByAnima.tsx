import { ClockIcon, DollarSignIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../components/ui/card";

// Job card data for mapping
const jobCards = [
  {
    id: 1,
    title: "Node Js Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
    logoSrc: "/image-79-1.png",
    logoStyle: "bg-white",
  },
  {
    id: 2,
    title: "UX/UI Designer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
    logoSrc: "/image-78-1.png",
    logoStyle: "bg-[#f7881f]",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
    logoSrc: "/image-77-2.png",
    logoStyle: "",
  },
  {
    id: 4,
    title: "Node Js Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
    logoSrc: "/image-79-2.png",
    logoStyle: "bg-white",
  },
];

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <div className="flex items-center gap-4 w-full py-8">
      {jobCards.map((job) => (
        <Card
          key={job.id}
          className="w-[316px] h-[360px] relative rounded-xl shadow-[0px_0px_14px_#d3d3d326]"
        >
          <CardHeader className="p-0">
            <div className="flex justify-between items-start p-4">
              <div className="w-[83px] h-[82px] rounded-[13.18px] overflow-hidden [background:linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)] border border-solid border-white shadow-[0px_0px_10.25px_#94949440]">
                {job.logoStyle ? (
                  <div
                    className={`relative w-[66px] h-[66px] mt-2 mx-auto rounded-[102.5px] overflow-hidden ${job.logoStyle}`}
                  >
                    <img
                      className="absolute w-[45px] h-[45px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      alt="Company logo"
                      src={job.logoSrc}
                    />
                  </div>
                ) : (
                  <img
                    className="w-[66px] h-[66px] mt-2 mx-auto object-cover"
                    alt="Company logo"
                    src={job.logoSrc}
                  />
                )}
              </div>

              <Badge className="bg-[#afd8ff] text-black hover:bg-[#afd8ff] hover:text-black">
                <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-sm">
                  {job.postedTime}
                </span>
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-4 pt-0">
            <h3 className="mt-[30px] [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-black text-xl">
              {job.title}
            </h3>

            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                <ClockIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base">
                  {job.experience}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <MapPinIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base">
                  {job.locationType}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <DollarSignIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base">
                  {job.salary}
                </span>
              </div>
            </div>

            <p className="mt-5 [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#555555] text-sm whitespace-pre-line">
              {job.description}
            </p>
          </CardContent>

          <CardFooter className="absolute bottom-4 left-4 right-4 p-0">
            <Button className="w-full bg-[#00aaff] hover:bg-[#00aaff] text-white rounded-[10px] shadow-[0px_0px_14px_#5c5c5c26]">
              <span className="[font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-base">
                Apply Now
              </span>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
