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
            {props.user.upgrades.includes("coffee")
                ? 
                //renders if coffee is purchased
                (<div className="purchased upgradeObjClass" ><p>coffee:</p><img onClick={props.coffee} className="clickedUpgradeTitles upgradePhotos" src={coffee} alt="" height="100px" /></div>) 
                : props.user.bank > 99
                ? 
                //renders if coffee can be purchased
                (<div className="upgradeObjClass" ><p>coffee:</p><img onClick={props.coffee} className="clickableUpgradeTitles upgradePhotos" src={coffee} alt="" height="100px" /></div>)
                : 
                //renders if coffee cannot be purchased yet
                (<div className="upgradeObjClass"><p>coffee:</p><img onClick={props.coffee} className="upgradeTitles upgradePhotos" src={coffee} alt="" height="100px" /></div>)}
            {props.user.upgrades.includes("laptop")
                ? 
                //renders if laptop is purchased
                (<div className="purchased upgradeObjClass" ><p>laptop:</p><img onClick={props.laptop} className="upgradePhotos clickedUpgradeTitles" src={laptop} alt="" height="100px" /></div>) 
                : props.user.bank > 999
                ? 
                //renders if laptop can be purchased
                (<div className="upgradeObjClass"><p>laptop:</p><img onClick={props.laptop} className="upgradePhotos clickableUpgradeTitles" src={laptop} alt="" height="100px" /></div>)
                : 
                //renders if laptop cannot be purchased yet
                (<div className="upgradeObjClass"><p>laptop:</p><img onClick={props.laptop} className="upgradePhotos upgradeTitles" src={laptop} alt="" height="100px" /></div>)}
            {props.user.upgrades.includes("desk")
                ? 
                //renders if desk is purchased
                (<div className="purchased upgradeObjClass" ><p>desk:</p><img onClick={props.desk} className="upgradePhotos clickedUpgradeTitles" src={desk} alt="" height="100px" /></div>) 
                : props.user.bank >= 5000
                ? 
                //renders if desk can be purchased
                (<div className="upgradeObjClass"><p>desk:</p><img onClick={props.desk} className="upgradePhotos clickableUpgradeTitles" src={desk} alt="" height="100px" /></div>)
                : 
                //renders if desk cannot be purchased yet
                (<div className="upgradeObjClass"><p>desk:</p><img onClick={props.desk} className="upgradePhotos upgradeTitles" src={desk} alt="" height="100px" /></div>)}
            {props.user.upgrades.includes("smallJob")
                ? 
                //renders if Office space Job is purchased
                (<div className="purchased upgradeObjClass" ><p>Office space Job:</p><img onClick={props.smallJob} className="upgradePhotos clickedUpgradeTitles" src={office1} alt="" height="100px" /></div>) 
                : props.user.bank >= 10000
                ? 
                //renders if Office space Job can be purchased
                (<div className="upgradeObjClass"><p>Office space Job:</p><img onClick={props.smallJob} className=" clickableUpgradeTitles upgradePhotos" src={office1} alt="" height="100px" /></div>)
                : 
                //renders if Office space Job cannot be purchased yet
                (<div className="upgradeObjClass"><p>Office space Job:</p><img onClick={props.smallJob} className="upgradeTitles upgradePhotos" src={office1} alt="" height="100px" /></div>)}
            {props.user.upgrades.includes("medJob")
                ? 
                //renders if coffee is purchased
                (<div className="purchased upgradeObjClass" ><p>Mediocre Job:</p><img onClick={props.medJob} className="upgradePhotos clickedUpgradeTitles" src={office2} alt="" height="100px" /></div>) 
                : props.user.bank >= 100000
                ? 
                //renders if coffee can be purchased
                (<div className="upgradeObjClass"><p>Mediocre Job:</p><img onClick={props.medJob} className="upgradePhotos clickableUpgradeTitles" src={office2} alt="" height="100px" /></div>)
                : 
                //renders if coffee cannot be purchased yet
                (<div className="upgradeObjClass"><p>Mediocre Job:</p><img onClick={props.medJob} className="upgradePhotos upgradeTitles" src={office2} alt="" height="100px" /></div>)}
            {props.user.upgrades.includes("bigJob")
                ? 
                //renders if coffee is purchased
                (<div className="purchased upgradeObjClass" ><p id="lastUpgrade">Big Money:</p><img onClick={props.bigJob} id="lastUpgrade" className="clickedUpgradeTitles upgradePhotos" src={office3} alt="" height="100px" /></div>) 
                : props.user.bank >= 1000000
                ? 
                //renders if coffee can be purchased
                (<div className="upgradeObjClass"><p id="lastUpgrade">Big Money:</p><img onClick={props.bigJob} id="lastUpgrade" className="upgradePhotos clickableUpgradeTitles" src={office3} alt="" height="100px" /></div>)
                :
                //renders if coffee cannot be purchased yet
                (<div className="upgradeObjClass"><p id="lastUpgrade">Big Money:</p><img onClick={props.bigJob} id="lastUpgrade" className="upgradeTitles upgradePhotos" src={office3} alt="" height="100px" /></div>)}
        </div>
    )
}

export default Upgrades