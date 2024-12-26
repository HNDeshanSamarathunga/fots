import { PhoneIcon } from '@heroicons/react/24/solid'; // Import PhoneIcon from Heroicons
import logo from '../assets/Mask group.png';

const Navbar = () => {
    return (
        <div>
            <div className='absolute top-0 left-0 z-10 w-full'>
                <div className='container flex items-center justify-between px-6 py-4 mx-auto md:px-20 lg:px-32'>
                    <img src={logo} alt="" className='h-16 sm:h-full ' />
                    <ul className='hidden px-40 py-5 font-medium text-black shadow-md bg-gray-50 md:flex gap-7 rounded-xl shadow-red-500'>
                        <a href="#Header" className="cursor-pointer hover:text-red-500">Home</a>
                        <a href="#About" className="cursor-pointer hover:text-red-500">About</a>
                        <a href="#Projects" className="cursor-pointer hover:text-red-500">Services</a>
                        <a href="#Testimonials" className="cursor-pointer hover:text-red-500">News</a>
                        <a href="#Testimonials" className="cursor-pointer hover:text-red-500">Blog</a>
                    </ul>
                    <button className="items-center hidden px-8 py-5 space-x-2 bg-gray-100 shadow-md cursor-pointer md:flex rounded-xl shadow-red-500 hover:bg-white">
                        <PhoneIcon className="w-6 h-6 text-black hover:text-red-500" /> {/* Phone icon */}
                        <span className="font-medium hover:text-red-500">Contact Us</span>
                    </button>


                </div>
            </div>
        </div>
    );
}

export default Navbar;
