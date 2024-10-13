import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobCard from './components/JobCard'
import JobData from './JobDummyData'
import {collection,query,where,getDocs,orderBy} from "firebase/firestore"
import { db } from './Firebase.config'

function App() {
  const [jobs,setJobs] = useState([])
  const [customSearch,setCustomSearch]=useState(false)
  const fetchJobs=async()=>{
    setCustomSearch(false);
    const tempJobs=[]
    const jobsRef=query(collection(db,'Jobs'));
    const q=query(jobsRef,orderBy("postedOn","desc"))
    const req=await getDocs(q);
    req.forEach((job)=>{
      //doc.data() is never undefined for query doc snapshots
      tempJobs.push({
        ...job.data(),
        id:job.id,
        postedOn:job.data().postedOn.toDate()
      })
    })
    setJobs(tempJobs);
  }
  const fetchJobsCustom=async(jobCriteria)=>{
    setCustomSearch(true);
    const tempJobs=[]
    const jobsRef=query(collection(db,'Jobs'));
    const q=query(jobsRef,where("type","==",jobCriteria.type) ,where("title","==",jobCriteria.title),where("location","==",jobCriteria.location),where("experience","==",jobCriteria.experience),orderBy("postedOn","desc"))
    const req=await getDocs(q);
    req.forEach((job)=>{
      //doc.data() is never undefined for query doc snapshots
      tempJobs.push({
        ...job.data(),
        id:job.id,
        postedOn:job.data().postedOn.toDate()
      })
    })
    setJobs(tempJobs);
   
  }
  useEffect(()=>{
    fetchJobs()
  },[]);
  function clearFilters(){
    fetchJobs();
    setCustomSearch(false);
  }

  return (
    <>
      <div>
      
      <Navbar/>
      <Header/>
      <SearchBar fetchJobsCustom={fetchJobsCustom} clearFilters={clearFilters}/>
      
      {
        jobs.map((job)=>(
          <JobCard key={job.id}{...job}/>
        ))
      }
      
      </div>
     
    </>
  )
}

export default App
