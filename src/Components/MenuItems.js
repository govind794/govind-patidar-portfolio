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
                        {/* <div class="pop-up-box" id="portfolio-1">
                            <img alt="" src={item.image} class="hidden-xs" />
                            <div class="popup-content">
                                <h3>{item.title}</h3>
                                <p>
                                    Quisque in tempor sapien, et cursus neque. Nunc pulvinar diam ac dapibus mollis.
                                    Etiam id iaculis lorem. Donec bibendum volutpat ante, eu consequat nisi suscipit at.
                                    Etiam interdum augue dolor, id auctor felis volutpat sed. Phasellus id ex ultrices,
                                    tempus leo eget, volutpat diam. In sit amet magna faucibus, molestie nisi in,
                                    hendrerit libero. Morbi auctor velit sagittis, elementum lorem eget, imperdiet nisl.
                                </p>
                                <a href="#">PREVIEW</a>
                            </div>
                        </div> */}
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