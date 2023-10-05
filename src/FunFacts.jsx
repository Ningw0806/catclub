import './FunFacts.css';
import Carousel from './Carousel';
import catImages from './catImages';

function FunFacts({ setPage }) {
    return (
        <>
            <h2 className="funfacts-title">Do you know these <span className="funfact-subtitle">Fun Facts</span> about cats?
                <br />
                <span className="funfacts-content">Let's explore together!</span></h2>

            <Carousel catImages={catImages} />
            <p className="invite-text">Want to connect with fellow cat lovers? <a className="join-link" href="/contact.html" onClick={(e) => { e.preventDefault(); setPage("Contact") }}>Join our club!</a></p>
        </>
    );
}

export default FunFacts;