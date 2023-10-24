import React from 'react'
import './Header.css';
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/Help'
import { useStateValue } from './StateProvider';

function Header() {
  const [{user}]=useStateValue();
  return (
    <div className="header">
       <div className="header__left">
           <Avatar            //Avatar for logged in user
              className='header__avatar'
              alt={user?.displayName}
              src={user?.photoURL}
           />
           <AccessTimeIcon/>                      {/* time icon */}
          {/* Avatar for logged in user */}
          {/* time icon */}
       </div>
       <div className="header__search">
         <SearchIcon/>
           {/* search icon */}
          <input placeholder='Search Me' />
           {/* input */}
       </div>
       <div className="header__right">
        <HelpOutlineIcon/>
           {/* help icon */}
       </div>
    </div>
  )
}
export default Header
