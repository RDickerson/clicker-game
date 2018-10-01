import React from "react"
import { Link } from "react-router-dom"

const Nav = props => {

    //we will need to change this up to match however we log in. The log in button will move us to the game page.
    return (
        <React.Fragment>
            {/* log out button */}
            <p>log out</p>
            <p>{props.user.username}</p>
            <p>Current $$$: {props.user.bank}</p>
            <p>Income Per Click: {props.user.incomePerClick}</p>
        </React.Fragment>
    )
}

export default Nav