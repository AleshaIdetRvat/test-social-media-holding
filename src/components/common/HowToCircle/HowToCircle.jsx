import React from "react"
import classNames from "classnames"
import "./HowToCircle.scss"

const HowToCircle = ({ className, subtitle = "", children, ...props }) => {
    const style = classNames({ "how-to-circle": true }, className)

    return (
        <div className={style} {...props}>
            <div className='how-to-circle__body'>
                <div className='how-to-circle__circle'>
                    <div className='how-to-circle__circle-inner'>
                        {children}
                    </div>
                </div>
                <span className='how-to-circle__subtitle'>{subtitle}</span>
            </div>
        </div>
    )
}

export { HowToCircle }
