import GlobalNav from './GlobalNav';
import './Header.css';

function Header({ setPage }) {
    return (
        <header className="header">
            <div className="header-container">
                <img
                    src="/catpaws.png"
                    className="header-logo"
                    alt="A pink cat paw which is Purrfect Companions Club's logo."
                />

                <h1 className="header-title">
                    Purrfect Companions Club
                </h1>

            </div>
            <GlobalNav className="header-nav" setPage={setPage} />
        </header>
    );
}

export default Header;