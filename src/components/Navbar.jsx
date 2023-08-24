import { useContext } from "react";
export function Navbar(){
    return(
        <nav className="flex justify-center item1 rounded-md">
            <ul className=" flex-1 flex">
                <li className="lg:text-3xl md:text-xl text-lg font-bold"></li>
            </ul>
            <ul className=" flex-1 flex justify-end gap-5 px-2">
                <li className=" grayscale hover:grayscale-0"></li>
                <li className=" grayscale hover:grayscale-0"></li>
            </ul>
        </nav>
    )
}