import { useEffect, useState } from "react";
import NewsExperienceCard from "../newsExperienceCard/NewsExperienceCard";
import Swal  from 'sweetalert2';

const NewsExperience = () => {
  const [news, setNews] = useState([]);
  const [experience, setExperience] = useState([]);



  useEffect(()=>{
    fetch('https://x-grid-server.vercel.app/experience')
    .then(res=>res.json())
    .then(data=>{
      setExperience(data);
    })
  },[])
  useEffect(()=>{
    fetch('https://x-grid-server.vercel.app/news')
    .then(res=>res.json())
    .then(data=>{
      setNews(data);
    })
  },[])


  return (
    <div className="2xl:px-48 xl:px-32 md:px-20 px-10 secondary-font xl:flex justify-between gap-36 my-20 xl:space-y-0 space-y-10">
      <div className="w-full">
        <h2 className="primary-font text-[#2578B4] text-xl md:text-3xl mb-3">
          XGRiD News
        </h2>
        <div className="space-y-4">
          {
            news.map(n=><NewsExperienceCard key={n._id} news={n}></NewsExperienceCard>)
          }
        </div>
        <h2  onClick={() =>
            Swal.fire({
              title: "Work in progress!",
              text: "try later",
              icon: "warning",
            })} className="text-sm text-[#2578B4] font-bold mt-3 md:mt-7 cursor-pointer hover:text-black inline-block">Read More</h2>
      </div>
      <div className="w-full">
        <h2 className="primary-font text-[#2578B4] text-xl md:text-3xl mb-3">
          XGRiD Experiences
        </h2>
        <div className="space-y-4">
        {
            experience.map(n=><NewsExperienceCard key={n._id} experience={n}></NewsExperienceCard>)
          }
        </div>
        <h2 onClick={() =>
            Swal.fire({
              title: "Work in progress!",
              text: "try later",
              icon: "warning",
            })} className="text-sm text-[#2578B4] font-bold mt-3 md:mt-7 cursor-pointer hover:text-black inline-block">Read All</h2>
      </div>
    </div>
  );
};

export default NewsExperience;
