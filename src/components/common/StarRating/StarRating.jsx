import React from "react"
import StarRatings from "react-star-ratings"

const starPath =
    "M12.4828 4.62318C12.4414 4.49589 12.3314 4.40312 12.199 4.3839L8.47896 3.84332L6.81526 0.472388C6.75605 0.352389 6.63383 0.276428 6.50002 0.276428C6.3662 0.276428 6.24399 0.352389 6.18477 0.472388L4.52099 3.84332L0.801004 4.3839C0.668606 4.40312 0.558567 4.49589 0.517223 4.62315C0.475856 4.75044 0.510356 4.89015 0.606192 4.98355L3.29793 7.60746L2.66259 11.3125C2.63995 11.4444 2.69419 11.5777 2.80244 11.6564C2.86368 11.7009 2.93622 11.7235 3.00911 11.7235C3.06508 11.7235 3.12124 11.7102 3.17266 11.6831L6.5 9.93379L9.8272 11.6831C9.94568 11.7454 10.0892 11.735 10.1974 11.6563C10.3057 11.5777 10.36 11.4444 10.3373 11.3125L9.70179 7.60746L12.3938 4.98353C12.4896 4.89015 12.5242 4.75044 12.4828 4.62318Z"

const StarRating = ({ rating = 0, changeRating, ...props }) => {
    return (
        <div {...props}>
            <StarRatings
                rating={rating}
                changeRating={changeRating}
                starRatedColor='blue'
                numberOfStars={5}
                starDimension='16px'
                starSpacing='0px'
                name='rating'
                svgIconPath={starPath}
                svgIconViewBox='0 0 13 13'
                starRatedColor='#000'
                starEmptyColor='#AAAAAA'
                starHoverColor='#000'
            />
        </div>
    )
}

export { StarRating }
