import React from "react"
import "./Step.scss"
import mainImage from "./step_1_image.png"

const Step1 = ({ nextStep }) => {
    return (
        <div className='step-1 step'>
            <div className='step__row'>
                <div className='step__content'>
                    <h2 className='step__number title'>Step 1</h2>

                    <div className='step__description step-description'>
                        <h1 className='step-description__title title'>
                            Lorem ipsum dolor sit amet
                        </h1>
                        <p className='step-description__text paragraph'>
                            Aliquam urna arcu, scelerisque vel viverra sed,
                            pellentesque sit amet metus. Curabitur at luctus
                            massa. Vestibulum pretium sem tortor, vitae mattis
                            odio accumsan vitae. Fusce id luctus erat:
                        </p>
                        <ul className='step-description__list paragraph'>
                            <li>Mauris rutrum interdum condimentum.</li>
                            <li>Donec commodo quis arcu eget pretium.</li>
                        </ul>
                    </div>

                    <button
                        className='step__continue-btn black-btn'
                        onClick={nextStep}
                    >
                        agree and continue
                    </button>
                </div>

                <div className='step__image'>
                    <img src={mainImage} alt='main image' />
                </div>
            </div>
        </div>
    )
}

export { Step1 }
