import { RiTerminalBoxFill, RiComputerFill } from "react-icons/ri";
import { MdDashboard} from "react-icons/md";
import { IoMdFolder } from "react-icons/io";


export const navItems = [
    {   
        id: "details",
        name: "Details",
        href: "/details",
        icon: MdDashboard, 
    },
    {
        id: "captures",
        name: "Captures",
        href: "/captures",
        icon: IoMdFolder, 
    },
    {
        id: "expenses",
        name: "Expenses",
        href: "/expenses",
        icon: RiTerminalBoxFill, 
    },

]