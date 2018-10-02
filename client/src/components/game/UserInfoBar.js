import React from "react"
import { Link } from "react-router-dom"

const Nav = props => {

    //we will need to change this up to match however we log in. The log in button will move us to the game page.
    return (
        <React.Fragment>
            <div id="userInfoBarDIV">
                {/* log out button */}
                <p className="pTags">log out</p>
                <p className="pTags">{props.user.username}</p>
                <p className="pTags">Current $$$: {props.user.bank}</p>
                <p className="pTags">Income Per Click: {props.user.incomePerClick}</p>
            </div>
        </React.Fragment>
    )
}

export default Nav