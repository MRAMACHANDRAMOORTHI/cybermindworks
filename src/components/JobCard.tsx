import { Job } from "../types/job";
import { BriefcaseIcon, MapPinIcon, DollarSignIcon } from "lucide-react";

interface JobCardProps {
  job: Job;
  index: number;
}

// Fixed the logo mapping - corrected the incorrect paths
const logoMapping: Record<string, string> = {
  amazon: "/amazon.png",
  tesla: "/tesla.png",
  swiggy: "/swiggy.png",
};

export function JobCard({ job, index }: JobCardProps) {
  const defaultLogos = ["/amazon.png", "/tesla.png", "/swiggy.png"];
  
  // Use the company name to find the logo, defaulting to the cycled logo by index
  const logoSrc = job.company?.toLowerCase() 
    ? logoMapping[job.company.toLowerCase()] || defaultLogos[index % defaultLogos.length]
    : defaultLogos[index % defaultLogos.length];

  // Format salary display - convert to LPA (Lakhs Per Annum)
  const formatSalary = (salary: number) => {
    return salary >= 100000 
      ? `${(salary / 100000).toFixed(1)} LPA` 
      : `${salary / 1000}K`;
  };

  // Format post time display
  const postedTime = job.postedTime || "24h Ago";

  return (
    <div className="w-full md:w-[316px] bg-white rounded-xl shadow-[0px_0px_14px_#d3d3d326] p-4 relative" style={{ minHeight: "380px" }}>
      <div className="flex justify-between items-start">
        <div className="w-[83px] h-[82px] rounded-[13.18px] overflow-hidden bg-gradient-to-b from-[#FEFEFD] to-[#F1F1F1] border border-white shadow-[0px_0px_10.25px_#94949440] flex items-center justify-center">
          <img
            src={logoSrc}
            alt={job.company || "Company Logo"}
            className="w-[66px] h-[66px] object-contain"
          />
        </div>
        <span className="bg-[#AFD8FF] text-black px-2.5 py-1 rounded-[10px] text-sm font-medium">
          {postedTime}
        </span>
      </div>

      <h3 className="mt-[30px] font-bold text-black text-xl truncate">
        {job.title}
      </h3>

      <div className="flex flex-wrap items-center gap-4 mt-6">
        <div className="flex items-center gap-1">
          <BriefcaseIcon className="h-4 w-4 text-[#5A5A5A]" />
          <span className="font-medium text-[#5A5A5A] text-base">
            {job.experience || "1-3 yr Exp"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <MapPinIcon className="h-4 w-4 text-[#5A5A5A]" />
          <span className="font-medium text-[#5A5A5A] text-base">
            {job.location}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSignIcon className="h-4 w-4 text-[#5A5A5A]" />
          <span className="font-medium text-[#5A5A5A] text-base">
            {formatSalary(job.salaryMax)}
          </span>
        </div>
      </div>

      <div className="mt-5 mb-16">
        <p className="font-medium text-[#555555] text-sm leading-[1.5] break-words line-clamp-4">
          {job.description}
        </p>
      </div>

      <button className="absolute bottom-4 left-4 right-4 bg-[#00AAFF] text-white font-bold text-base py-3 rounded-[10px] shadow-[0px_0px_14px_#5C5C5C26] hover:bg-[#0095e0] transition-colors">
        Apply Now
      </button>
    </div>
  );
}