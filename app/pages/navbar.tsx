import { PiSquareHalfFill } from "react-icons/pi";
import { LuFolderSearch } from "react-icons/lu";
import { LuBellRing } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { RiFolderReceivedLine } from "react-icons/ri";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbBinaryTree } from "react-icons/tb";
import { TbHexagonLetterO } from "react-icons/tb";
import { PiCrownSimple } from "react-icons/pi";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="min-h-20 flex gap-0.5 border-t-2 border-lgrey border-b-4">
        <div className="border-r-4 bg-lblack border-lgrey max-w-80">
          <div className="sm:text-xs md:text-base flex gap-x-6 mt-3">
            <p className="text-yellow-400 ml-3 mt-4">LOGO</p>
            <div className="gap-y-1 mt-2">
              <p className="text-lwhite font-bold">Finomic</p>
              <div className="text-lslate md:text-sm mt-1 flex gap-x-1">
                <div>Financial</div>
                <div> Assistant</div>
              </div>
            </div>
            <PiSquareHalfFill className="md:text-4xl sm:text-sm text-lgrey-2 ml-12 mr-6 mt-4"/>
          </div>
        </div>
        <div className="bg-lblack flex w-full justify-between">
          <div className="flex items-center ml-6">
            <img 
              src="\images.jpg"
              alt="blank image" 
              className="w-10 h-10 rounded-full mr-4" 
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
      <div className="flex flex-row flex-1">
        <div className="bg-lblack max-w-xs h-full overflow-y-auto flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <div className="ml-4 flex flex-col gap-3 mb-3">
              <p className="text-lgrey-2 font-mono text-base mt-4">MENU</p>
              <div>
                <div className="flex items-center justify-between bg-lsky-1 mr-8 rounded-lg h-10">
                  <div className="flex items-center">
                    <BsBoxSeam className="ml-2 mr-3 mt-1 text-lg"/>
                    <p className="font-semibold">Dashboard</p>
                  </div>
                  <div>
                    <MdKeyboardArrowRight className="mr-3 text-2xl"/>
                  </div>
                </div>
                <div className="flex items-center bg-inherit mr-8 rounded-lg h-10 mt-1">
                  <GrTransaction className="ml-2 mr-3 mt-1 text-lg text-lgrey-5"/>
                  <p className="font-semibold text-lgrey-5">Transactions</p>
                </div>
                <div className="flex items-center bg-inherit mr-8 rounded-lg h-10 mt-1">
                  <GoGoal className="ml-2 mr-3 mt-1 text-lg text-lgrey-5"/>
                  <p className="font-semibold text-lgrey-5">My Goals</p>
                </div>
                <div className="flex items-center bg-inherit mr-8 rounded-lg h-10 mt-1">
                  <RiFolderReceivedLine className="ml-2 mr-3 mt-1 text-lg text-lgrey-5"/>
                  <p className="font-semibold text-lgrey-5">Investment</p>
                </div>
                <div className="flex items-center bg-inherit mr-8 rounded-lg h-10 mt-1">
                  <LiaMoneyBillSolid className="ml-2 mr-3 mt-1 text-lg text-lgrey-5"/>
                  <p className="font-semibold text-lgrey-5">Bills and Payment</p>
                </div>
                <div className="flex items-center bg-inherit mr-8 rounded-lg h-10 mt-1">
                  <SiSimpleanalytics className="ml-2 mr-3 mt-1 text-lg text-lgrey-5"/>
                  <p className="font-semibold text-lgrey-5">Analytics and Reports</p>
                </div>
              </div>
            </div>
            <div className="ml-4 flex flex-col gap-3 border-t-2 border-lgrey-4">
              <p className="text-lgrey-2 font-mono text-base mt-4">Support</p>
              <div>
                <div className="flex items-center bg-inherit mr-8 rounded-lg h-10 mt-1">
                  <AiOutlineQuestionCircle className="ml-2 mr-3 mt-1 text-lg text-lgrey-5"/>
                  <p className="font-semibold text-lgrey-5">Helps</p>
                </div>
                <div className="flex items-center bg-inherit mr-8 rounded-lg h-10 mt-1">
                  <TbBinaryTree className="ml-2 mr-3 mt-1 text-lg text-lgrey-5"/>
                  <p className="font-semibold text-lgrey-5">Integration</p>
                </div>
                <div className="flex items-center bg-inherit mr-8 rounded-lg h-10 mt-1">
                  <TbHexagonLetterO className="ml-2 mr-3 mt-1 text-lg text-lgrey-5"/>
                  <p className="font-semibold text-lgrey-5">Settings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-400 p-4 mb-6 ml-8 mr-12 flex flex-col items-center rounded-2xl">
            <h1 className="text-white font-bold text-xl mb-1">Become Pro Access</h1>
            <p className="text-lgrey-2">Try your experience for using</p>
            <p className="text-lgrey-2">more features</p>
            <div className="bg-lorange flex items-center p-2 mt-4 rounded-lg">
              <PiCrownSimple className="text-xl mt-1 ml-6"/>
              <p className="ml-2 mr-6">Upgrade Pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
