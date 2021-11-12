import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Step1 } from "./Step1"
import { Step2 } from "./Step2"
import { Step3 } from "./Step3"
import { Step4 } from "./Step4"
import { Step5 } from "./Step5"
import { StepByStep } from "./StepByStep/StepByStep"
import "./StepsContainer.scss"

const StepsContainer = () => {
    const navigate = useNavigate()

    const { stepNum } = useParams()

    const nextStep = () => navigate(`/step/${+stepNum + 1}`)

    window.nextStep = nextStep

    return (
        <div className='steps'>
            <div className='steps__body'>
                <div className='steps__row'>
                    <StepByStep />

                    <div className='steps__content'>
                        {(() => {
                            switch (Number(stepNum)) {
                                case 1:
                                    return <Step1 nextStep={nextStep} />

                                case 2:
                                    return <Step2 nextStep={nextStep} />

                                case 3:
                                    return <Step3 nextStep={nextStep} />

                                case 4:
                                    return <Step4 nextStep={nextStep} />

                                case 5:
                                    return <Step5 nextStep={nextStep} />

                                default:
                                    return navigate(`/`)
                            }
                        })()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { StepsContainer }
