import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon  from '@mui/icons-material/SubscriptionsOutlined';
import StoreFrontOutlinedIcon  from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon  from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const Header = () => {
  return (
    <>
      
        <div className='header'>

             <div className='header__left'>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/230px-2021_Facebook_icon.svg.png" alt=""/>

              <div class="header__input">
                <SearchIcon />
                <input placeholder='Buscar en Facebook' type="text"/>
              </div>
             </div>

            <div className='header__center'> 
              <div className="header__option header__option--active">
                <HomeIcon fontSize="large" />
              </div>
              <div className="header__option">
                <FlagIcon fontSize="large" />
              </div>
              <div className="header__option">
                <SubscriptionsOutlinedIcon fontSize="large" />
              </div>
              <div className="header__option">
                <StoreFrontOutlinedIcon fontSize="large" />
              </div>
              <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large" />
              </div>
            </div>

            <div className='header__right'>
              <div class="header__info">
                <Avatar />
                <h4>Cleiver Rios</h4>
              </div>

                <IconButton>
                  <AddIcon />
                </IconButton>
                <IconButton>
                  <ForumIcon />
                </IconButton>
                <IconButton>
                  <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>


            </div>
        </div>
    </>
  )
}
