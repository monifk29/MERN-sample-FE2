import React from 'react'

const Profile = () => {
    var user = JSON.parse(localStorage.getItem("user"))
    console.log(user.name)
  return (
    <div className='Profile'>
<h1> Hello {user.name} !!</h1>
<h3>Welcome To Our E-comm Dashboard</h3>
<h5>MERN Project</h5>
<h3>Back-End && Front-End</h3>



    </div>
  )
}

export default Profile