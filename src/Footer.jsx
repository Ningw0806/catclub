import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer-title">Let's Connect!</h2>
            <ul className="footer-social-list cat-list">
                <li className="social-list-item">
                    <a className="social-list-link" href="https://www.facebook.com/profile.php?id=100091949351853"><i className="gg-facebook"></i></a>
                </li>
                <li className="social-list-item">
                    <a className="social-list-link" href="https://www.instagram.com/purrfect6105/"><i className="gg-instagram"></i></a>
                </li>
                <li className="social-list-item">
                    <a className="social-list-link" href="https://twitter.com/Cats"><i className="gg-twitter"></i></a>
                </li>
            </ul>

            <p className="privacy">Copyright © PURRFECT COMPANIONS CLUB All rights reserved.</p>
        </footer>
    );
}

export default Footer;