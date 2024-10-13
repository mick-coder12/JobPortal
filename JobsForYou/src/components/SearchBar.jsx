import React from 'react'
import {useState} from 'react'

const SearchBar = (props) => {
    const[jobCriteria,setJobCriteria]=useState({
        title:"",
        location:"",
        experience:"",
        type:""
    })
    function changeHandler(e){
        setJobCriteria((prev)=>({
            ...prev,
            [e.target.name]:e.target.value

        }))
    }
    
    const search = async () => {
        try {
            await props.fetchJobsCustom(jobCriteria); 
        } catch (error) {
            console.log("Error during search:", error);
        }
    };
    const handleClearFilters = () =>{
        setJobCriteria({title:"",
        location:"",
        experience:"",
        type:""
        });
        props.clearFilters();
    };
  return (
    <div className=' flex gap-4 my-10 justify-center px-10'>
        <select name="title" value={jobCriteria.title} onChange={changeHandler} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
            <option value="" disabled hidden selected>Job Role</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Developer Advocate">Developer Advocate</option>
        </select>
        <select name="type"value={jobCriteria.type} onChange={changeHandler} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
            <option value="" disabled hidden selected>Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
        </select>
        <select name="location"  value={jobCriteria.location}  onChange={changeHandler} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
            <option value="" disabled hidden selected>Location</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
            
        </select>
        <select name="experience" value={jobCriteria.experience} onChange={changeHandler} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
            <option value="" disabled hidden selected>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
            
        </select>
        <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
        <button onClick={handleClearFilters} className='w-64 bg-gray-500 text-white font-bold py-3 rounded-md'>Clear Filters</button>
    </div>
  )
}

export default SearchBar