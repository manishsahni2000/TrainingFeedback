import MenuItem from "./MenuItem";
import NavbarItem from "./NavbarItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-orange-100 lg:text-sm p-4">
      <NavbarItem title="PS Training" param="fetchPSTraining" />
      <NavbarItem title="Skills Matrix" param="fetchSkillsMatrix" />
      <NavbarItem title="Datalake S3 Roles" param="fetchDatalakeS3" />
      <NavbarItem title="Atlas Lab Creator" param="fetchAtlasLab" />
      <NavbarItem title="Cloud Manager Lab Creator" param="fetchCloudManagerLab" />
      <NavbarItem title="ADL Class Creation" param="fetchADLClass" />
      <NavbarItem title="Cloud Exception Manager" param="fetchCloudExceptionManager" />
      </div>
    /* <MenuItem title="Cloud Manager Lab Creator" address="/" Icon={AiFillHome} />
    <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} /> */
   
  );
}