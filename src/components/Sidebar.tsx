import React from 'react'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar bg-[#1E2936] w-60 h-full box-border p-5">

      <ul>
        <li>
          <div onClick={() => navigate("/contacts")} className="block px-4 py-2 text-lg rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
            Contacts
          </div>
        </li>
        <li>
          <div onClick={()=>navigate("/mapsandcharts")} className="block px-4 py-2 text-lg rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
            Maps and Charts
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar