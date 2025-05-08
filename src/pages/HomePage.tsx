import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { JobCard } from "../components/JobCard";
import { Job, JobFilters } from "../types/job";

export function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<JobFilters>({
    title: "",
    location: "",
    jobType: "",
    salaryRange: [50000, 80000],
  });

  useEffect(() => {
    async function fetchJobs() {
      const jobsRef = collection(db, "jobs");
      let q = query(jobsRef);

      if (filters.title) {
        q = query(q, where("title", ">=", filters.title));
      }
      if (filters.location) {
        q = query(q, where("location", "==", filters.location));
      }
      if (filters.jobType) {
        q = query(q, where("jobType", "==", filters.jobType));
      }
      if (filters.salaryRange) {
        q = query(
          q,
          where("salaryMax", ">=", filters.salaryRange[0]),
          where("salaryMax", "<=", filters.salaryRange[1])
        );
      }

      const snapshot = await getDocs(q);
      const jobsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Job));
      setJobs(jobsData);
    }

    fetchJobs();
  }, [filters]);

  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      <div className="max-w-[1440px] mx-auto px-4">
        <Navbar />
        <SearchBar filters={filters} onFilterChange={setFilters} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
          {jobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
