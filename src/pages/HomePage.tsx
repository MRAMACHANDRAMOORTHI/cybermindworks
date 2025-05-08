import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { JobCard } from "../components/JobCard";
import { Job, JobFilters } from "../types/job";

export function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<JobFilters>({
    title: "",
    location: "",
    jobType: "",
    salaryRange: [50000, 80000] as [number, number],
  });

  // Fetch all jobs once on component mount
  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      try {
        const jobsRef = collection(db, "jobs");
        const q = query(jobsRef, orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        
        const jobsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Job));
        
        setJobs(jobsData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  // Apply filters client-side whenever filters or jobs change
  useEffect(() => {
    if (jobs.length === 0) return;

    let result = [...jobs];
    
    // Filter by title
    if (filters.title.trim()) {
      const titleLower = filters.title.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(titleLower)
      );
    }
    
    // Filter by location
    if (filters.location) {
      result = result.filter(job => job.location === filters.location);
    }
    
    // Filter by job type
    if (filters.jobType) {
      result = result.filter(job => job.jobType === filters.jobType);
    }
    
    // Filter by salary range
    if (filters.salaryRange) {
      result = result.filter(job => 
        job.salaryMin >= filters.salaryRange[0] && 
        job.salaryMin <= filters.salaryRange[1]
      );
    }
    
    setFilteredJobs(result);
  }, [jobs, filters]);

  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      <div className="max-w-[1440px] mx-auto px-4">
        <Navbar />
        <SearchBar filters={filters} onFilterChange={setFilters} />
        
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <p className="text-lg">Loading jobs...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="flex justify-center items-center py-16">
            <p className="text-lg">No jobs found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
            {filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}