import classNames from "classnames"
import React from "react"
import { useLocation } from "react-router-dom"
import "./StepByStep.scss"

const StepByStep = () => {
    const { pathname } = useLocation()
    const currentStep = Number(pathname[pathname.length - 1])

    const steps = [1, 2, 3, 4, 5]

    return (
        <div className='steps__indicator step-by-step'>
            <div className='step-by-step__column'>
                {steps.map((step) => {
                    const styles = classNames({
                        "step-by-step__item": true,
                        "step-by-step__item--first": step === 1,
                        "step-by-step__item--cheked": step <= currentStep,
                        "step-by-step__item--current": step === currentStep,
                    })

                    return (
                        <div className={styles}>
                            <div className='step-by-step__stick' />
                            <div className='step-by-step__ball'>{step}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { StepByStep }
