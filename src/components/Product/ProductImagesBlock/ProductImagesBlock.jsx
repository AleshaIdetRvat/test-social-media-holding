import React from "react"
import Slider from "react-slick"
import sliderArrowIcon from "./arrow_slider.svg"
import "./ProductImagesBlock.scss"

const ImagesSlider = ({ images, setSlideIndex }) => {
    const settings = {
        afterChange: (current) => {
            setSlideIndex(current)
        },
        dots: false,
        focusOnSelect: true,
        speed: 200,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        easing: "easy",
        nextArrow: (
            <button>
                <img
                    className='product-images-slider__arrow product-images-slider__arrow-next'
                    src={sliderArrowIcon}
                />
            </button>
        ),
        prevArrow: (
            <button className='product-images-slider__btn'>
                <img
                    className='product-images-slider__arrow product-images-slider__arrow-prev'
                    src={sliderArrowIcon}
                />
            </button>
        ),
    }

    return (
        <div className='product-images-block__slider product-images-slider'>
            <div className='product-images-slider__container'>
                <Slider className='product-images-slider__row' {...settings}>
                    {images.map((image) => (
                        <div className='product-images-slider__item'>
                            <img src={image} alt='Image' />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

const ProductImagesBlock = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = React.useState(0)

    return (
        <div className='product__images product-images-block'>
            <div className='product-images-block__body'>
                <div className='product-images-block__row'>
                    <ImagesSlider
                        images={images}
                        setSlideIndex={setSelectedImageIndex}
                    />
                    <div className='product-images-block__current-img'>
                        <img
                            src={images[selectedImageIndex]}
                            alt='current-image'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProductImagesBlock }
