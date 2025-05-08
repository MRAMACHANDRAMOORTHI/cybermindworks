export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  deadline: string;
  createdAt: string;
  experience?: string;
  postedTime?: string;
}

export interface JobFilters {
  title: string;
  location: string;
  jobType: string;
  salaryRange: [number, number];
}