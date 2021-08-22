import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import Topbar from './Topbar';
import Footer from './Footer';
import { init, sendForm } from 'emailjs-com';
init("user_Boc5zsTh76kXC3qdiR1Fa");



const Contact = () => {


  const { register, handleSubmit, watch, formState: { errors } } = useForm("");
  const onSubmit = data => {
  console.log(data);

  const statusMessage = document.querySelector('.status-message');
  const form = document.querySelector('#contact-form');
  generateContactNumber();
  sendForm('default_service', 'template_32681fl', '#contact-form')
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      form.reset();
      setStatusMessage("Message envoyé!");
      statusMessage.className = "status-message success";
      setTimeout(() => {
        statusMessage.className = 'status-message'
      }, 5000)
    }, function (error) {
      console.log('FAILED...', error);
      setStatusMessage("Le message n'est pas passé...retentez !");
      statusMessage.className = "status-message failure";
      setTimeout(() => {
        statusMessage.className = 'status-message'
      }, 10000)
    });
}

  const validator = require("email-validator");
  ;
  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;
  const [contactNumber, setContactNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("Message");
  const generateContactNumber = () => {
  const numStr = "000000" + (Math.random() * 1000000 | 0);
  setContactNumber(numStr.substring(numStr.length - 6));
}

  return (
    <>
     <div className="entete">
       <Topbar />
      </div>
    <div className='contact'>
      <strong><h1 className='title-contact'>Contact</h1></strong>
       <p className='status-message'>{statusMessage}</p>
      <div className="container-contact-form">
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' name='contact_number' value={contactNumber} />
          {errors.user_name && errors.user_name.type === "required" && (
            <div role="alert">Name is required<br /></div>
          )}
          <p> Nom complet* </p>

          <div className="nom_complet">
            <span className="container-prénom">
              <input
              type='text'
              className="input-prénom"
              name='user_firstname'
              ref={register('')}
              maxLength='30'
              aria-invalid={errors.user_firstname ? "true" : "false"}
              { ...register('user_firstname', { required: true } )}
                  />
              <label className="prénom">  Prénom </label>
            </span>
            <span className="container-nom">
              <input
                type='text'
                className="input-nom"
                name='user_lastname'
                ref={register('')}
                maxLength='30'
                aria-invalid={errors.user_lastname ? "true" : "false"}
                {...register('user_lastname', { required: true })}
                />
              <label className="nom"> Nom </label></span>
          </div>
          <br />
          <div className="input-container">
            <p> Email* </p>
            <input type='email' name='user_email' ref={register('a@gmail.com')} onChange={validator.validate("test@email.com")}  />
            <br />
            <p className="label-message"> Message* </p>
          <div className="message-container">
            <textarea id="input-message" name='message' ref={register('a@gmail.com')} maxLength='1500' />
          </div>
          <br />
            <input type='submit' value='Envoyer' className="envoyer" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  </>
  );
}
export default Contact;
