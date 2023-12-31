import React, { useState , useEffect} from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';   
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';  
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon  from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase";
import { useStateValue } from './StateProvider'; 

function Sidebar() {

  const [channels,setChannels]=useState([]);
  const [{user}]=useStateValue()

  //it is fetching data from firestore database
  useEffect(()=>{
    // collection(rooms)->document-> then set the channels to data 
     db.collection("rooms").onSnapshot((snapshot)=>(
       setChannels(snapshot.docs.map((doc=>({
         id: doc.id,
         name: doc.data().name
       }))))
     ))
  })

  return (
    <div className='sidebar'>
       <div className="sidebar__header">
        <div className="sidebar__info">
           {/* <h2></h2> */}
           <h3>
             <FiberManualRecordIcon/>
              {user?.displayName}
            </h3> 
            </div>
            <CreateIcon/>
       </div>
       <SidebarOption Icon={InsertCommentIcon} title="Thread"/>
       <SidebarOption Icon={InboxIcon} title="Mention & reactions"/>
       <SidebarOption Icon={DraftsIcon} title="Saved items"/>
       <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
       <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
       <SidebarOption Icon={AppsIcon} title="Apps"/>
       <SidebarOption Icon={FileCopyIcon} title="File browser"/>
       <SidebarOption Icon={ExpandLessIcon} title="show less"/>
       <hr />
       <SidebarOption Icon={ExpandMoreIcon} title="Channel"/>
       <hr />
       <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
       {/* // Connect to db and list all the channels */}
      
       {channels.map(channel=>{
         return (<SidebarOption title={channel.name} id={channel.id}/>)
       })}
      </div> 
  )
}

export default Sidebar
