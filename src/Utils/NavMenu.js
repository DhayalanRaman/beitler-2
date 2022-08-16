import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
// import LoupeIcon from '@mui/icons-material/Loupe';
export const menuItem = [
    {
        path: "/",
        name: "Dashboard",
        icon: <AddBusinessIcon />
    },
    {
        path: "/orderlist",
        name: "Orders",
        icon: <LocalShippingIcon />
    },
    {
        path: "/customer",
        name: "Customer",
        icon: <InterpreterModeIcon />
    },
    {
        path: "/template",
        name: "Template",
        icon: <NotificationsNoneIcon />
    },
    {
        path: "/rules",
        name: "Rules",
        icon: <PanToolAltIcon />
    },
    {
        path: "/event",
        name: "Event",
        icon: <CalendarMonthIcon />
    },
    {
        path: "/lookup",
        name: "lookup",
        icon: <CoPresentIcon />
    },
    // {
    //     path: "/addcus",
    //     name: "Addcustomer",
    //     icon: <LoupeIcon />
    // },
]