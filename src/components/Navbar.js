import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import { ImUser } from "react-icons/im";



function Navbar(){

    return(
        <div className="flex flex-col w-10/12 mx-auto gap-4 mt-4">
            {/* Top */}
            <div className="header flex items-center justify-between">
                <div className="text-xl font-extrabold text-[#CF2D2D] cursor-pointer heading-color">
                    BookUsNow
                </div>
                <div className="flex w-7/12 gap-4 search">
                    <button className="flex items-center bg-black text-white px-4 rounded-lg gap-1">
                        <div className=" text-2xl">
                            <IoReorderThree />
                        </div>
                        <div className=" text-sm font-semibold">
                            Categories
                        </div>
                    </button>
                    <div className="flex items-center w-full border rounded-lg justify-between px-4 py-2">
                        <input
                            type="text"
                            placeholder="DJI phantom"
                            className="w-full outline-none bo"
                        />
                        <div className="cursor-pointer">
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="cursor-pointer">
                        <FaHeart />
                    </div>
                    <div className="cursor-pointer user">
                    <ImUser />

                    </div>
                    <div className="cursor-pointer favourites">
                        Favourites
                    </div>
                    <button className="border px-2 py-1 rounded-md cursor-pointer">
                        Sign In
                    </button>
                </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center gap-[140px] cursor-gap">
                <div className="flex items-center gap-2 ">
                    <IoLocationSharp />
                    <div>
                        Mumbai, India
                    </div>
                    <MdKeyboardArrowRight />
                </div>
                <div className="flex items-center gap-6 menu-items">
                    <p className="cursor-pointer">Live shows</p>
                    <p className="cursor-pointer">Streams</p>
                    <p className="cursor-pointer">Movies</p>
                    <p className="cursor-pointer">Plays</p>
                    <p className="cursor-pointer">Events</p>
                    <p className="cursor-pointer">Sports</p>
                    <p className="cursor-pointer">Activities</p>
                </div>
            </div>
        </div>
    );


}

export default Navbar;