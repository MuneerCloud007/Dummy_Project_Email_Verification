
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { FaWindowMinimize } from "react-icons/fa";
import { TbArrowsMaximize } from "react-icons/tb";


export default function Navbar(props:any) {
  const {onMinimize}=props;
  const items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'Features',
      icon: 'pi pi-star'
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Components',
          icon: 'pi pi-bolt'
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server'
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil'
        },
        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette'
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette'
            }
          ]
        }
      ]
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope'
    }
  ];

  return (
    <div className="card mb-4 px-3  border-b-2 border-slate-400 border-solid" >
      <nav className='flex justify-between items-center p-3'>
        <p className=' font-bold text-4xl'>VivaLaSales</p>
        <div className='flex items-center gap-4 rounded-md'>
          <button className=" bg-gray-100 hover:bg-gray-200 font-bold py-3 px-3  text-center rounded-md">

            <TbArrowsMaximize
              style={{ width: '20px', height: '20px', fontWeight: "bold" }}

            />


          </button>
          <button className=" bg-gray-100 hover:bg-gray-200 font-bold py-3 px-3  text-center rounded-md "
          onClick={onMinimize}
          >

            <FaWindowMinimize
              style={{ width: '15px', height: '15px', fontWeight: "bold" }}

            />


          </button>




        </div>
      </nav>


    </div>
  )
}
