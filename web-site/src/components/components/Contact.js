import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import { init, sendForm } from 'emailjs-com';
init("user_Boc5zsTh76kXC3qdiR1Fa");


// eslint-disable-next-line react-hooks/rules-of-hooks



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
      setStatusMessage("Message sent!");
      statusMessage.className = "status-message success";
      setTimeout(() => {
        statusMessage.className = 'status-message'
      }, 5000)
    }, function (error) {
      console.log('FAILED...', error);
      setStatusMessage("Failed to send message! Please try again later.");
      statusMessage.className = "status-message failure";
      setTimeout(() => {
        statusMessage.className = 'status-message'
      }, 5000)
    });
}
  const message = watch('message') || "";
  // const messageCharsLeft = 1500 - message.length;
  const [contactNumber, setContactNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("Message");
  const generateContactNumber = () => {
  const numStr = "000000" + (Math.random() * 1000000 | 0);
  setContactNumber(numStr.substring(numStr.length - 6));
}

  return (
    <div className='contact'>
      <strong><h1 className='title'>Contact</h1></strong>
      <p className='status-message'>{statusMessage}</p>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <input type='hidden' name='contact_number' value={contactNumber} />
        {errors.user_name && errors.user_name.type === "required" && (
          <div role="alert">Name is required<br /></div>
        )}
        <p>Nom complet* </p>
        <input
        type='text'
        name='user_name'
        ref={register('')}
        maxLength='30'
        aria-invalid={errors.user_name ? "true" : "false"}
        { ...register('user_name', { required: true } )}
         />

        <br />
        <p> Email* </p>
        <input type='email' name='user_email' ref={register('example')}  />
        <br />
        <p> Message* </p>
        <textarea name='message' ref={register('example')} maxLength='1500' />
        <br />
        <input type='submit' value='Send' />
      </form>

    </div>
  );
}
export default Contact;
