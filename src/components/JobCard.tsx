import { Job } from "../types/job";
import { BriefcaseIcon, MapPinIcon, DollarSignIcon } from "lucide-react";

interface JobCardProps {
  job: Job;
  index: number; // ✅ index is needed for logo mapping
}

// ✅ Mapping logos to lowercase company keys
const logoMapping: Record<string, string> = {
  amazon: "/image-77.png",
  tesla: "/image-78.png",
  swiggy: "/image-79.png",
};

export function JobCard({ job, index }: JobCardProps) {
  // ✅ Cycle through default logos by index
  const defaultLogos = ["/image-77.png", "/image-78.png", "/image-79.png"];
  const logoSrc =
    logoMapping[job.company?.toLowerCase()] ||
    defaultLogos[index % defaultLogos.length];

  return (
    <div className="w-full md:w-[316px] h-auto bg-white rounded-xl shadow-[0px_0px_14px_#d3d3d326] p-4 relative">
      <div className="flex justify-between items-start">
        <div className="w-[83px] h-[82px] rounded-[13.18px] overflow-hidden bg-gradient-to-b from-[#FEFEFD] to-[#F1F1F1] border border-white shadow-[0px_0px_10.25px_#94949440] flex items-center justify-center">
          <img
            src={logoSrc}
            alt={job.company}
            className="w-[66px] h-[66px] object-contain"
          />
        </div>
        <span className="bg-[#AFD8FF] text-black px-2.5 py-1 rounded-[10px] text-sm font-medium">
          {job.postedTime || "24h Ago"}
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
            {job.salaryMax} LPA
          </span>
        </div>
      </div>

      <p className="mt-5 font-medium text-[#555555] text-sm leading-[1.5] line-clamp-4 h-[96px]">
        {job.description}
      </p>

      <button className="absolute bottom-4 left-4 right-4 bg-[#00AAFF] text-white font-bold text-base py-3 rounded-[10px] shadow-[0px_0px_14px_#5C5C5C26] hover:bg-[#0095e0] transition-colors">
        Apply Now
      </button>
    </div>
  );
}
