import { BriefcaseIcon, DollarSignIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Job data to map over
const jobListings = [
  {
    id: 1,
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
    logoSrc: "/image-77-2.png",
    logoStyle: "object-cover",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
  },
  {
    id: 2,
    title: "Node Js Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
    logoSrc: "/image-79.png",
    logoStyle: "absolute w-[45px] h-[45px] top-3.5 left-2.5",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
    logoContainerStyle:
      "relative w-[66px] h-[66px] top-2 left-[9px] bg-white rounded-[102.5px] overflow-hidden",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
    logoSrc: "/image-78.png",
    logoStyle: "absolute w-[51px] h-[51px] top-0.5 left-0.5",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
    logoContainerStyle:
      "relative w-[60px] h-[60px] top-[11px] left-3 bg-[#f7881f] rounded-[93.33px] overflow-hidden",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
    logoSrc: "/image-77-2.png",
    logoStyle: "object-cover",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
  },
];

export const FrameWrapperByAnima = (): JSX.Element => {
  return (
    <div className="flex gap-4 py-4 overflow-x-auto">
      {jobListings.map((job) => (
        <Card
          key={job.id}
          className="w-[316px] h-[360px] rounded-xl shadow-[0px_0px_14px_#d3d3d326] relative"
        >
          <CardContent className="p-0">
            {/* Logo container */}
            <div
              className="absolute w-[83px] h-[82px] top-4 left-4 rounded-[13.18px] overflow-hidden border border-solid border-white shadow-[0px_0px_10.25px_#94949440]"
              style={{ background: job.logoBackground }}
            >
              {job.logoContainerStyle ? (
                <div className={job.logoContainerStyle}>
                  <img
                    className={job.logoStyle}
                    alt="Company logo"
                    src={job.logoSrc}
                  />
                </div>
              ) : (
                <img
                  className={`absolute w-[66px] h-[66px] top-2 left-[9px] ${job.logoStyle}`}
                  alt="Company logo"
                  src={job.logoSrc}
                />
              )}
            </div>

            {/* Posted time badge */}
            <Badge className="absolute top-4 left-[222px] bg-[#afd8ff] text-black font-medium px-2.5 py-[7px] rounded-[10px]">
              {job.postedTime}
            </Badge>

            {/* Job title */}
            <h3 className="absolute top-[116px] left-4 font-bold text-black text-xl [font-family:'Satoshi_Variable-Bold',Helvetica]">
              {job.title}
            </h3>

            {/* Job details */}
            <div className="inline-flex items-center gap-4 absolute top-40 left-4">
              <div className="inline-flex items-center gap-1">
                <BriefcaseIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="font-medium text-[#5a5a5a] text-base [font-family:'Satoshi_Variable-Medium',Helvetica]">
                  {job.experience}
                </span>
              </div>

              <div className="inline-flex items-center gap-1">
                <MapPinIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="font-medium text-[#5a5a5a] text-base [font-family:'Satoshi_Variable-Medium',Helvetica]">
                  {job.location}
                </span>
              </div>

              <div className="inline-flex items-center gap-1">
                <DollarSignIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="font-medium text-[#5a5a5a] text-base [font-family:'Satoshi_Variable-Medium',Helvetica]">
                  {job.salary}
                </span>
              </div>
            </div>

            {/* Job description */}
            <p className="absolute w-[300px] top-[201px] left-[9px] font-medium text-[#555555] text-sm [font-family:'Satoshi_Variable-Medium',Helvetica] whitespace-pre-line">
              {job.description}
            </p>

            {/* Apply button */}
            <Button className="absolute w-[284px] bottom-4 left-4 bg-[#00aaff] text-white font-bold text-base rounded-[10px] shadow-[0px_0px_14px_#5c5c5c26] border border-solid">
              Apply Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
