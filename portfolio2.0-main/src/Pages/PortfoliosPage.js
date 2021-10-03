import React, { useState } from 'react'
import Title from '../Components/Tittle'
import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems'
import portfolios from '../Components/allportfolios'
import FadeIn from 'react-fade-in';




const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

const PortfoliosPage = () => {
    const [categories, setCategories] = useState(allCategories)
    const [portoflioss, setPortfolios] = useState(portfolios)
    const [showGrey, setShowGrey] = useState(false)


    const filter = (category) => {
        if (category === 'All') {
            setPortfolios(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setPortfolios(filteredData);
    }

    const greyColor = (value) => {
        setShowGrey(value);
    }
    console.log("greycolor",showGrey)

    return (
        
        <div className={` PortfolioPage ${showGrey ? "grey" : ""}`}
           
        >
            <div className="title">
                <Title title={"portfolios"} span={"portfolios"} />
            </div>
            <div className="portfolios">
                <Categories filter={filter} categories={categories} />
                <FadeIn transitionDuration={600}>
                    <MenuItems
                        portoflioss={portoflioss}
                        greyColor={greyColor}
                            showGrey={showGrey} />
                </FadeIn>
            </div>
        </div>
     
    )
}

export default PortfoliosPage
