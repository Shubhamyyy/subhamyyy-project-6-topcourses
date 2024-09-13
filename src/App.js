import logo from './logo.svg';
import './App.css';
import './input.css';
import Navbar from './component/Navbar';
import Filter from './component/Filter';
import Cards from './component/Cards';
import data from './data';
import { apiUrl,filterData } from './data';
import {toast} from "react-toastify";
import { useState,useEffect } from 'react';
import Spinner from './component/Spinner';;


function App() {

  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);



  async function fetchdata(){
    setLoading(true);
    try {
      const res=await fetch(apiUrl);
      const output=await res.json();
      //save data into a variable
      setCourses(output.data)
    } 
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  }, [])
  


  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar></Navbar>
      </div>
      <div className='bg-bgDark2'>
        <div>
        <Filter data={filterData}  category={category} setCategory={setCategory}></Filter>
        </div>
        <div className='"w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center item-center min-h-[50vh]'>
          {
            loading ? (<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
