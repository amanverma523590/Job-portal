import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'

const Profile = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto bg-white border-gray-200 rounded-2xl my-5 p-8'>
        <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/YpNYaCWELuqcDF4UF7krQFGdVg42cJYF1uPn2n0g3js/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWducnVzaC5j/b20vdXBsb2Fkcy91/c2Vycy9jdXN0b21l/ci0yL2ltYWdlXzE1/MDU5MzI4NDNfN2Fj/NWJmYzAyNWQxYzFl/NTk1NDdkZmNlZjMy/OGUxZDMucG5n"/> 
        </Avatar>
      </div>
    </div>
  )
}

export default Profile
