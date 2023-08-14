import React from "react";
import NavBar from "../Sections/NavBar";
import Section2 from "../Sections/Section2";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoDiceOutline, IoReloadCircleSharp } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import "../style.css";
import Section1 from "../Sections/Section1";
import CustomCard from "../Components/CustomCard";
import CustomCardSec from "../Components/CustomCardSec";

const Home = () => {
  const items = [
    <CustomCard
      icon={<IoDiceOutline color="#2A5F9E" size={40} />}
      title="Random questions"
      number={10}
      unit={""}
    />,
    <CustomCard
      icon={<MdOutlineTimer color="#FF964D" size={40} />}
      title="Time per question"
      number={45}
      unit={"s"}
    />,
    <CustomCard
      icon={<AiFillCheckCircle color="#47CA5B" size={40} />}
      title="Passing score"
      number={80}
      unit={"%"}
    />,
    <CustomCardSec />,
    <CustomCard
      icon={<RiTimeLine color="#8C2CAE" size={40} />}
      title="Time Expected"
      number={30}
      unit={"min"}
    />,
    <CustomCard
      icon={<IoReloadCircleSharp color="#B5B5B5" size={40} />}
      title="Attemps"
      number={3}
      unit={""}
    />,
  ];
  return (
    <>
      <NavBar />

      <div className="flex flex-col gap-4 bg-[#f8fafd]">
        <div className="sm:container mx-auto">
          <div className="w-full h-[37px] flex-row justify-between items-center flex mt-8">
            <div className="text-neutral-500 text-lg font-semibold">
              Edit Training “Working At Height”
            </div>
            <div className="flex-row gap-[15px] flex justify-between items-center">
              <div className="text-zinc-400 text-[13px] font-bold pt-2 cursor-pointer">
                Cancel
              </div>
              <div className="w-[147px] h-[35px] relative">
                <div className="w-[147px] h-[35px] left-0 top-0 absolute bg-orange-500 rounded-[5px]" />
                <div className="left-[28px] top-[8px] absolute text-white text-sm font-bold cursor-pointer">
                  Update & Save
                </div>
              </div>
            </div>
          </div>
          <Section1 />
          <div className="w-full rounded-[5px] shadow p-4 flex flex-col gap-4 bg-white mt-4">
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-zinc-600 text-[13px] font-semibold">
                Training quiz
              </span>
              <p className="text-zinc-400 text-[11px] font-medium">
                Here you can manage the questions by clicking on the “Add
                Question” button and choose from the available types of
                question. You can add up to 100 questions.
              </p>
            </div>
            <div className="w-full h-[0px] border border-gray-200 mb-2"></div>

            <Section2 />
            <Section2 />
            <button className="w-full btn h-10 bg-sky-100 rounded-[5px] p-1">
              <span className="text-blue-500 text-sm font-bold leading-[17px]">
                Add Question{" "}
              </span>
              <span className="text-blue-500 text-base font-bold leading-[17px]">
                +
              </span>
            </button>
          </div>
          <div className=" carousel-container w-full h-full rounded-[5px] p-4 flex flex-row gap-4 mt-2">
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={{
                0: { items: 2 }, // On small screens, show 1 item
                768: { items: 4 }, // On medium screens, show 2 items
                1024: { items: 6 }, // On large screens, show 3 items
              }}
              infinite
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
