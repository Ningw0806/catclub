import './Carousel.css';
import { useState } from 'react';

function Carousel({ catImages }) {
    const [currentImage, setCurrentImage] = useState(0);

    const previousImage = () => {
        setCurrentImage((previousImage) =>
            (previousImage === catImages.length - 1 ? 0 : previousImage + 1));
    }

    const nextImage = () => {
        setCurrentImage((previousImage) =>
            (previousImage === 0 ? catImages.length - 1 : previousImage - 1));
    }

    return (
        <div className="carousel">
            <div className="cat-images">
                <img
                    className="cat-image"
                    src={catImages[currentImage].path}
                    alt={`${catImages[currentImage].name}`}
                />
            </div>
            <div>
                <p className="cat-image-content">{catImages[currentImage].name}</p>
            </div>

            <div className="image-button">
                <button aria-label="Click the left arrow for previous image" className='arrow-left' onClick={previousImage}><i className="gg-arrow-left-o"></i></button>
                <button aria-label="Click the right arrow for next image" className='arrow-right' onClick={nextImage}><i className="gg-arrow-right-o"></i></button>
            </div>

        </div>
    );
}

export default Carousel;