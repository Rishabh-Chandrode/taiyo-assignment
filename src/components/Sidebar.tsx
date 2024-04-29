import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar bg-[#1E2936] w-60 h-full box-border p-5">

      <ul>
        <li>
          <a href="/contacts" className="block px-4 py-2 text-lg rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
            Contacts
          </a>
        </li>
        <li>
          <a href="/mapsandcharts" className="block px-4 py-2 text-lg rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
            Maps and Charts
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar