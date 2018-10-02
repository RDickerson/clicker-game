import React from "react"
import coffee from '../../images/coffee.png'
import desk from '../../images/desk.png'
import laptop from '../../images/laptop.png'
import office1 from '../../images/office1.png'
import office2 from '../../images/office2.png'
import office3 from '../../images/office3.png'

const Upgrades = (props) => {
    return (
        <div id="upgradeCont">
            <p onClick={props.coffee}>coffee:  <img src={coffee} alt="" height="100px"/></p>
            <p onClick={props.laptop}>laptop: <img src={laptop} alt="" height="100px"/></p>
            <p onClick={props.desk}>desk: <img src={desk} alt="" height="100px"/></p>
            <p onClick={props.smallJob}>Office space Job: <img src={office1} alt="" height="100px"/></p>
            <p onClick={props.medJob}> Mediocre Job: <img src={office2} alt="" height="100px"/></p>
            <p onClick={props.bigJob}> Big Money: <img src={office3} alt="" height="100px"/></p>
        </div>
    )
}

export default Upgrades