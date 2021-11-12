import React from "react"
import mainImage from "./step_2_image.png"
import pressHereImage from "./step_2_press_here_arrow.svg"
import "./Step.scss"

const Step2 = ({ nextStep }) => {
    return (
        <div className='step-2 step'>
            <div className='step-2__press-here press-here'>
                <h3 className='press-here__title'>Press Here</h3>
                <img
                    className='press-here__arrow-img'
                    src={pressHereImage}
                    alt='press here'
                />
            </div>

            <div className='step__row step-2__row'>
                <div className='step__content'>
                    <h2 className='step__number title'>Step 2</h2>

                    <div className='step__description  step-description'>
                        <h1 className='step-description__title step-2-description__title title'>
                            Share Facebook post
                        </h1>
                        <p className='step-description__text  paragraph'>
                            To participate in this giveaway please share this
                            giveaway offer with your friends. Not only your
                            friends will appreciate this offer but you will
                            receive $10 Amazon Gift Card for each of your
                            friends that participates in this giveaway!
                        </p>
                    </div>

                    <button
                        className='step__continue-btn black-btn'
                        onClick={nextStep}
                    >
                        continue
                    </button>
                </div>

                <div className='step__image step-2__image'>
                    <img src={mainImage} alt='main image' />
                </div>
            </div>
        </div>
    )
}

export { Step2 }
