import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <form className='register'>
        <input
          id='first-name'
          class='form-field'
          type='text'
          placeholder='First Name'
          name='firstName'
        />
        <input
          id='last-name'
          class='form-field'
          type='text'
          placeholder='Last Name'
          name='lastName'
        />
        <input
          id='email'
          class='form-field'
          type='email'
          placeholder='Email'
          name='email'
        />
        <input
          id='password'
          class='form-field'
          type='password'
          placeholder='Password'
          name='password'
        />
        <input
          id='conformpassword'
          class='form-field'
          type='conformpassword'
          placeholder='Conform Password'
          name='conformpassword'
        />
        <button class='form-field' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
