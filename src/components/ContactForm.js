import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';

const ContactForm = () => {
  const contactFormSchema = yup.object({
    name: yup
      .string('Sorry, invalid format here')
      .required('Sorry, name is a required field')
      .max(80, 'name must have a maximum of 80 characters'),
    email: yup
      .string()
      .required('Sorry, email is a required field')
      .email('Sorry, invalid format here'),
    message: yup.string().required('Sorry, message is a required field'),
  });

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };

    emailjs
      .send(
        'service_c5oueab',
        'template_tz6qyyj',
        templateParams,
        '1hHyfPeHUq1pFxxJh',
      )
      .then(
        (result) => {
          // console.log('email sent', result.text, result.status);

          resetField('name');
          resetField('email');
          resetField('message');
        },
        (error) => {
          console.log('error', error, error.text);
        },
      );
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="NAME" {...register('name')} />
      {<p className="error">{errors.name?.message}</p>}

      <input type="text" placeholder="EMAIL" {...register('email')} />
      {<p className="error">{errors.email?.message}</p>}

      <textarea
        type="text"
        placeholder="MESSAGE"
        rows={4}
        cols={100}
        {...register('message')}
      />
      {<p className="error">{errors.message?.message}</p>}

      <button type="submit">SEND MESSAGE</button>
    </form>
  );
};

export default ContactForm;
