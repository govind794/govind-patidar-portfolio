import React from 'react';
import { useState } from 'react';
import Portfolios from '../Components/portfolioImage';
import Categoties from '../Components/Catagoties';
import MenuItems from '../Components/MenuItems';
import Footer from '../Components/Footer';
import Fact from '../Components/Fact';

const allCategories = ['All', ...new Set(Portfolios.map(item => item.category))];

function PortfolioPage() {
    const [categories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(Portfolios);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(Portfolios);

            return;
        }
        const filterData = Portfolios.filter((item) => {
            return item.category === category;
        })

        setMenuItems(filterData);
    }

    return (
        <div className="portfolio-page">
            <div className="image-container">
                <div className="mask"></div>
                <div className="main-heading">
                    <h1>POR<span>T</span>FOLIO</h1>
                </div>
            </div>
            <div className="content-container">
                <div className="port-small-heading">
                    <h2 className="small-heading">PORTFOLIO</h2>
                    <div className="portfolios">
                        <Categoties filter={filter} category={categories} />
                        <MenuItems menuItem={menuItems} />
                    </div>
                </div>
                <Fact />

                <Footer />
            </div>
        </div>
    );
}
export default PortfolioPage;