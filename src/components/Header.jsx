import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-10 text-center">
     <div className="flex items-center space-x-5">
     <Image
  src="/mongodb_logo.png"
  alt="My logo"
  width={100}
  height={100}
/>
      <h2 className="text-4xl">
      
      </h2>
   
  </div>
</div>

  );
}