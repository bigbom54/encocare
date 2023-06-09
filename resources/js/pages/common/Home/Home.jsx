import { Link } from '@inertiajs/react';
import { Carousel } from 'react-responsive-carousel';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import Button from '@/components/common/Button/Button';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import ConsultantCardItem from '@/components/common/ConsultantCard/ConsultantCard';
import slideImage1 from '../../../../images/carousel.png';
import tabletDesktopImage from '../../../../images/tablet/tablet-desktop.png';
import tabletMobileImage from '../../../../images/tablet/tablet-mobile.png';
import appStoreImage1 from '../../../../images/stores/appStore1.png';
import appStoreImage2 from '../../../../images/stores/appStore2.png';
import logoImage1 from '../../../../images/partners/logo1.png';
import logoImage2 from '../../../../images/partners/logo2.png';
import logoImage3 from '../../../../images/partners/logo3.png';
import logoImage4 from '../../../../images/partners/logo4.png';
import logoImage5 from '../../../../images/partners/logo5.png';
import logoImage6 from '../../../../images/partners/logo6.png';
import { copyIcon, locationIcon, rightArrowIcon2, searchIcon } from '@/components/icons/common';
import { eyeIcon1, eyeIcon2, eyeIcon3 } from '@/components/icons/eyes';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.scss';

const Home = ({ auth }) => {
    return (
        <BasicLayout auth={auth}>
            <div className="home">
                <div className="main-section">
                    <div className="title-back">
                        <div className="title-wrapper">
                            <h1>
                                Revolutionizing <br className="mobile-only" />
                                <span>
                                    AI Powered <br className="desktop-only" />
                                </span>
                                <span>
                                    Eye Testing <br className="mobile-only" />
                                </span>
                                Technology!
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna{' '}
                            </p>
                            <div className="button-wrapper">
                                <Button type="primary" arrow title="Get Started" />
                                <Link href="/">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-wrapper">
                        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                            <div>
                                <img className="carousel-image" src={slideImage1} />
                            </div>
                            <div>
                                <img className="carousel-image" src={slideImage1} />
                            </div>
                            <div>
                                <img className="carousel-image" src={slideImage1} />
                            </div>
                            <div>
                                <img className="carousel-image" src={slideImage1} />
                            </div>
                            <div>
                                <img className="carousel-image" src={slideImage1} />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="video-section">
                    <div className="title-wrapper">
                        <h1>Revolutionizing the Eye Testing Technology!</h1>
                        <p>
                            We at encore believe in making African people quality of life better by giving them better
                            and sustainable <br className="desktop-only" />
                            vision!
                        </p>
                    </div>

                    <video autoPlay controls></video>
                </div>
                <div className="test1-section">
                    <div className="container">
                        <h1>
                            Experiencing Vision Problems?
                            <br />
                            Take our Test! It's <span>Free and Easy</span>
                        </h1>
                        <p>
                            Encocare aims to cater the increasing eye diseases in the African countries! We are powered
                            by AI (Artificial Intelligence) interface that diagnosis leading causes if visual
                            impairments with 90% accuracy rate.
                        </p>
                        <div className="link-wrapper">
                            <div className="link-item">
                                <h2>Cataract</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut;
                                </p>
                                <div className="link">
                                    <Link href="/">Test yourself</Link>
                                    {rightArrowIcon2}
                                </div>
                            </div>
                            <div className="link-item">
                                <h2>Macular Degeneration</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut;
                                </p>
                                <div className="link">
                                    <Link href="/">Test yourself</Link>
                                    {rightArrowIcon2}
                                </div>
                            </div>
                        </div>
                        <div className="link-wrapper">
                            <div className="link-item">
                                <h2>Glaucoma</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut;
                                </p>
                                <div className="link">
                                    <Link href="/">Test yourself</Link>
                                    {rightArrowIcon2}
                                </div>
                            </div>
                            <div className="link-item">
                                <h2>Stargardt's Disease</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut;
                                </p>
                                <div className="link">
                                    <Link href="/">Test yourself</Link>
                                    {rightArrowIcon2}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="test2-section">
                    <div className="container">
                        <div className="title-wrapper">
                            <span>ENCOCARE AI POWERED</span>
                            <h1>
                                Test your vision! It's <span>free and easy!</span>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod{' '}
                                <br className="desktop-only" />
                                tempor invidunt ut labore et dolore magna
                            </p>
                            <div className="checkbox-wrapper">
                                <CheckBox />
                                <span>I agree to the terms and conditions.</span>
                            </div>
                            <div className="button-wrapper">
                                <Link href="/test/agree">
                                    <Button title="Start the Test" type="primary" arrow />
                                </Link>
                            </div>
                            <div className="copy-wrapper">
                                {copyIcon}
                                <Link href="/">Share link with your oved ones</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-section">
                    <div className="container">
                        <h1>The leading causes of blindness!</h1>
                        <p>
                            Encocare authorized specialists can guide you throughout the course of the treatment. <br />
                            Get involved!
                        </p>

                        <div className="card-wrapper">
                            <div className="card card1">
                                {eyeIcon1}
                                <h3>Cataract</h3>
                                <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod</p>
                                <Button type="primary" arrow title="Learn More" />
                            </div>
                            <div className="card card2">
                                {eyeIcon2}
                                <h3>Glaucoma </h3>
                                <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod</p>
                                <Button type="primary" arrow title="Learn More" />
                            </div>
                            <div className="card card3">
                                {eyeIcon3}
                                <h3>Macular Degenration</h3>
                                <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod</p>
                                <Button type="gray" arrow title="Learn More" className="gray-button" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider-section">
                    <div className="divider" />
                </div>
                <div className="map-section">
                    <div className="container">
                        <div className="title-wrapper">
                            <h1>
                                Find an <span>ophthalmologist</span> near you!
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy{' '}
                                <br className="desktop-only" />
                                eirmod tempor invidunt ut labore et dolore magna
                            </p>
                            <div className="input-wrapper">
                                <NormalInput placeHolder="Enter Location" />
                                <Button title="" icon={searchIcon} type="primary" />
                                <div className="location-wrapper">
                                    {locationIcon}
                                    <Link href="/">Use Current Location</Link>
                                </div>
                            </div>
                            <Link href="/">View all prescribed doctors</Link>
                        </div>
                    </div>
                </div>
                <div className="consultant-section">
                    <div className="container">
                        <h1>Consult with the best we got!</h1>
                        <p>
                            Encocare authorized specialists can guide you throughout the course of the treatment.{' '}
                            <br className="desktop-only" />
                            Get involved!
                        </p>

                        <div className="card-wrapper">
                            {[0, 1, 2].map((item) => (
                                <div className="card-item" key={item}>
                                    <ConsultantCardItem />
                                </div>
                            ))}
                        </div>

                        <div className="more-wrapper">
                            <Link href="/">Browse more</Link>
                        </div>
                    </div>
                </div>
                <div className="work-section">
                    <div className="title-wrapper">
                        <h1>How it works?</h1>
                        <p>
                            Encocare is working on making eye testing more accessible and cost effective than ever
                            before. This is how <br className="desktop-only" />
                            our AI powered system strives to achieve perfection!
                        </p>
                        <div className="link-wrapper">
                            <Button title="Become a partner" type="primary" arrow />
                            <Link href="/">Register your clinic with us</Link>
                        </div>
                    </div>

                    <div className="image-wrapper">
                        <div className="title title-1">
                            <span>1</span>
                            <h3>Camera Sensor</h3>
                            <p>Encocare is working on making eye testing more accessible.</p>
                        </div>
                        <div className="title title-2">
                            <span>2</span>
                            <h3>Depth Monitoring</h3>
                            <p>Encocare is working on making eye testing more accessible.</p>
                        </div>
                        <div className="title title-3">
                            <span>3</span>
                            <h3>Depth Monitoring</h3>
                            <p>Encocare is working on making eye testing more accessible.</p>
                        </div>
                        <img className="tablet-desktop-img" src={tabletDesktopImage} alt="" />
                        <img className="tablet-mobile-img" src={tabletMobileImage} alt="" />
                    </div>
                    <div className="store-wrapper">
                        <p>Encocare App Compatibility</p>
                        <div className="store-image-wrapper">
                            <img src={appStoreImage1} alt="" />
                            <img src={appStoreImage2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="partner-section">
                    <h1>Our proud partners</h1>
                    <p>Encocare is proudly partners with leading and edge cutting companies.</p>
                    <div className="logo-wrapper">
                        <img src={logoImage1} alt="" />
                        <img src={logoImage2} alt="" />
                        <img src={logoImage3} alt="" />
                        <img src={logoImage4} alt="" />
                        <img src={logoImage5} alt="" />
                        <img src={logoImage6} alt="" />
                    </div>
                </div>
            </div>
        </BasicLayout>
    );
};

export default Home;
