import React from 'react';
import dp from '../images/govind.jpg';
import { FaEyeDropper, FaCode, FaRocket } from 'react-icons/fa';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import Fact from '../Components/Fact';

function ProfilePage() {
    return (
        <div className="profile-page">
            <div className="image-container">
                <div className="mask"></div>
                <div className="main-heading">
                    <h1>PR<span>O</span>FILE</h1>
                </div>
            </div>
            <div className="content-container">
                <div className="story">
                    <h2 className="small-heading">STORY OF GLORY</h2>
                    <div className="story-content">
                        <div className="pro-img">
                            <img src={dp} alt="about-img" />
                        </div>
                        <div className="story-text">
                            <h3>AN AWESOME DESIGNER ON PLANET</h3>
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat enim arcu,
                                eget tempor nibh congue a. Maecenas faucibus sagittis nibh, in bibendum ex. Donec eu
                                ornare augue, nec cursus arcu. Vivamus accumsan mauris nec nulla bibendum, et eleifend
                                nisl tristique. Pellentesque fringilla lorem id nibh auctor sagittis. Suspendisse non
                                nisl at velit malesuada bibendum.
                            </p>
                            <p>
                                Quisque in tempor sapien, et cursus neque. Nunc pulvinar diam ac dapibus mollis. Etiam
                                id iaculis lorem. Donec bibendum volutpat ante, eu consequat nisi suscipit at. Etiam
                                interdum augue dolor, id auctor felis volutpat sed. Phasellus id ex ultrices, tempus leo
                                eget, volutpat diam. In sit amet magna faucibus, molestie nisi in, hendrerit libero.
                                Morbi auctor velit sagittis, elementum lorem eget, imperdiet nisl.
                            </p>
                            <p>
                                Curabitur pharetra tincidunt lobortis. Duis dolor felis, sollicitudin ac dapibus quis,
                                hendrerit ut est. Sed faucibus neque iaculis nisi accumsan, et condimentum nunc
                                scelerisque. Etiam interdum augue dolor, id auctor felis volutpat sed. Phasellus id ex
                                ultrices, tempus leo eget, volutpat diam. In sit amet magna faucibus, molestie nisi in,
                                hendrerit libero. Morbi auctor velit sagittis, elementum lorem eget, imperdiet nisl.
                                Fusce elementum orci in dignissim cursus.
                            </p>
                            <a href="/" className="hire-me">Hire Me</a>
                            <a href="/">Download Resume</a>
                        </div>
                    </div>

                </div>
                <div className="serviceContainer">
                    <div className="service-title">
                        <h2 >WHAT CAN I DO?</h2>
                    </div>
                    <div className="service-grid">
                        <Services image={<FaEyeDropper />} title={"API Automation"}
                            text={'Vivamus et rhoncus mauris, suscipit efficitur elementum ex. Interdum et malesuada ipsum primis in faucibus. Nullam odio libero, cursus ac ligula suscipit maximus.'} />
                        <Services image={<FaCode />} title={"UI Automation"}
                            text={'Vivamus et rhoncus mauris, suscipit efficitur elementum ex. Interdum et malesuada ipsum primis in faucibus. Nullam odio libero, cursus ac ligula suscipit maximus.'} />
                        <Services image={<FaRocket />} title={"DevOps"}
                            text={'Vivamus et rhoncus mauris, suscipit efficitur elementum ex. Interdum et malesuada ipsum primis in faucibus. Nullam odio libero, cursus ac ligula suscipit maximus.'} />
                        <Services image={<FaRocket />} title={"DevOps"}
                            text={'Vivamus et rhoncus mauris, suscipit efficitur elementum ex. Interdum et malesuada ipsum primis in faucibus. Nullam odio libero, cursus ac ligula suscipit maximus.'} />
                        <Services image={<FaEyeDropper />} title={"DevOps"}
                            text={'Vivamus et rhoncus mauris, suscipit efficitur elementum ex. Interdum et malesuada ipsum primis in faucibus. Nullam odio libero, cursus ac ligula suscipit maximus.'} />
                        <Services image={<FaRocket />} title={"DevOps"}
                            text={'Vivamus et rhoncus mauris, suscipit efficitur elementum ex. Interdum et malesuada ipsum primis in faucibus. Nullam odio libero, cursus ac ligula suscipit maximus.'} />
                    </div>
                </div>

                <Fact />

                <Footer />
            </div>

        </div>
    );
}

export default ProfilePage;