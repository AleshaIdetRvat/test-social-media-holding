import React from "react"
import { ProductImagesBlock } from "./ProductImagesBlock/ProductImagesBlock"
import { StarRating } from "../common/StarRating/StarRating"
import image_1 from "./image_1.png"
import image_2 from "./image_2.png"
import image_3 from "./image_3.png"
import amazonLogo from "./amazon_logo.svg"
import "./Product.scss"

const ProductImagesExample = [
    image_1,
    image_2,
    image_3,
    image_1,
    image_2,
    image_3,
]

const ProductInfo = ({
    onSelect,
    starRating,
    category,
    reviews,
    title,
    description,
    itemsLeft,
    price,
}) => {
    return (
        <div className='product__info product-info'>
            <div className='product-info__body'>
                <header className='product-info__header'>
                    <span className='product-info__category'>{category}</span>
                    <div className='product-info__rating'>
                        <StarRating
                            className='product-info__stars'
                            rating={starRating}
                        />
                        <span className='product-info__reviews'>{`(${reviews} reviews)`}</span>
                    </div>
                </header>

                <h2 className='product-info__title'>{title}</h2>

                <div className='product-info__subhead-container'>
                    <div className='product-info__description'>
                        <h3 className='product-info__description-title h3-title'>
                            Description:
                        </h3>
                        <p className='product-info__description-text paragraph'>
                            {description}
                        </p>
                    </div>

                    <div className='product-info__items-left'>
                        items left: {itemsLeft}
                    </div>

                    <hr className='product-info__separator' />

                    <div className='product-info__price-block'>
                        <span className='product-info__old-price'>{price}</span>
                        <span className='product-info__new-price'>
                            $0.00 free
                        </span>
                    </div>

                    <button
                        className='product-info__select-btn black-btn'
                        onClick={onSelect}
                    >
                        select
                    </button>

                    <div className='product-info__ship'>
                        <img src={amazonLogo} alt='ship' />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Product = ({
    onSelect,
    category,
    starRating,
    reviews,
    title,
    description,
    itemsLeft,
    price,
    productImages,
    whoItsForDescription,
    whatItIsDescription,
    whatItDoesDescriptionList,
    ingredientsDescription,
}) => {
    const [isReadMore, setIsReadMore] = React.useState(false)

    return (
        <div className='product'>
            <div className='product__body'>
                <div className='product__row'>
                    <ProductImagesBlock images={productImages} />
                    <ProductInfo
                        onSelect={onSelect}
                        starRating={starRating}
                        category={category}
                        reviews={reviews}
                        title={title}
                        description={description}
                        itemsLeft={itemsLeft}
                        price={price}
                    />
                </div>

                <div className='product__overview'>
                    <h2 className='title'>Overview</h2>
                    <div className='product__overview-column'>
                        <section className='product__overview-item product__for'>
                            <h3 className='h3-title'>Who It's For</h3>
                            <p className='paragraph'>{whoItsForDescription}</p>
                        </section>

                        <section className='product__overview-item product__is'>
                            <h3 className='h3-title'>What It Is</h3>
                            <p className='paragraph'>{whatItIsDescription}</p>
                        </section>

                        <section className='product__overview-item product__does'>
                            <h3 className='h3-title'>What It Does</h3>
                            <ul className='product__does-list'>
                                {whatItDoesDescriptionList.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </section>
                        {isReadMore ? (
                            <section className='product__overview-item product__ingredients'>
                                <h3 className='h3-title'>Key Ingredients</h3>
                                <p className='paragraph'>
                                    {ingredientsDescription}
                                </p>
                            </section>
                        ) : (
                            <button
                                onClick={() => setIsReadMore(true)}
                                className='product__overview-readmore'
                            >
                                Read more...
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductContainer = ({ onSelect }) => {
    return (
        <Product
            onSelect={onSelect}
            productImages={ProductImagesExample}
            category={"Best seller"}
            starRating={4.5}
            reviews={"1713"}
            title={"Acne Treatment Cystic Acne heals, repairs & renews"}
            description={
                "Addictively refreshing gel-cream leaves skin plump, dewy, glowing."
            }
            itemsLeft={12}
            price={"US$25.89"}
            whoItsForDescription='Very Dry, Dry, Dry Combination Skin (Type 1, 2)'
            whatItIsDescription='Step 3 in our customized 3-Step Skincare System. Dermatologist-developed face moisturizer softens, smooths, improves. Leaves skin glowing.'
            whatItDoesDescriptionList={[
                "Silky lotion delivers 8-hour hydration.",
                "Slips on easily, absorbs quickly.",
                "Helps strengthen skin’s own moisture barrier so more moisture stays in. Skin that holds onto moisture has a youthful-looking glow.",
            ]}
            ingredientsDescription='Sunflower Seed Cake, Barley Extract and Cucumber Fruit Extract help strengthen skin’s barrier, improve its resiliency, and balance and retain skin’s moisture levels. Hyaluronic acid acts as a natural moisture magnet/humectant.'
        />
    )
}

export { ProductContainer }
