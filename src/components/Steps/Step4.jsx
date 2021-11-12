import React from "react"
import mainImage from "./step_1_image.png"
import customMarker from "./step_4_,marker_gift.svg"
import "./Step.scss"

const Step4 = ({ nextStep }) => {
    return (
        <div className='step-4 step'>
            <div className='step__row'>
                <div className='step__content'>
                    <h2 className='step__number title'>Step 4</h2>

                    <div className='step__description step-description'>
                        <h1 className='step-description__title title'>
                            How&nbsp;to&nbsp;Buy&nbsp;a&nbsp;Product with 100%
                            BONUS!
                        </h1>

                        <ul className='step-4__custom-list step-custom-list'>
                            <li className='step-custom-list__item'>
                                <div className='step-custom-list__marker'>
                                    1
                                </div>
                                <p className='step-custom-list__item-text paragraph'>
                                    You need to Buy our Product on Amazon at the
                                    specified price $20.89!
                                </p>
                            </li>
                            <li className='step-custom-list__item'>
                                <div className='step-custom-list__marker'>
                                    2
                                </div>
                                <p className='step-custom-list__item-text paragraph'>
                                    After the purchase - Send us your Order
                                    Number or the Screenshot to our manager in
                                    FB Messenger
                                </p>
                            </li>
                            <li className='step-custom-list__item'>
                                <div className='step-custom-list__marker'>
                                    3
                                </div>
                                <p className='step-custom-list__item-text paragraph'>
                                    When you receive the product please use it
                                    and share product reviews
                                </p>
                            </li>
                            <li className='step-custom-list__item'>
                                <div className='step-custom-list__marker'>
                                    4
                                </div>
                                <p className='step-custom-list__item-text paragraph'>
                                    We will send you{" "}
                                    <span className='bold-text'>
                                        the 25$ Amazon Gift Card
                                    </span>{" "}
                                    code within 24 hours after we get short
                                    review from you.
                                </p>
                            </li>
                            <li className='step-custom-list__item'>
                                <div className='step-custom-list__marker'>
                                    {" "}
                                    <img src={customMarker} alt='gift' />
                                </div>
                                <p className='step-custom-list__item-text paragraph'>
                                    As a result, you will receive
                                    <br /> our Product Free!
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className='step-4__btns-block step__btns-block'>
                        <button className='black-btn' onClick={nextStep}>
                            get offer
                        </button>
                        <button
                            className='step-4__dont-like-btn'
                            onClick={nextStep}
                        >
                            I don't like offer terms
                        </button>
                    </div>
                </div>

                <div className='step__image'>
                    <img src={mainImage} alt='main image' />
                </div>
            </div>
        </div>
    )
}

export { Step4 }
