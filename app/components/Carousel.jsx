"use client"
import { useEffect, useState } from "react"

const imageURLS = [
    "https://cdn.mos.cms.futurecdn.net/KHQb3Ny62YxXnCEon4mm43-650-80.jpg.webp",
    "https://www.universityofcalifornia.edu/sites/default/files/styles/article_default_banner/public/puppy-playing.jpg?itok=yuBX5Jb-",
    "https://whyy.org/wp-content/uploads/2022/07/2019-02-8-kpaynter-acct-5-768x432.jpeg"
];

const Carousel = () => {

    const [imageURLIndex, setIndex] = useState(0);

    const increaseIndex = () => {
        if (imageURLIndex === imageURLS.length - 1) return setIndex(0);
        setIndex(imageURLIndex + 1);
    }

    const decreaseIndex = () => {
        if (imageURLIndex === 0) return setIndex(imageURLS.length - 1);
        setIndex(imageURLIndex - 1);
    }

    useEffect(() => {
        const autoSwipe = setTimeout(increaseIndex, 5000);
        return () => {
            clearInterval(autoSwipe)
        }
    }, [imageURLIndex])

    return (
        <div className="carousel">
            <div className="carousel__container">
                {imageURLS.map(url => {
                    return (
                        <img
                            src={url}
                            key={url}
                            alt=""
                            className="carousel__container__image"
                            style={{ translate: `${-100 * imageURLIndex}%` }}
                        />
                    )
                })}
            </div>
            <button onClick={decreaseIndex} className="carousel__button" style={{ left: 0 }}>&#171;</button>
            <button onClick={increaseIndex} className="carousel__button" style={{ right: 1 }}>&#187;</button>
        </div>
    );
}

export default Carousel;