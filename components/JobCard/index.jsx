import React from 'react'
import dayjs from 'dayjs'

function JobCard(props) {
  // const skills = ["Javascript", "React", "Nodejs"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, 'day');
  return (
    <div className='mx-4 mb-4 md:mx-40'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-4 md:px-6 md:py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
          <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
          <div className='flex flex-wrap items-center gap-2'>
            {props.skills.map((skill, i) => (
              <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
            ))}
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0'>
          <p className='text-gray-500'> Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
          <a href={props.job_link}><button className='text-blue-500 border border-blue-500 font-semibold px-10 py-2 rounded-md'>Apply</button></a>
        </div>
      </div>
    </div>
  )
}

export default JobCard