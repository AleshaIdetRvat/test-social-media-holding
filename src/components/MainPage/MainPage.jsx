import React from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import { ContainerHowTo } from "../ContainerHowTo/ContainerHowTo"
import { ProductContainer } from "../Product/Product"
import { StepsContainer } from "../Steps/StepsContainer"
import bannerImage from "./banner_picture.png"
import "./MainPage.scss"

const Banner = () => {
    return (
        <header className='main-page__banner banner'>
            <div className='container'>
                <div className='banner__row'>
                    <div className='banner__left-side'>
                        <h2 className='title'>Autumn Giveaways for FREE</h2>
                        <div className='banner__description'>
                            Participate in Autumn Giveaway and treat yourself to
                            nice and refreshing cosmetics for free
                        </div>
                    </div>

                    <div className='banner__image'>
                        <img src={bannerImage} alt='banner image' />
                    </div>
                </div>
            </div>
        </header>
    )
}

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='container'>
                    <div className='footer__row'>
                        <section className='footer__item'>
                            <h3 className='h3-title'>Privacy and Terms</h3>
                            <a href='#'>Privacy Policy</a>
                            <a href='#'>Terms of use</a>
                        </section>

                        <section className='footer__item'>
                            <h3 className='h3-title'>Need Help?</h3>
                            <a href='#'>mail@gmail.com</a>
                        </section>

                        <section className='footer__item'>
                            <h3 className='h3-title'>Social</h3>
                            <a href='#'>Facebook</a>
                            <a href='#'>Instagram</a>
                        </section>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='footer__bottom'>© All Rights Reserved</div>
            </div>
        </footer>
    )
}

const MainPage = () => {
    const [isStartedSteps, setIsStartedSteps] = React.useState(false)
    const navigate = useNavigate()

    const onSelect = () => {
        setIsStartedSteps(true)
        navigate("/step/1")
    }

    return (
        <div className='main-page'>
            <div className='main-page__container '>
                <Banner />
                <div className='main-page__content container'>
                    <Routes>
                        <Route
                            path='/step/:stepNum'
                            element={<StepsContainer />}
                        />
                        <Route
                            path='*'
                            element={<ProductContainer onSelect={onSelect} />}
                        />
                    </Routes>

                    <ContainerHowTo />
                </div>

                <Footer />
            </div>
        </div>
    )
    return (
        <div className='main-page'>
            <div className='main-page__container '>
                <Banner />

                <div className='main-page__content container'>
                    {isStartedSteps ? (
                        <StepsContainer />
                    ) : (
                        <ProductContainer onSelect={onSelect} />
                    )}

                    <ContainerHowTo />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export { MainPage }
