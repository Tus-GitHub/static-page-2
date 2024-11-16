import { PiSquareHalfFill } from "react-icons/pi";
import { LuFolderSearch } from "react-icons/lu";
import { LuBellRing } from "react-icons/lu";

export default function Navbar() {
    return (
        <div className="min-h-24 flex gap-0.5 border-t-2 border-lgrey border-b-2">
            <div className="border-r-2 bg-lblack border-lgrey">
                <div className="sm:text-xs md:text-base flex gap-x-6 mt-3">
                    <p className="text-yellow-400 ml-8 mt-4">LOGO</p>
                    <div className="gap-y-1 mr-2 mt-2">
                        <p className="text-lwhite font-bold">Finomic</p>
                        <div className="text-lslate md:text-sm mt-1 flex gap-x-1"><div>Financial</div><div> Assistant</div></div>
                    </div>
                    <PiSquareHalfFill className="md:text-4xl sm:text-sm text-lgrey-2 ml-12 mr-6 mt-4"/>
                </div>
            </div>
            <div className="bg-lblack flex w-full justify-between">
                <div className="flex items-center ml-6">
                    <img 
                        src="\images.jpg"
                        alt="blank image" 
                        className=" w-10 h-10 rounded-full mr-4" 
                    />
                    <div>
                        <p className="text-lwhite font-bold">Syarah Adefa</p>
                        <p className="text-lslate font-semibold">Hello, Welcome back!</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="bg-lgrey-3 flex gap-2 p-2 rounded-lg h-10 mr-4">
                        <LuFolderSearch className="text-lgrey-4 text-xl mt-1"/>
                        <p className="text-lgrey-4 font-semibold">Search or type command</p>
                        <div className="font-bold text-lgrey-4 bg-lblack rounded-md px-2 h-6 ml-20">F</div>
                    </div>
                    <div className="border-lgrey-3 mr-2 border-2 p-2 rounded-xl flex items-center gap-2 sm:text-sm">
                        <LuBellRing className="bg-inherit text-white"/>
                        <p className="bg-lsky px-2 py-0.5 rounded-md text-sm">2 New</p>
                    </div>
                </div>
            </div>
        </div>
    );
}