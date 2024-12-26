import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      
      <div className="relative w-full h-screen overflow-hidden">
        {/* Image grid */}
        <div className="absolute inset-0 grid w-full h-full grid-cols-3 overflow-hidden opacity-70">
          {/* First Image */}
          <div className="relative overflow-hidden">
            <img
              src={img1}
              alt="Image 1"
              className="absolute inset-0 object-cover w-full h-full scale-[1.25]"
            />
          </div>

          {/* Second Image */}
          <div className="relative overflow-hidden">
            <img
              src={img3}
              alt="Image 2"
              className="absolute inset-0 object-cover w-full h-full scale-[1.25]"
            />
          </div>

          {/* Third Image */}
          <div className="relative overflow-hidden">
            <img
              src={img2}
              alt="Image 3"
              className="absolute inset-0 object-cover w-full h-full scale-[1.25]"
            />
          </div>
        </div>

        {/* Navbar stays at the top */}
        <Navbar />

        {/* Centered content */}
        <div className="absolute inset-0 flex items-center justify-center pb-10 bg-transparent">
          <div className="flex flex-col justify-center items-center mt-28 text-center text-white bg-gray-400 bg-opacity-60 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[75vh] rounded-3xl">
            {/* Logo centered at the top */}
            <img
              src={logo}
              alt="Logo"
              className="mb-8 w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44"
            />

            {/* Text and Buttons centered below the logo */}
            <div className="px-6 py-4 mx-auto text-center md:px-16 lg:px-20 xl:px-24">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-6xl font-bold max-w-3xl leading-snug">
                <p>Official Media Grid of Student&rsquo;s Union,</p>
                <p>Faculty of Technological Studies,</p>
                <p>University of Vavuniya</p>
              </h2>
              <div className="mt-8 space-x-6 sm:mt-10 lg:mt-12 xl:mt-16">
                <a
                  href=""
                  className="items-center px-8 py-5 space-x-2 font-bold text-black bg-gray-100 shadow-md cursor-pointer rounded-xl shadow-red-500 hover:bg-white"
                >
                  CHECK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
