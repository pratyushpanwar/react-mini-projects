import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
function Profile() {

    const {user} = useContext(UserContext)

    if(user) return <div>welcome {user.username}</div>
    return <div> please login</div>
}

export default Profile
