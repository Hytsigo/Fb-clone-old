import "./Sidebar.css" ;
import { SidebarRow } from "./SidebarRow";
import LocalhospitalIcon from '@mui/icons-material/LocalHospital'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import PeopleIcon from '@mui/icons-material/People'
import ChatIcon from '@mui/icons-material/Chat'
import StorefrontIcon from '@mui/icons-material/Storefront'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import {ExpandMoreOutlined} from '@mui/icons-material/';


export const Sidebar = () => {
  return (
    <div className="sidebar">

        <SidebarRow src='https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-6/271602068_4673489886021828_4453044312467921410_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE4AUmJcGHyj9KDw0MQt5d9yUZSp6QeIBbJRlKnpB4gFhRWSywSBA-ftk6_0qCr_LPhiUjBc4yW0dVSNNHgcDzx&_nc_ohc=npwvfovRs1oAX_qoTz_&_nc_ht=scontent.fctg1-4.fna&oh=00_AfAWEOIc_KHnPT-xf2vr4dOXwM2KYKvd6_7QjkfoAfSTxA&oe=6426243C' title='Cleiver Mujica' />
        <SidebarRow  Icon={LocalhospitalIcon} title='COVID-19 Information Center' />

        <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
        <SidebarRow Icon={PeopleIcon} title='Friends'/>
        <SidebarRow Icon={ChatIcon} title='Messenger'/>
        <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
        <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
        <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
    </div>
  )
}
