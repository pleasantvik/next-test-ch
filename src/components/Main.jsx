/* eslint-disable react/no-unescaped-entities */
import arrow from "../assets/img/back-arrow.png";
import dogImg from "../assets/img/dog.png";
import checkmark from "../assets/img/checkmark.png";
import eyeIcon from "../assets/img/eye.png";
import logoIcon from "../assets/img/logo-only.jpg";
import gallery from "../assets/img/gallery.jpg";
import tick from "../assets/img/tick-circle.png";
import fly from "../assets/img/Sisyphus.png";
import cross from "../assets/img/plus.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="px-9">
        <header className="flex items-center justify-between pt-12 ">
          <div onClick={() => navigate("/")}>
            <img src={arrow} alt="" />
          </div>
          <div className="flex">
            <button className=" text-[#34333e] py-2 px-4   border-dark-main">
              Save
            </button>
            <button className="w-full  flex justify-center bg-[#34333e] py-2 px-4 text-white">
              Continue
            </button>
          </div>
        </header>
        <h1>Happy Dog</h1>
        <p>Madrid Spain</p>

        <article className="grid grid-cols-3">
          <p className="flex flex-col">
            <span>Price</span>
            <span>$1200</span>
          </p>
          <p className="flex flex-col">
            <span>Number</span>
            <span>3</span>
          </p>
          <p className="flex flex-col">
            <span>Number</span>
            <span>3</span>
          </p>
        </article>
        <figure className="flex px-0 gap-4 overflow-hidden">
          <img src={dogImg} alt="dog" className="w-[48%]" />
          <img src={dogImg} alt="dog" className="w-[48%]" />
          <img src={dogImg} alt="dog" className="w-[50%]" />
        </figure>

        <section>
          <h2>Description</h2>
          <p>
            The notion of dogs laughing is often associated with the infectious
            joy and playfulness they bring into our lives. While dogs don't
            express laughter in the same way humans do, their happiness
            manifests through various behaviors like wagging tails, barks, and
            exuberant play.
          </p>
        </section>

        <section>
          <h2>Date Taken</h2>
          <p>1 year (12 April 2023 - 11 April 2024)</p>
        </section>
        <section>
          <h2>Locations</h2>
          <div className="grid grid-cols-2">
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
          </div>
        </section>
        <div>
          <button className="w-full  flex justify-center bg-[#34333e] py-4 text-white">
            Continue
          </button>
        </div>
      </div>
      <article className="px-9">
        <header className="flex items-center justify-between pt-12 ">
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

        <section className="grid grid-cols-[48px_1fr] gap-2 grid-rows-2 bg-[#f9f9f9] h-20">
          <div className="">
            <img
              src={logoIcon}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h3>What do you want to generate</h3>
          <p className="col-start-2">You can provide a description</p>
        </section>
        <section className="grid grid-cols-[48px_1fr] gap-2 grid-rows-2 bg-[#f9f9f9] h-20">
          <div className="h-8 w-8  px-4 py-2 bg-primary">
            <span>J</span>
          </div>
          <p>Pictures of Dogs laughing, with a short back story</p>
        </section>
        <section className="grid grid-cols-[48px_1fr] gap-2 grid-rows-2 bg-[#f9f9f9] h-20">
          <div className="h-8 w-8  px-4 py-2 bg-primary">
            <span>J</span>
          </div>
          <div className="flex items-center justify-between border-2 border-[#999] rounded-lg w-[60%] py-8 ">
            <img src={gallery} alt="gallery" />
            <div>
              <p>images.png</p>
              <p>200kB</p>
            </div>
            <img src={tick} alt="tick" />
          </div>
        </section>
        <section className="flex items-center justify-between border-2 border-[#999] rounded-lg py-4">
          <img src={cross} alt="" />
          <input
            type="text"
            className=" placeholder:text-slate-400 h-[54px] w-[73px] rounded-md border bg-transparent px-4 text-center focus:!border-primary focus:!outline-none focus:!ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <img src={fly} alt="" />
        </section>
      </article>
    </section>
  );
};

export default Main;
