/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/img/logo.png";
import house from "../assets/img/house.png";
import chevron from "../assets/img/downarrow.png";
import flag from "../assets/img/flag.png";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="ml-[100px] bg-primary h-[812px] md:flex md:flex-col pl-8 pt-44 gap-4 hidden home relative">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="text-dark font-bold break-words text-3xl leading-10">
          Revolutionize your Customer Service Game
        </h1>
        <p className="text-dark-main">
          Connect authentically with customers through natural, flowing
          conversations.
        </p>
        <div className="absolute bottom-0 right-0">
          <img src={house} alt="house" className="w-full object-cover" />
        </div>
      </div>
      <div className="h-[950px] flex flex-col pt-20 md:pt-64 text-center  w-[80%] mx-auto ">
        <div className="flex justify-center md:hidden mb-10">
          <img src={logo} alt="Logo" className="w-[20%]" />
        </div>

        <h2 className="text-2xl font-semibold md:hidden">Let's get Started</h2>
        <h2 className="hidden md:block font-bold text-2xl">
          Provide your phone number
        </h2>
        <p className="mb-8 px-14">
          <small className="text-lg text-[#585858] poppins">
            Kindly use an active WhatsApp number, and we'll send a confirmation
            message to the provided number.
          </small>
        </p>

        <div className="w-[80%] mx-auto flex items-center justify-center gap-2">
          {/* <select name="" className="text-center rounded-md " id="">
            <option
              className="flex items-center justify-center px-4"
              value="+234"
            >
              +234
            </option>
          </select> */}
          <div className="flex items-center select rounded-md  justify-center gap-2">
            <img className="w-full" src={flag} alt="" />
            <span>+356</span>
            <img className="w-full" src={chevron} alt="" />
          </div>
          <input
            type="text"
            // className="border-2 border-dark rounded-lg w-4/6"
            // className=" w-full placeholder:text-slate-400 h-[54px]  rounded-md border-2 focus:border-2 bg-transparent px-4 text-center focus:!border-primary focus:!outline-primary focus:!ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            className="w-full rounded-md input"
            placeholder="Phone Number"
          />
        </div>
        <div className="mt-10 mb-4">
          <button
            onClick={() => navigate("/main")}
            className="w-[80%] mx-auto flex justify-center bg-[#34333e] py-4 text-white"
          >
            Continue
          </button>
        </div>
        <div className="">
          <button
            onClick={() => navigate("/main")}
            className="w-[80%] mx-auto flex justify-center text-[#34333e] py-4 border-2 border-dark-main"
          >
            Have an Account? Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
