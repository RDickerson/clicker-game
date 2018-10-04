import React from "react"
import coffee from '../../images/coffee.png'
import desk from '../../images/desk.png'
import laptop from '../../images/laptop.png'
import office1 from '../../images/office1.png'
import office2 from '../../images/office2.png'
import office3 from '../../images/office3.png'

const Upgrades = (props) => {
    return (
        <div>
            {this.props.Upgrades.includes("coffee")
                ? (<p className="clickedUpgradeTitles">coffee:<img onClick={props.coffee} className="upgradePhotos" src={coffee} alt="" height="100px" /></p>) 
                : (<p className="upgradeTitles">coffee:<img onClick={props.coffee} className="upgradePhotos" src={coffee} alt="" height="100px" /></p>) }
            <div id="upgradeCont">
                <p className="upgradeTitles">coffee:</p><img onClick={props.coffee} className="upgradePhotos" src={coffee} alt="" height="100px" />
                <p className="upgradeTitles">laptop:</p><img onClick={props.laptop} className="upgradePhotos" src={laptop} alt="" height="100px" />
                <p className="upgradeTitles">desk:</p><img onClick={props.desk} className="upgradePhotos" src={desk} alt="" height="100px" />
                <p className="upgradeTitles" >Office space Job:</p><img onClick={props.smallJob} className="upgradePhotos" src={office1} alt="" height="100px" />
                <p className="upgradeTitles"> Mediocre Job:</p><img src={office2} className="upgradePhotos" onClick={props.medJob} alt="" height="100px" />
                <p id="lastUpgrade" className="upgradeTitles"> Big Money: </p><img onClick={props.bigJob} id="lastUpgrade" className="upgradePhotos" src={office3} alt="" height="100px" />
            </div>
        </div>
    )
}

export default Upgrades