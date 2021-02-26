import React from 'react'
import {Link} from 'react-router-dom'

const landingScreen = () => {
    return (
        <>
            <Link to="/register"><button>Sign-Up</button></Link>
            <Link to="/login"><button>Login</button></Link>
        </>
    )
}

export default landingScreen
