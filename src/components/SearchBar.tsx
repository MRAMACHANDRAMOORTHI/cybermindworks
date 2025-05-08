import { SearchIcon, ChevronDownIcon, UserIcon } from "lucide-react";
import { JobFilters } from "../types/job";
import { useState, useEffect } from "react";

interface SearchBarProps {
  filters: JobFilters;
  onFilterChange: (filters: JobFilters) => void;
}

export function SearchBar({ filters, onFilterChange }: SearchBarProps) {
  const [minSalary, setMinSalary] = useState<number>(filters.salaryRange[0]);
  const [maxSalary, setMaxSalary] = useState<number>(filters.salaryRange[1]);

  // Update the salary range when slider changes
  const handleSalaryChange = (value: number) => {
    setMaxSalary(value);
    onFilterChange({
      ...filters,
      salaryRange: [minSalary, value],
    });
  };

  // Update minimum salary (with validation)
  const handleMinSalaryChange = (value: number) => {
    const newMin = Math.min(value, maxSalary - 10000); // Ensure minimum is at least 10k less than maximum
    setMinSalary(newMin);
    onFilterChange({
      ...filters,
      salaryRange: [newMin, maxSalary],
    });
  };

  // Initialize sliders with filter values
  useEffect(() => {
    setMinSalary(filters.salaryRange[0]);
    setMaxSalary(filters.salaryRange[1]);
  }, []);

  return (
    <div className="w-full bg-white shadow-[0px_0px_8px_rgba(0,0,0,0.1)] p-4 md:p-6 mt-6 rounded-xl">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6">
        {/* Search by title */}
        <div className="flex items-center flex-1 border-b md:border-b-0 pb-3 md:pb-0">
          <SearchIcon className="w-5 h-5 text-[#686868] mr-4 md:mr-6 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="w-full border-none text-[#686868] font-medium placeholder:text-[#686868] focus:outline-none"
            value={filters.title}
            onChange={(e) => onFilterChange({ ...filters, title: e.target.value })}
          />
        </div>

        {/* Vertical divider - only visible on desktop */}
        <div className="hidden md:block w-px h-12 bg-[#E5E5E5]" />

        {/* Location filter */}
        <div className="flex items-center flex-1 border-b md:border-b-0 pb-3 md:pb-0">
          <img src="/location.png" alt="Location" className="w-[18px] h-[23px] mr-4 md:mr-6 flex-shrink-0" />
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

        {/* Vertical divider - only visible on desktop */}
        <div className="hidden md:block w-px h-12 bg-[#E5E5E5]" />

        {/* Job type filter */}
        <div className="flex items-center flex-1 border-b md:border-b-0 pb-3 md:pb-0">
          <UserIcon className="w-5 h-5 mr-4 md:mr-6 text-[#686868] flex-shrink-0" />
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

        {/* Vertical divider - only visible on desktop */}
        <div className="hidden md:block w-px h-12 bg-[#E5E5E5]" />

        {/* Salary range */}
        <div className="flex flex-col w-full md:w-[264px] pt-2 md:pt-0">
          <div className="flex justify-between mb-2">
            <span className="font-bold text-[#222222] text-base">Salary Per Month</span>
            <span className="font-bold text-[#222222] text-base">
              ₹{minSalary / 1000}k - ₹{maxSalary / 1000}k
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="range"
              min="10000"
              max="200000"
              step="5000"
              className="w-full accent-[#A128FF]"
              value={minSalary}
              onChange={(e) => handleMinSalaryChange(parseInt(e.target.value))}
            />
            <input
              type="range"
              min={minSalary + 10000}
              max="500000"
              step="5000"
              className="w-full accent-[#A128FF]"
              value={maxSalary}
              onChange={(e) => handleSalaryChange(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}