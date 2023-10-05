import './Home.css'

function Home() {
    return (
        <div className="main-element">
            <h2 className="welcome-text">Your Pet, Our Passion.</h2>
            <div>
                <p className="main-item">
                    Welcome to Purrfect Companion Club, the ultimate destination for cat lovers around the world! Our website is dedicated to everything related to cats, from their care and health to their behavior and personalities. Our mission is to provide a comprehensive resource for cat owners and enthusiasts, with a focus on promoting responsible pet ownership and providing tips and advice to ensure that your furry feline friend is happy, healthy, and well-loved.
                </p>
                <p className="main-item">
                    At Purrfect Companion Club, you'll find a wealth of information on all things cat-related, including nutrition and diet, grooming and hygiene, training and behavior, and much more. We also feature engaging and informative articles on the latest news and trends in the world of cats, along with heartwarming stories and cute cat photos to brighten up your day.
                </p>

                <div className="image-container">
                    <img src="/catwithcloth.png" className="cover-image" alt='An orange cat wearing a black jumpsuit, who is the coolest cat in our club.' />
                    <img src="/standingcat.png" className="cover-image" alt='A white tabby cat standing on the table, who is the gentlest cat in our club.' />
                </div>
            </div>
        </div>
    );
}

export default Home;