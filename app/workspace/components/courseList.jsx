"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  return (
    <div className='p-5'>
      <h2 className='text-2xl font-bold'>Course List</h2>
      {courseList.length === 0 ? 
      <div className='flex flex-col items-center justify-center mt-10 p-10 border rounded-xl '>
        <Image src="/file.svg" alt="empty" width={100} height={100}></Image>
        <p className='text-gray-500 mt-5'>No courses available</p>
        <button className='mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>+ Create Your First Course</button>
      </div>:
      <div>
        List of courses
      </div> }
    </div>
  )
}

export default CourseList