import {ErrorMessage } from 'formik'

export default function InputError({ field }) {
  return(
    <div className="text-red-500 text-xs -mt-2 mb-2 text-left"><ErrorMessage name={field} /></div>
  )
}
