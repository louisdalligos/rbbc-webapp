import React from 'react';
import Link from 'next/link';
import { Formik, Field, Form } from 'formik';
import InputIcon from '@components/inputs/input-icon';
import InputError from '@components/inputs/input-error';
import { inquiryFormValidation } from '@utils/validation';

export default function InquiryFormFooter({ title, propertyTitle }) {
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setError(null);
      setSuccess(null);
    }, 3000);
  }, [error, success]);

  return (
    <Formik
      initialValues={{
        fullname: '',
        email: '',
        phone: '',
        message: `I am interested in ${propertyTitle}`,
      }}
      validationSchema={inquiryFormValidation}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const data = await fetch('/api/send-inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.fullname,
            email: values.email,
            phone: values.phone,
            message: values.message,
          }),
        });

        data.status === 400
          ? setError('Error sending. Please try again')
          : setSuccess('Your message has been sent');

        setSubmitting(false);

        // if success, clear our form
        if (data.status === 200) {
          resetForm({
            values: {
              fullname: '',
              email: '',
              phone: '',
              message: values.message,
            },
          });
        }
      }}
    >
      {({ values, isSubmitting, errors, handleChange }) => (
        <Form>
          <h4 className="mb-4 text-xl">{title}</h4>
          <InputIcon
            name="fullname"
            placeholder="Full name"
            icon="fa-user"
            type="text"
            onChange={handleChange}
            value={values.fullname}
          />
          {errors.fullname && <InputError field="fullname" />}

          <InputIcon
            name="email"
            placeholder="Email"
            icon="fa-envelope"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <InputError field="email" />}

          <InputIcon
            name="phone"
            placeholder="Phone"
            icon="fa-phone"
            type="text"
            onChange={handleChange}
            value={values.phone}
          />
          {errors.phone && <InputError field="phone" />}

          <Field
            as="textarea"
            name="message"
            className="border w-full px-3 py-2 text-sm focus:outline-none focus:border-green-400 text-gray-700 placeholder-gray-600"
            value={values.message}
          />

          <button
            type="submit"
            className="bg-green-500 active:bg-blue-700 text-white py-2 w-full rounded-full text-sm my-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
          </button>

          <p className="text-sm text-green-600">{success && success}</p>
          <p className="text-sm text-red-600">{error && error}</p>

          <small className="text-gray-700">
            By submitting, you agree to our{' '}
            <Link href="/terms">
              <a className="underline">terms of use</a>
            </Link>
            .
          </small>
        </Form>
      )}
    </Formik>
  );
}
