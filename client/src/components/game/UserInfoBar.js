import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {

    //we will need to change this up to match however we log in. The log in button will move us to the game page.
    return (
        <React.Fragment>
            <Link to="/game">Game</Link>
            {/* log out button */}
            <p>log out</p>
            <p>user name</p>
            <p>$$$</p>
            <p>income per click</p>
        </React.Fragment>
    )
}

export default Nav