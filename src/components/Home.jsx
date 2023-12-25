/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/img/logo.png";
import house from "../assets/img/house.png";
const Home = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[600px_840px]">
      <div className=" ml-[100px] bg-primary h-[812px] md:flex md:flex-col pl-8 pt-44 gap-4 hidden home relative ">
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
      <div className="h-[950px] flex flex-col pt-64 text-center pl-10 w-[80%] mx-auto ">
        <div className="flex justify-center md:hidden">
          <img src={logo} alt="Logo" />
        </div>

        <h2 className="md:hidden">Let's get Started</h2>
        <h2 className="hidden md:block">Provide your phone number</h2>
        <p className="mb-8">
          <small>
            Kindly use an active WhatsApp number, and we'll send a confirmation
            message to <br /> the provided number.
          </small>
        </p>

        <div className="w-full flex justify-center gap-2">
          <div className="border-2 border-dark">+356</div>
          <input
            type="text"
            className="border-2 border-dark rounded-lg w-4/6"
            placeholder="Phone Number"
          />
        </div>
        <div className="mt-10 mb-4">
          <button className="w-[95%] mx-auto flex justify-center bg-[#34333e] py-4 text-white">
            Continue
          </button>
        </div>
        <div className="">
          <button className="w-[95%] mx-auto flex justify-center text-[#34333e] py-4 border-2 border-dark-main">
            Have an Account? Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
