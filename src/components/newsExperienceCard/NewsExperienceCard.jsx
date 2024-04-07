/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
const NewsExperienceCard = ({ news, experience }) => {
  const { title, image, author, postDate } = news || experience;
  return (
    <div className="flex gap-4 xl:gap-10 items-center border border-[#2578B4]">
      <div className="w-48 md:h-36 relative">
        <img className="w-full h-full" src={image} alt="" />
        <div className="w-2 md:w-4  bgColor absolute top-0 bottom-0 left-0"></div>
        <div className="w-0 h-0 border-t-8 md:border-t-[11px] border-transparent border-r-[12px] md:border-r-[18px] border-r-[#2578B4] border-b-8 md:border-b-[11px] border-b-transparent absolute top-1/2 -left-2  md:-left-4 -translate-y-1/2"></div>
      </div>
      <div className="">
        <div className="flex gap-2">
          <p className="text-xs md:text-sm text-[#636363] border-r pr-2">
            Posted: {postDate}
          </p>
          <p className="text-sm text-[#636363] hidden md:block">
            Author : {author}
          </p>
        </div>
        <h3 className="text-sm  md:text-xl text-black font-bold">{title}</h3>
        <p
          onClick={() =>
            Swal.fire({
              title: "Work in progress!",
              text: "try later",
              icon: "warning",
            })
          }
          className="text-xs md:text-[16px] text-[#2578B4] cursor-pointer hover:text-black"
        >
          Read More
        </p>
      </div>
    </div>
  );
};

export default NewsExperienceCard;
