// src/components/SignUp.jsx
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../components/SignIn';


export default function SignUp() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      username,
    };

    try {
      const response = await axios.post('http://212.33.198.6:8801/api/auth/users/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      setSuccess('User signed up successfully!');
      setError('');
    } catch (error) {
      console.error(error);
      setError('Sign up failed. Please check your input and try again.');
      setSuccess('');
    }
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
      <div className="container h-full w-full flex items-center p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      {/* <img
                        className="mx-auto w-48"
                        src="./src/assets/bg1.jpg"
                      // alt="logo"
                      /> */}
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Black Earth
                      </h4>
                    </div>

                    <form className="flex flex-col place-items-center" onSubmit={handleSubmit}>
                      <p className="mb-4">Please Register</p>
                      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                      {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
                      {/* <!--Username input--> */}
                      <input
                        type="text"
                        placeholder='Username'
                        label="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mb-4 shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                        required
                      ></input>

                      {/* <!--Password input--> */}
                      <input
                        type="password"
                        placeholder='Password'
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                        required
                      ></input>

                      {/* <!--Email input--> */}
                      <input
                        type="email"
                        label="email"
                        placeholder='Email'
                        className="mb-4 shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      ></input>

                      {/* <!--first-name input--> */}
                      <input
                        type="text"
                        label="firstName"
                        placeholder='First Name'
                        value={firstName}
                        className="mb-4 shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      ></input>

                      {/* <!--last-name input--> */}
                      <input
                        type="text"
                        label="lastName"
                        placeholder='Last Name'
                        value={lastName}
                        className="mb-4 shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      ></input>


                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <div rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Sign up
                          </button>
                        </div>

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Terms and conditions</a>
                      </div>
                    </form>

                    <div className='flex items-center justify-center align-text-bottom'>
                      <div className="flex items-center justify-center pb-6">
                        <p className="mb-0 mr-2 mt-3">Have an account?</p>
                      </div>
                      <button
                        onClick={() => navigate('/signin')}
                        style={{
                          background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        }}
                        className="mb-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"                          >
                        Sign In
                      </button>

                    </div>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <img src="./src/assets/bg1.jpg" alt="black-earth" className='h-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

