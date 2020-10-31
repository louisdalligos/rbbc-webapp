import * as Yup from 'yup'

const inquiryFormValidation = Yup.object({
  fullname: Yup.string()
    .required('Please enter your full name'),
  email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
  phone: Yup.string()
    .required('Please enter your phone number')
    .matches(/^(09|\+639)\d{9}$/, "Please enter a valid number e.g 091912345678")
})

export { inquiryFormValidation }
