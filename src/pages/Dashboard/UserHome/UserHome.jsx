// import React from 'react'

import useAuth from "../../../hooks/useAuth"

const UserHome = () => {
    const {user} = useAuth();
    return (
    <div>
        <h2 className="mt-20 text-5xl text-center">
            <span>Hi, Welcome to Your Dashboard</span>
            {/* {
                user?.displayName ? user.displayName : 'Back'
            } */}
        </h2>
    </div>
  )
}

export default UserHome;