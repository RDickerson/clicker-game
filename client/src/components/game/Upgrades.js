import React from "react"

const Upgrades = (props) => {
    return (
        <div id="upgradeCont">
            <p onClick={props.coffee}>coffee</p>
            <p onClick={props.laptop}>laptop</p>
            <p>job</p>
        </div>
    )
}

export default Upgrades