import React from 'react';
import { FaLink, FaSearch } from "react-icons/fa";
function MenuItems({ menuItem }) {
    return (
        <div className="port">
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="port" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} ><FaLink /></a>
                                    <a href={item.link2} ><FaSearch /></a>
                                </li>
                            </ul>

                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        {/* <p>Placeholder paragraph</p> */}
                    </div>
                })
            }
        </div>
    );
}

export default MenuItems;