import { useState } from "react";
import "./index.css"
import { BiCaretDown } from "react-icons/bi";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";


function Navigation (){
    const [open, setOpen] = useState(true);
    const [buka, setBuka] = useState(true);

    return (
        <div className="flex flex-col bg-putihkmj h-screen shadow-[6px_0px_10px_1px_rgba(0,_0,_0,_0.1)] p-6">
            <div className="text-xl text-orenkmj font-[Lexend]">
                Planner
            </div>
            <div className="mt-8">
                <div className="relative">
                    <button
                        className="w-full px-4 py-2 bg-orenkmj text-putihkmj rounded-md font-semibold flex items-center justify-between mb-2"
                        onClick={() => setOpen(!open)}
                    >
                        Menu
                        <BiCaretDown className={`${open ? "rotate-180" : ""} transition-transform duration-200`} />
                    </button>
                    <div
                        className={`mt-2 w-full bg-putihkmj rounded-md shadow-inner z-10 transition-all duration-200 overflow-hidden
                        ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        <ul className="py-2">
                            <li>
                                <a href="#" className="block w-full px-4 py-2 hover:bg-orenkmj hover:text-putihkmj rounded">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block w-full px-4 py-2 hover:bg-orenkmj hover:text-putihkmj rounded">
                                    Calendar
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block w-full px-4 py-2 hover:bg-orenkmj hover:text-putihkmj rounded">
                                    Task List
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="relative">
                    <button className="w-full px-4 py-2 bg-orenkmj text-putihkmj rounded-md font-semibold flex items-center justify-between mb-2"
                    onClick={() => setBuka(!buka)}
                    >
                        List
                        <BiCaretDown className={`${buka ? "rotate-180" : ""} transition-transform duration-200`} />
                    </button>
                    <div
                        className={`mt-2 w-full bg-putihkmj rounded-md shadow-inner z-10 transition-all duration-200 overflow-hidden
                        ${buka ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        <ul className="py-2">
                            <li>
                                <a href="#" className="flex items-center gap-2 w-full px-4 py-2 hover:bg-orenkmj hover:text-putihkmj rounded">
                                    <BsFillPersonFill />
                                    Personal
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 w-full px-4 py-2 hover:bg-orenkmj hover:text-putihkmj rounded">
                                    <MdOutlineDesignServices />
                                    Design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 w-full px-4 py-2 hover:bg-orenkmj hover:text-putihkmj rounded">
                                    <GiArchiveResearch />
                                    Research
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;