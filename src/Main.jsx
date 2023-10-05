import Trending from './Trending';
import Breeds from './Breeds';
import FunFacts from './FunFacts';
import Contact from './Contact';
import Home from './Home';

function Main({ page, setPage }) {

    return (
        <main id="main-body-id">
            {(page === 'Home') && <Home />}
            {(page === 'Trending') && <Trending />}
            {(page === 'Fun Facts') && <FunFacts setPage={setPage} />}
            {(page === 'Breeds') && <Breeds />}
            {(page === 'Contact') && <Contact />}
        </main>
    );
}

export default Main;