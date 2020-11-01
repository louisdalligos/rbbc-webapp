import { Formik, Field, Form } from 'formik';
import InputIcon from '@components/inputs/input-icon';
import InputError from '@components/inputs/input-error';
import { inquiryFormValidation } from '@utils/validation';

export default function InquiryFormSidebar() {
  return (
    <Formik
      initialValues={{
        fullname: '',
        email: '',
        phone: '',
        message: 'I am interested in 2637 22nd St.',
      }}
      validationSchema={inquiryFormValidation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm({
            values: {
              fullname: '',
              email: '',
              phone: '',
              message: '',
            },
          });
        }, 400);
      }}
    >
      {({ values, isSubmitting, errors, handleChange }) => (
        <Form>
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
        </Form>
      )}
    </Formik>
  );
}
