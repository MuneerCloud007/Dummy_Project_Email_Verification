import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

type TProps={ FirstName: any, LastName: any, Company: any, position: string, profile_img: string,bool:boolean };

function Card(props:TProps) {
    const {FirstName,LastName,Company,profile_img,position,bool}=props;
     
  return (
    <div className="flex items-center p-2 bg-white rounded-lg shadow-md hover:bg-gray-200 mb-2">

<div className="h-[100%] flex items-center mr-1">
  {bool ? (
    <Checkbox
      defaultChecked
      sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
    />
  ) : (
    <Checkbox
      sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
    />
  )}
</div>

    <div className="flex items-center ">
        <div className=" w-24 h-24 rounded-md overflow-hidden mr-4">
            <img src={profile_img} alt="Profile Picture"  className=' h-[100%] w-[100%]'/>
        </div>
        <div  className=' p-1'>
            <h2 className="text-2xl font-bold text-gray-800">{FirstName +" "+ LastName}</h2>
            <p className="text-gray-400 text-xl my-2">{position}</p>
            <div className="flex items-center gap-4 p-2 w-14">
                <div className="mail bg-gray-100 p-1">

                <IoIosMail style={{ width: '20px', height: '20px' }} />
                </div>
                <div className='phone bg-gray-100 p-1'>
                    <FaPhoneAlt
                    style={{ width: '15px', height: '15px' }}
                    />

                </div>
            </div>
        </div>
    </div>
    <div className="flex items-center ml-auto mr-2">
    {bool ? (
   
   <button className=" bg-gray-200 hover:bg-gray-400 font-bold py-3 px-3  text-center rounded-md text-gray-700">
       
       <MdOutlineKeyboardArrowRight 
                    style={{ width: '20px', height: '20px' }}
                    />


   </button>
  ) : (
   
    <button className=" bg-green-600 hover:bg-green-900 font-bold py-3 px-3  text-center rounded-md text-white">
       
     
    <FaPlus 
                        style={{ width: '15px', height: '15px', fontWeight:"bold" }}

    />


    </button>
  )}

    </div>
</div>
  )
}

export default Card