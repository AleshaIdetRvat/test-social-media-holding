import React from "react"
import classNames from "classnames"
import { HowToCircle } from "../common/HowToCircle/HowToCircle"
import ChooseProduct from "./TestAndShare.svg"
import BuyProductIcon from "./BuyProduct.svg"
import TestAndShare from "./ChooseProduct.svg"
import Get from "./Get.svg"
import arrowIcon from "./arrow.svg"
import useMedia from "use-media"
import "./ContainerHowTo.scss"

const howToItems = [
    { icon: ChooseProduct, subtitle: "Choose product" },
    { icon: BuyProductIcon, subtitle: "Buy product" },
    { icon: TestAndShare, subtitle: "Test and share review" },
    { icon: Get, subtitle: "Get 100% money back" },
]

const ContainerHowTo = ({ className, ...props }) => {
    const isMobile = useMedia({ maxWidth: 768 })

    const style = classNames({ "how-to-container": true }, className)

    return (
        <div className={style} {...props}>
            <div className='how-to-container__body'>
                <h2 className='how-to-container__title title'>
                    How does it work?
                </h2>

                <div className='how-to-container__row'>
                    <HowToCircle>
                        Easy
                        <br />
                        as
                        <br />
                        1-2-3
                    </HowToCircle>
                    {howToItems.map(({ icon, subtitle }, i) => {
                        return (
                            <>
                                {isMobile && i % 2 !== 0 ? (
                                    ""
                                ) : (
                                    <img
                                        className='how-to-container__arrow'
                                        src={arrowIcon}
                                        alt='arrow'
                                    />
                                )}

                                <HowToCircle subtitle={subtitle}>
                                    <img src={icon} alt={subtitle} />
                                </HowToCircle>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export { ContainerHowTo }
