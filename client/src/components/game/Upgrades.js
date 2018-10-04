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
            {this.props.user.upgrades.includes("coffee")
                ? 
                //renders if coffee is purchased
                (<p className="clickedUpgradeTitles">coffee:<img onClick={props.coffee} className="upgradePhotos" src={coffee} alt="" height="100px" /></p>) 
                : this.props.user.bank > 99
                ? 
                //renders if coffee can be purchased
                (<p className="clickableUpgradeTitles">coffee:<img onClick={props.coffee} className="upgradePhotos" src={coffee} alt="" height="100px" /></p>)
                : 
                //renders if coffee cannot be purchased yet
                (<p className="upgradeTitles">coffee:<img onClick={props.coffee} className="upgradePhotos" src={coffee} alt="" height="100px" /></p>)}
            {this.props.user.upgrades.includes("laptop")
                ? 
                //renders if laptop is purchased
                (<p className="clickedUpgradeTitles">laptop:<img onClick={props.laptop} className="upgradePhotos" src={laptop} alt="" height="100px" /></p>) 
                : this.props.user.bank > 999
                ? 
                //renders if laptop can be purchased
                (<p className="clickableUpgradeTitles">laptop:<img onClick={props.laptop} className="upgradePhotos" src={laptop} alt="" height="100px" /></p>)
                : 
                //renders if laptop cannot be purchased yet
                (<p className="upgradeTitles">laptop:<img onClick={props.laptop} className="upgradePhotos" src={laptop} alt="" height="100px" /></p>)}
            {this.props.user.upgrades.includes("desk")
                ? 
                //renders if desk is purchased
                (<p className="clickedUpgradeTitles">desk:<img onClick={props.desk} className="upgradePhotos" src={desk} alt="" height="100px" /></p>) 
                : this.props.user.bank >= 5000
                ? 
                //renders if desk can be purchased
                (<p className="clickableUpgradeTitles">desk:<img onClick={props.desk} className="upgradePhotos" src={desk} alt="" height="100px" /></p>)
                : 
                //renders if desk cannot be purchased yet
                (<p className="upgradeTitles">desk:<img onClick={props.desk} className="upgradePhotos" src={desk} alt="" height="100px" /></p>)}
            {this.props.user.upgrades.includes("smallJob")
                ? 
                //renders if Office space Job is purchased
                (<p className="clickedUpgradeTitles">Office space Job:<img onClick={props.smallJob} className="upgradePhotos" src={smallJob} alt="" height="100px" /></p>) 
                : this.props.user.bank >= 10000
                ? 
                //renders if Office space Job can be purchased
                (<p className="clickableUpgradeTitles">Office space Job:<img onClick={props.smallJob} className="upgradePhotos" src={smallJob} alt="" height="100px" /></p>)
                : 
                //renders if Office space Job cannot be purchased yet
                (<p className="upgradeTitles">Office space Job:<img onClick={props.smallJob} className="upgradePhotos" src={smallJob} alt="" height="100px" /></p>)}
            {this.props.user.upgrades.includes("medJob")
                ? 
                //renders if coffee is purchased
                (<p className="clickedUpgradeTitles">Mediocre Job:<img onClick={props.office2} className="upgradePhotos" src={office2} alt="" height="100px" /></p>) 
                : this.props.user.bank >= 100000
                ? 
                //renders if coffee can be purchased
                (<p className="clickableUpgradeTitles">Mediocre Job:<img onClick={props.office2} className="upgradePhotos" src={office2} alt="" height="100px" /></p>)
                : 
                //renders if coffee cannot be purchased yet
                (<p className="upgradeTitles">Mediocre Job:<img onClick={props.office2} className="upgradePhotos" src={office2} alt="" height="100px" /></p>)}
            {this.props.user.upgrades.includes("bigJob")
                ? 
                //renders if coffee is purchased
                (<p id="lastUpgrade" className="clickedUpgradeTitles">Big Money:<img onClick={props.bigJob} id="lastUpgrade" className="upgradePhotos" src={bigJob} alt="" height="100px" /></p>) 
                : this.props.user.bank >= 1000000
                ? 
                //renders if coffee can be purchased
                (<p id="lastUpgrade" className="clickableUpgradeTitles">Big Money:<img onClick={props.bigJob} id="lastUpgrade" className="upgradePhotos" src={bigJob} alt="" height="100px" /></p>)
                : 
                //renders if coffee cannot be purchased yet
                (<p id="lastUpgrade" className="upgradeTitles">Big Money:<img onClick={props.bigJob} id="lastUpgrade" className="upgradePhotos" src={bigJob} alt="" height="100px" /></p>)}
        </div>
    )
}

export default Upgrades