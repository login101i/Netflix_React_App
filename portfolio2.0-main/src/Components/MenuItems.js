import React, { useState, useEffect } from 'react'

function MenuItems({ portoflioss, greyColor, showGrey }) {
    const [showInfo, setShowInfo] = useState(false)


    console.log("ShowInfo value", showInfo)

    return (
        <div className="portfolis">
            {
                portoflioss.map((item) => {
                    return <div className="portfolio" key={item.id} style={{ margin: '10px' }}>

                        <div className="image-data"

                        >
                            <img src={item.image} alt="" style={{ objectFit: 'contain' }} className="image" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} target="_blank"> go live </a>
                                </li>
                                {/* <li onClick={() =>
                                    greyColor(!showGrey)

                                }
                                    style={{ zIndex: 111 }}>
                                    <a
                                    > show info </a>
                                </li> */}
                            </ul>
                        </div>

                        <h5 style={{ textAlign: 'center', }}>
                            {item.title}
                        </h5>
                        <div style={{ color: "#222" }} className="github" >
                            <a href={item.link2} style={{ textAlign: 'center' }} target="_blank"

                            >Source on github</a>
                        </div>
                        {/* <div className="project-info">
                            <div className={` descriptionHidden ${showInfo ? "description" : ""}`}>
                                {item.description}
                            </div>
                        </div> */}

                    </div>

                })
            }
        </div >
    )
}

export default MenuItems;
