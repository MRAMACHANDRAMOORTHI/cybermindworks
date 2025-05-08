// export interface Job {
//   postedTime: string;
//   experience: string;
//   id?: string;
//   title: string;
//   company: string;
//   location: string;
//   jobType: string;
//   salaryMin: number;
//   salaryMax: number;
//   description: string;
//   deadline: string;
//   createdAt: string;
// }

// export interface JobFilters {
//   title?: string;
//   location?: string;
//   jobType?: string;
//   salaryRange?: [number, number];
// }

// types/job.ts

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