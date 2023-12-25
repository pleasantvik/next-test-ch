/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/img/logo.png";
import house from "../assets/img/house.png";
const Home = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[600px_840px]">
      <div className=" ml-[100px] bg-primary h-[892px] md:flex md:flex-col pl-8 pt-44 gap-4 hidden home relative ">
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
      <div className="h-[950px] flex flex-col pt-64 text-center">
        <h2>Provide your phone number</h2>
        <p>
          <small>
            Kindly use an active WhatsApp number, and we'll send a confirmation
            message to the provided number.
          </small>
        </p>
      </div>
    </section>
  );
};

export default Home;
