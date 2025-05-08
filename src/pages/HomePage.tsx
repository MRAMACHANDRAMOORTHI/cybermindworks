import { useState, useEffect } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { JobCard } from "../components/JobCard";
import { Job, JobFilters } from "../types/job";

export function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<JobFilters>({
    title: "",
    location: "",
    jobType: "",
    salaryRange: [50000, 80000] as [number, number],
  });

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      try {
        const jobsRef = collection(db, "jobs");
        
        // Start with a base query
        let q = query(jobsRef);
        
        // Add filters if they exist
        if (filters.title) {
          q = query(q, where("title", ">=", filters.title));
        }
        if (filters.location && filters.location !== "") {
          q = query(q, where("location", "==", filters.location));
        }
        if (filters.jobType && filters.jobType !== "") {
          q = query(q, where("jobType", "==", filters.jobType));
        }
        
        // Note: Firebase requires composite indexes for multiple inequality filters
        // So we'll apply salary filtering in JavaScript after fetching
        
        // Add ordering by createdAt to get most recent jobs first
        q = query(q, orderBy("createdAt", "desc"));
        
        const snapshot = await getDocs(q);
        let jobsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Job));
        
        // Apply salary range filtering in JavaScript
        if (filters.salaryRange) {
          jobsData = jobsData.filter(job => 
            job.salaryMax >= (filters.salaryRange?.[0] ?? Infinity) && 
            job.salaryMax <= (filters.salaryRange?.[1] ?? Infinity)
          );
        }
        
        setJobs(jobsData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [filters]);

  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      <div className="max-w-[1440px] mx-auto px-4">
        <Navbar />
        <SearchBar filters={filters} onFilterChange={setFilters} />
        
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <p className="text-lg">Loading jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="flex justify-center items-center py-16">
            <p className="text-lg">No jobs found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
            {jobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}