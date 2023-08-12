import React from "react";

const NavBar = () => {
  return (
    <div
      className="h-[70px] bg-white shadow flex items-center justify-center "
      style={{ width: "100%" }}
    >
      <div className="w-[1215px] h-[42px] relative">
        <div className="w-[585px] left-0 top-[-2px] absolute justify-center items-center gap-[43px] inline-flex">
          <img
            className="w-[150px] h-[45px]"
            src="https://via.placeholder.com/150x45"
          />
          <div className="w-[392px] h-8 relative flex-col justify-start items-start flex">
            <div className="absolute pointer-events-auto ..."></div>
            <input
              placeholder="Quick search ..."
              style={{
                width: 392,
                height: 32,
                background: "#F6F6F6",
                borderRadius: 5,
              }}
            />
          </div>
        </div>
        <div className="w-52 left-[1106px] top-[5px] absolute justify-end items-center gap-[27px] inline-flex">
          <div className="w-[19px] h-[19px] relative flex-row justify-between items-start flex">
            <div className="w-[17.81px] h-[17.81px] relative">Z</div>
          </div>
          <div className="w-[19px] h-[19px] relative flex-row justify-between items-start flex">
            <div className="w-[17.43px] h-[6.95px] relative">A</div>
          </div>
          <div className="w-[120px] h-8 relative flex-row justify-between items-start flex">
            <img
              className="w-8 h-8 rounded-full"
              src="https://via.placeholder.com/32x32"
            />
            <div>
              <div className="text-neutral-500 text-[13px] font-semibold">
                Blaise Defloo
              </div>
              <div className="w-[67px] text-neutral-400 text-[11px] font-medium">
                Administrator
              </div>
            </div>
          </div>
        </div>
        <div className="h-[17px] left-[616px] top-[13px] absolute justify-center items-start gap-[27px] inline-flex">
          <div className="text-zinc-400 text-sm font-semibold cursor-pointer">
            Dashboard
          </div>
          <div className="text-blue-500 text-sm font-semibold cursor-pointer">
            Trainings
          </div>
          <div className="text-zinc-400 text-sm font-semibold cursor-pointer">
            Users
          </div>
          <div className="w-[52px] h-[17px] relative flex-col justify-start items-start flex">
            <div className="text-zinc-400 text-sm font-semibold cursor-pointer">
              More
              <span>X</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
