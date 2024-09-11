import React, { useState } from 'react'


function Searchbar(props) {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: ""
  })
  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  console.log(jobCriteria)

  const search = async() => {
    await props.fetchJobsCustom(jobCriteria);
  }

  return (
    <div className='flex flex-col md:flex-row justify-center gap-4 my-10 px-4 md:px-10'>
      <select 
      defaultValue="ios Developer"
        onChange={handleChange} 
        name='title' 
        value={jobCriteria.title} 
        className='w-full md:w-64 py-3 pl-4 bg-zinc-200 rounded-md font-semibold'
      >
        <option value="" disabled hidden selected>Job Role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <select 
        onChange={handleChange} 
        name='type' 
        value={jobCriteria.type} 
        className='w-full md:w-64 py-3 pl-4 bg-zinc-200 rounded-md font-semibold'
      >
        <option value="" disabled hidden selected>Job Type</option>
        <option value="Full time">Full time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select 
        onChange={handleChange} 
        name='location' 
        value={jobCriteria.location} 
        className='w-full md:w-64 py-3 pl-4 bg-zinc-200 rounded-md font-semibold'
      >
        <option value="" disabled hidden selected>Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select 
        onChange={handleChange} 
        name='experience' 
        value={jobCriteria.experience} 
        className='w-full md:w-64 py-3 pl-4 bg-zinc-200 rounded-md font-semibold'
      >
        <option value="" disabled hidden selected>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      
      <button 
        onClick={search} 
        className='w-full md:w-64 rounded-md font-bold py-3 bg-blue-500 text-white'
      >
        Search
      </button>
    </div>
  )
}

export default Searchbar