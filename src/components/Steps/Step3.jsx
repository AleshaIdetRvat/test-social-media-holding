import React from "react"
import mainImage from "./step_1_image.png"
import "./Step.scss"

const Step3 = ({ nextStep }) => {
    return (
        <div className='step-3 step'>
            <div className='step__row'>
                <div className='step__content'>
                    <h2 className='step__number title'>Step 3</h2>

                    <div className='step__description step-description'>
                        <h1 className='step-description__title title'>
                            Amazon Prime
                        </h1>
                        <p className='step-description__text paragraph'>
                            Do you have an Amazon Prime account?
                        </p>
                        <p className='step-description__text paragraph'>
                            To be able to participate in this giveaway you need
                            to have Amazon Prime.
                        </p>
                    </div>

                    <div className='step__btns-block'>
                        <button className='black-btn' onClick={nextStep}>
                            Yes, i have
                        </button>
                        <button
                            className='step-3__no-btn black-btn'
                            onClick={nextStep}
                        >
                            no, i don’t have
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

export { Step3 }
