import React from "react"
import mainImage from "./step_1_image.png"
import amazonLogo from "./step_5_amazon_logo.svg"
import "./Step.scss"

const Step5 = ({ nextStep }) => {
    return (
        <div className='step-5 step'>
            <div className='step-5__row step__row'>
                <div className='step__content'>
                    <h2 className='step__number title'>Step 5</h2>

                    <div className='step-5__description'>
                        <h1 className='step-5-description__title title'>
                            Buy&nbsp;and&nbsp;Provide&nbsp;order&nbsp;ID to our
                            Manager
                        </h1>

                        <div className='step-5-description__text-blocks'>
                            <div className='step-5-description__text-block'>
                                <p className='paragraph'>
                                    Click the button{" "}
                                    <span className='bold-text'>
                                        GO TO AMAZON
                                    </span>{" "}
                                    and{" "}
                                    <span className='bold-text'>
                                        Buy a Product
                                    </span>
                                </p>

                                <button
                                    className='step__continue-btn black-btn'
                                    onClick={nextStep}
                                >
                                    Go to amazon{" "}
                                    <img src={amazonLogo} alt='amazon logo' />
                                </button>
                            </div>

                            <div className='step-5-description__text-block'>
                                <p className='paragraph'>
                                    Click on the button below and{" "}
                                    <span className='bold-text'>
                                        Provide Order ID to our Manager
                                    </span>{" "}
                                    in FB Messenger
                                </p>

                                <span className='step-5-description__text-block-bottom-text'>
                                    (If you have any questions, you can ask them
                                    to our Manager)
                                </span>

                                <button
                                    className='step__continue-btn black-btn'
                                    onClick={nextStep}
                                >
                                    provide order id
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='step__image'>
                    <img src={mainImage} alt='main image' />
                </div>
            </div>
        </div>
    )
}

export { Step5 }
