import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Navbar } from "../components/Navbar";
import { Job } from "../types/job";

export function CreateJobPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [job, setJob] = useState<Partial<Job>>({
    title: "",
    company: "",
    location: "onsite",
    jobType: "full-time",
    salaryMin: 50000,
    salaryMax: 80000,
    description: "",
    deadline: "",
    experience: "1-3 yr Exp"
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Form validation
    if (!job.title || !job.company || !job.location || !job.description) {
      alert("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Calculate a human-readable posted time
      const postedTime = "24h Ago";
      
      await addDoc(collection(db, "jobs"), {
        ...job,
        postedTime,
        createdAt: new Date().toISOString(),
      });
      
      navigate("/");
    } catch (error) {
      console.error("Error creating job:", error);
      alert("Failed to create job. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      <div className="max-w-[1440px] mx-auto px-4">
        <Navbar />
        <div className="max-w-[800px] mx-auto mt-8 bg-white rounded-xl p-4 md:p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-8">Create Job Opening</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title*</label>
                <input
                  type="text"
                  value={job.title}
                  onChange={(e) => setJob({ ...job, title: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Full Stack Developer"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                <input
                  type="text"
                  value={job.company}
                  onChange={(e) => setJob({ ...job, company: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Amazon, Tesla, Swiggy"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
                <select
                  value={job.location}
                  onChange={(e) => setJob({ ...job, location: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                >
                  <option value="onsite">Onsite</option>
                  <option value="remote">Remote</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                <select
                  value={job.jobType}
                  onChange={(e) => setJob({ ...job, jobType: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                <select
                  value={job.experience}
                  onChange={(e) => setJob({ ...job, experience: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="1-3 yr Exp">1-3 yr Exp</option>
                  <option value="3-5 yr Exp">3-5 yr Exp</option>
                  <option value="5+ yr Exp">5+ yr Exp</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
                <input
                  type="date"
                  value={job.deadline}
                  onChange={(e) => setJob({ ...job, deadline: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Salary (₹)</label>
                <input
                  type="number"
                  value={job.salaryMin}
                  onChange={(e) => setJob({ ...job, salaryMin: parseInt(e.target.value) })}
                  className="w-full p-3 border rounded-lg"
                  placeholder="₹20,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Salary (₹)</label>
                <input
                  type="number"
                  value={job.salaryMax}
                  onChange={(e) => setJob({ ...job, salaryMax: parseInt(e.target.value) })}
                  className="w-full p-3 border rounded-lg"
                  placeholder="₹40,000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Description*</label>
              <textarea
                value={job.description}
                onChange={(e) => setJob({ ...job, description: e.target.value })}
                className="w-full p-3 border rounded-lg h-32"
                placeholder="Please share a description to let the candidate know more about the job role"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-6 py-2 border border-gray-300 rounded-lg font-bold hover:bg-gray-50"
              >
                Cancel
              </button>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-lg font-bold hover:bg-gray-50"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-[#00AAFF] text-white rounded-lg font-bold hover:bg-[#0095e0] transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? "Publishing..." : "Publish"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}