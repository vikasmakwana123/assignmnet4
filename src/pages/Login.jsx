import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
 password: Yup.string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters long')
  .matches(/[a-z]/, 'Must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
  .matches(/\d/, 'Must contain at least one digit')
  .matches(/[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/?]/, 'Must contain at least one special character'),
  phoneno: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  pincode: Yup.string().matches(/^[0-9]{6}$/, 'Pincode must be 6 digits').required('Pincode is required'),
});

const Login = () => {
  return (
    <div
      style={{
        padding: '30px 20px',
        width: '90%',
        maxWidth: '500px',
        margin: 'auto',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #f0f4f7, #d9e2ec)',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#2c3e50',
        }}
      >
        Login
      </h2>

      <Formik
        initialValues={{
          username: '',
          password: '',
          phoneno: '',
          address: '',
          email: '',
          pincode: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values,{resetForm}) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        {() => (
          <Form>
            {[
              { id: 'username', type: 'text', label: 'Username' },
              { id: 'password', type: 'password', label: 'Password' },
              { id: 'phoneno', type: 'tel', label: 'Phone No' },
              { id: 'address', type: 'text', label: 'Address' },
              { id: 'email', type: 'email', label: 'Email' },
              { id: 'pincode', type: 'text', label: 'Pincode' },
            ].map(({ id, type, label }) => (
              <div
                key={id}
                style={{
                  marginBottom: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <label
                  htmlFor={id}
                  style={{
                    fontWeight: '500',
                    color: '#34495e',
                    marginBottom: '5px',
                  }}
                >
                  {label}:
                </label>
                <Field
                  type={type}
                  name={id}
                  id={id}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    outlineColor: '#2980b9',
                  }}
                />
                <ErrorMessage
                  name={id}
                  component="div"
                  style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}
                />
              </div>
            ))}

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                backgroundColor: '#2980b9',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                letterSpacing: '0.5px',
                transition: 'background-color 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#1f6391')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#2980b9')}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
