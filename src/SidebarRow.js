import { Avatar, IconButton } from '@mui/material'
import './SidebarRow.css'

export const SidebarRow = ({src, Icon, title}) => {
  return (
    <div className="sidebarRow">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}

        <h4>{title}</h4>
        
    </div>
  )
}
