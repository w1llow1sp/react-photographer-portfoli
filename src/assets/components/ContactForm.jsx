import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ReactComponent as RightArrowIcon } from '../icons/right-arrow.svg';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_lpwbqwa',
                'template_42e2qsd',
                form.current,
                'HIryxQBDTsY3Gwl0d'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className='contact-form-section-container d-flex flex-column' id='contact'>
            <h1>
                <span>Curiosity,</span>
                <br></br>
                piqued.
            </h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className='email-input d-flex'>
                    <input
                        type='email'
                        name='email'
                        placeholder='Your email'
                    ></input>
                    <button type='submit'>
                        {' '}
                        <RightArrowIcon height={20} />
                    </button>
                </div>
            </form>
            <p>
                Contact us to be the first to know about photo collection
                launches,promotions, and more.
            </p>
        </div>
    );
};

export default ContactForm;
