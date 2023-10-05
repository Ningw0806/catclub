import { useRef, useState, useId } from "react";
import Button from './Button';
import './Modal.css'

function Modal() {
    const dialogRef = useRef();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('Felinophile')
    const [favorite, setFavorite] = useState('');
    const id = useId();
    const [invalidName, setInvalidName] = useState('');
    const [invalidEmail, setInvalidEmail] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        setInvalidName('');
        setInvalidEmail('');

        if (!name || !email) {
            setInvalidName(name ? '' : '*Please fill in your name');
            setInvalidEmail(email ? '' : '*Please fill in your email');
            return;
        }

        if (!email.match("@") && email !== '') {
            setInvalidEmail('Email should included @');
            return;
        }

        dialogRef.current.close();
        setTitle(name);

    }

    return (
        <>
            <Button visual="button" onClick={() => dialogRef.current.showModal()}>
                Let's Join our Club!
            </Button>

            <dialog ref={dialogRef}>
                <form className="modal-form"
                    onSubmit={submitForm}>

                    <label htmlFor={`${id}-name`}>Name:</label>
                    <input
                        id={`${id}-name`}
                        value={name}
                        onInput={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    {invalidName && <div className="error">{invalidName}</div>}

                    <label htmlFor={`${id}-age`}>Age:</label>
                    <input
                        id={`${id}-age`}
                        value={age}
                        onInput={(e) => {
                            setAge(e.target.value);
                        }}
                    />

                    <label htmlFor={`${id}-email`}>Email:</label>
                    <input
                        id={`${id}-email`}
                        value={email}
                        onInput={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    {invalidEmail && <div className="error">{invalidEmail}</div>}

                    <label htmlFor={`${id}-favorite`}>Favorite Cat Breed:</label>
                    <select id={`${id}-favorite`} onChange={(e) => setFavorite(e.target.value)} value={favorite}>
                        <option value="abyssinianCat">Abyssinian Cat</option>
                        <option value="bengalCat">Bengal Cat</option>
                        <option value="birmanCat">Birman Cat</option>
                        <option value="cornishRexCat">Cornish Rex Cat</option>
                        <option value="japaneseBobtailCats">Japanese Bobtail Cat</option>
                        <option value="scottishFoldCat">Scottish Fold Cat</option>
                    </select>

                    <div className="submit-button">
                        <Button
                            type="submit"
                            visual="link">
                            Join
                        </Button>
                    </div>
                </form>
                <div className="close-button">
                    <Button visual="link" onClick={() => dialogRef.current.close()}>
                        <i class="gg-close"></i>
                    </Button>
                </div>
            </dialog>

            <p className="welcome-content">Hi {title}! </p>
            <p className="welcome-content">Welcome to Purrfect Companion Club! 🎉</p>
        </>
    );
}

export default Modal;