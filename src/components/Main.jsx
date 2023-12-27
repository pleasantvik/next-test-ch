/* eslint-disable react/no-unescaped-entities */
import arrow from "../assets/img/back-arrow.png";
import dogImg from "../assets/img/dog.png";
import checkmark from "../assets/img/checkmark.png";
import eyeIcon from "../assets/img/eye.png";
import logoIcon from "../assets/img/logo-only.jpg";
import logo from "../assets/img/logo.png";
import gallery from "../assets/img/gallery.jpg";
import tick from "../assets/img/tick-circle.png";
import fly from "../assets/img/Sisyphus.png";
import cross from "../assets/img/plus.png";
import copy from "../assets/img/copy.png";
import user from "../assets/img/user.svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hidden mt-10 container mx-auto md:flex items-center justify-between px-9">
        <div>
          <img src={logo} alt="" />
        </div>
        <p className="flex items-center gap-2">
          <img src={user} alt="user icon" />
          <h3>James Blunt</h3>
        </p>
      </div>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="px-9 ">
          <header className="flex items-center justify-between pt-12 ">
            <div onClick={() => navigate("/")}>
              <img src={arrow} alt="" />
            </div>
            <div className="flex gap-2">
              <button className="w-full btn--plain rounded-md  flex items-center gap-2 justify-center text-[#34333e] py-2 px-4 ">
                <img src={copy} alt="eye" />
                <span>Save</span>
              </button>
              <button className="w-full  flex justify-center rounded-md bg-[#34333e] py-2 px-4 text-white">
                Button
              </button>
            </div>
          </header>
          <hr className="mt-2" />
          <div className="br-left pr-4 mt-2">
            <h1 className="font-bold text-2xl">Happy Dog</h1>
            <p className="text-sm mt-1 text-[#585858]">Madrid Spain</p>
            <figure className="hidden md:flex px-0 gap-4">
              <div>
                <img src={dogImg} alt="dog" className="" />
              </div>
              <div>
                <img src={dogImg} alt="dog" className="" />
              </div>
              <div>
                <img src={dogImg} alt="dog" className="" />
              </div>
              <div className="flex basis-[30%] items-center justify-center border-[#e8e8e8] border-2 rounded-3xl">
                + 5
              </div>
            </figure>
            <article className="md:hidden grid grid-cols-3 content-center  bg-[#fafafb] px-10 my-10">
              <p className="flex flex-col">
                <span className="text-primary-dark text-sm">Price</span>
                <span className="text-dark-light text-sm font-bold">$1200</span>
              </p>
              <p className="flex flex-col">
                <span className="text-primary-dark text-sm">Number</span>
                <span className="text-dark-light text-sm font-bold">3</span>
              </p>
              <p className="flex flex-col">
                <span className="text-primary-dark text-sm">Number</span>
                <span className="text-dark-light text-sm font-bold">1</span>
              </p>
            </article>
            <figure className="md:hidden flex px-0 gap-4 overflow-hidden">
              <img src={dogImg} alt="dog" className="w-[48%]" />
              <img src={dogImg} alt="dog" className="w-[48%]" />
              <img src={dogImg} alt="dog" className="w-[50%]" />
            </figure>
            <section>
              <h2 className="text-[#34433e] font-bold mt-4">Description</h2>
              <p className="text-[#585858] text-sm mb-4">
                The notion of dogs laughing is often associated with the
                infectious joy and playfulness they bring into our lives. While
                dogs don't express laughter in the same way humans do, their
                happiness manifests through various behaviors like wagging
                tails, barks, and exuberant play.
              </p>
            </section>
            <section>
              <h2 className="text-dark-light text-sm font-normal mb-2">
                Date Taken
              </h2>
              <p className="text-[#585858] text-sm">
                1 year (12 April 2023 - 11 April 2024)
              </p>
            </section>
            <article className="hidden md:grid grid-cols-3 content-center  bg-[#fafafb] px-10 mt-10">
              <p className="flex flex-col">
                <span className="text-primary-dark text-sm">Price</span>
                <span className="text-dark-light text-sm font-bold">$1200</span>
              </p>
              <p className="flex flex-col">
                <span className="text-primary-dark text-sm">Number</span>
                <span className="text-dark-light text-sm font-bold">3</span>
              </p>
              <p className="flex flex-col">
                <span className="text-primary-dark text-sm">Number</span>
                <span className="text-dark-light text-sm font-bold">1</span>
              </p>
            </article>
            <section className="mt-4">
              <h2 className="text-dark-light font-bold mb-2">Locations</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <p className="flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="hidden md:flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="hidden md:flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="hidden md:flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="hidden md:flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="hidden md:flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="hidden md:flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="hidden md:flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="hidden md:flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="hidden md:flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
                <p className="hidden md:flex items-center gap-1">
                  <img src={checkmark} alt="checkmark" />
                  <span>Spain</span>
                </p>
              </div>
            </section>
            <div className="hidden">
              <button className="w-full  flex justify-center bg-[#34333e] py-4 text-white">
                Continue
              </button>
            </div>
          </div>
        </div>
        <article className=" flex flex-col px-9">
          <header className="md:hidden flex items-center justify-between pt-12 mb-8 ">
            <div>
              <img src={arrow} alt="" />
            </div>
            <div className="flex">
              <button className="w-full  flex items-center gap-2 justify-center bg-[#34333e] py-2 px-4 text-white">
                <img src={eyeIcon} alt="eye" />
                <span>Preview</span>
              </button>
            </div>
          </header>

          <section className="md:mt-16 grid grid-cols-[48px_1fr] gap-2 grid-rows-2 bg-[#f9f9f9] h-20">
            <div className="">
              <img src={logoIcon} alt="logo" className="" />
            </div>
            <h3 className="text-dark-light font-bold">
              What do you want to generate
            </h3>
            <p className="col-start-2 text-primary-dark">
              You can provide a description
            </p>
          </section>
          <section className="grid grid-cols-[48px_1fr] gap-2 grid-rows-2 bg-[#f9f9f9] h-20 mt-4">
            <div className="h-8 w-8  px-4 py-2 bg-primary">
              <span>J</span>
            </div>
            <p>Pictures of Dogs laughing, with a short back story</p>
          </section>
          <section className="md:hidden grid grid-cols-[48px_1fr] gap-2 grid-rows-2 bg-[#f9f9f9] h-20">
            <div className="h-8 w-8  px-4 py-2 bg-primary">
              <span>J</span>
            </div>
            <div className="flex items-center justify-between border-2 border-[#999] rounded-lg w-[80%] mb-20 py-8 px-4 ">
              <img src={gallery} alt="gallery" />
              <div>
                <p>images.png</p>
                <p>200kB</p>
              </div>
              <img src={tick} alt="tick" />
            </div>
          </section>
          <section className="mt-auto w-full   flex items-center justify-between border-2 border-[#999] rounded-lg py-4">
            <img src={cross} alt="" />
            <input type="text" className=" input input-2 w-full" />
            <img src={fly} alt="" />
          </section>
        </article>
      </section>
    </div>
  );
};

export default Main;
