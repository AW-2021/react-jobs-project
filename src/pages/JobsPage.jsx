import JobListings from "../components/JobListings";
import jobs from "../jobs.json";

const JobsPage = () => {
  const totalJobs = jobs.length;

  return (
    <section className='bg-blue-50 px-4 py-6'>
      <JobListings isHome={false} />
    </section>
  )
}

export default JobsPage;