import React, {useState} from 'react'
import { ImHome } from "react-icons/im";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RiBuilding2Line, RiStore2Line } from "react-icons/ri";
import { FaBuysellads, FaUsers } from "react-icons/fa";
import Logo from '../Images/shopify-ar21.svg'
import { NavLink } from 'react-router-dom';
import "./SideBar.css"


const SideBar = () => {
  const[isOpen,setIsOpen]=useState(true)
  const sidebarOpenHandler=()=>{
    setIsOpen(!isOpen)
  }
  const menuItem=[
    {
      path:'/home',
      name:'Home',
      icon:<ImHome/>
    },
    {
      path:'/home/categories/assets',
      name:'Assets',
      icon:<FaBuysellads/>
    },
    {
      path:'/home/categories',
      name:'Categories',
      icon:<RiStore2Line/>
    },
    {
      path:'/buildings',
      name:'Buildings',
      icon:<RiBuilding2Line/>
    },
    {
      path:'/home/employees',
      name:'Employees',
      icon:<FaUsers/>
    },
  ]
  return (
    <div className='container'>
      <div style={{width: isOpen? "240px":"50px"}} className="sidebar">
        <div className='top-sidebar'>
          <img style={{display: isOpen? "block":"none"}} src={Logo} alt='logo-img' className='logo'/>
          <div style={{marginLeft: isOpen? "15px":"0px"}} className='next-logo'>
            <HiOutlineBars3 onClick={sidebarOpenHandler}/>
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className='link' activeclassname='active' end>
              <div className='icon'>{item.icon}</div>
              <div style={{display: isOpen? "block":"none"}} className='item-name'>{item.name}</div>
            </NavLink>
          ))
        }
      </div>
    </div>
    
  )
}

export default SideBar
