import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name, email, message);
    setEmail('');
    setMessage('');
    setName('');
  };

  return (
    <form
      className="form-container"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <input
        placeholder="NAME"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <input
        placeholder="EMAIL"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <textarea
        placeholder="MESSAGE"
        value={message}
        rows={4}
        cols={100}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />

      <button type="submit">SEND MESSAGE</button>
    </form>
  );
};

export default ContactForm;
