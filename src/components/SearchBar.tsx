import { SearchIcon, ChevronDownIcon, UserIcon } from "lucide-react";
import { JobFilters } from "../types/job";

interface SearchBarProps {
  filters: JobFilters;
  onFilterChange: (filters: JobFilters) => void;
}

export function SearchBar({ filters, onFilterChange }: SearchBarProps) {
  return (
    <div className="w-full bg-white shadow-md shadow-gray-200 p-6 mt-6 rounded-xl">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6">
        {/* Search by title */}
        <div className="flex items-center flex-1">
          <SearchIcon className="w-5 h-5 text-[#686868] mr-6" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="w-full border-none text-[#686868] font-medium placeholder:text-[#686868] focus:outline-none"
            value={filters.title}
            onChange={(e) => onFilterChange({ ...filters, title: e.target.value })}
          />
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px h-12 bg-[#E5E5E5]" />

        {/* Location filter */}
        <div className="flex items-center flex-1">
          <img src="/location.png" alt="Location" className="w-[18px] h-[23px] mr-6" />
          <select
            className="w-full border-none text-[#686868] font-medium focus:outline-none appearance-none bg-transparent"
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          >
            <option value="">Preferred Location</option>
            <option value="onsite">Onsite</option>
            <option value="remote">Remote</option>
          </select>
          <ChevronDownIcon className="w-6 h-6 text-[#686868] flex-shrink-0 ml-2" />
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px h-12 bg-[#E5E5E5]" />

        {/* Job type filter */}
        <div className="flex items-center flex-1">
        <UserIcon className="w-5 h-5 mr-6 text-[#686868]" />
          <select
            className="w-full border-none text-[#686868] font-medium focus:outline-none appearance-none bg-transparent"
            value={filters.jobType}
            onChange={(e) => onFilterChange({ ...filters, jobType: e.target.value })}
          >
            <option value="">Job Type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
          </select>
          <ChevronDownIcon className="w-6 h-6 text-[#686868] flex-shrink-0 ml-2" />
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px h-12 bg-[#E5E5E5]" />

        {/* Salary range */}
        <div className="flex flex-col w-full md:w-[264px]">
          <div className="flex justify-between mb-2">
            <span className="font-bold text-[#222222] text-base">Salary Per Month</span>
            <span className="font-bold text-[#222222] text-base">
              ₹{(filters.salaryRange?.[0] ?? 50000) / 1000}k - ₹{(filters.salaryRange?.[1] ?? 80000) / 1000}k
            </span>
          </div>
          <input
            type="range"
            min="50000"
            max="80000"
            step="1000"
            className="w-full accent-[#A128FF]"
            value={filters.salaryRange?.[1] ?? 80000}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                salaryRange: [50000, parseInt(e.target.value)],
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
