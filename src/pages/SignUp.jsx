import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (!acceptTerms) {
            alert('Please accept the terms and conditions');
            return;
        }
        console.log('Signup attempt:', formData);
    };

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                {/* Header */}
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-2'>Create Account</h2>
                    <p className='text-gray-600'>Join us and start organizing your notes</p>
                </div>
            </div>

            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10'>
                    {/* Signup Form */}
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        {/* Name Fields */}
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>
                                    First Name
                                </label>
                                <input
                                    id='firstName'
                                    name='firstName'
                                    type='text'
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                    placeholder='John'
                                />
                            </div>
                            <div>
                                <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Last Name
                                </label>
                                <input
                                    id='lastName'
                                    name='lastName'
                                    type='text'
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                    placeholder='Doe'
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                                Email Address
                            </label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                autoComplete='email'
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                placeholder='john.doe@example.com'
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    id='password'
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete='new-password'
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10'
                                    placeholder='Create a strong password'
                                />
                                <button
                                    type='button'
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21'></path>
                                        </svg>
                                    ) : (
                                        <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'></path>
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <div className='mt-2 text-xs text-gray-500'>
                                Password must be at least 8 characters long
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-2'>
                                Confirm Password
                            </label>
                            <div className='relative'>
                                <input
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    autoComplete='new-password'
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10'
                                    placeholder='Confirm your password'
                                />
                                <button
                                    type='button'
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21'></path>
                                        </svg>
                                    ) : (
                                        <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'></path>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className='flex items-start'>
                            <div className='flex items-center h-5'>
                                <input
                                    id='acceptTerms'
                                    name='acceptTerms'
                                    type='checkbox'
                                    checked={acceptTerms}
                                    onChange={(e) => setAcceptTerms(e.target.checked)}
                                    className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                                />
                            </div>
                            <div className='ml-3 text-sm'>
                                <label htmlFor='acceptTerms' className='text-gray-700'>
                                    I agree to the{' '}
                                    <Link to='/terms' className='text-blue-600 hover:text-blue-500 font-medium'>
                                        Terms and Conditions
                                    </Link>{' '}
                                    and{' '}
                                    <Link to='/privacy' className='text-blue-600 hover:text-blue-500 font-medium'>
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type='submit'
                                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                                disabled={!acceptTerms}
                            >
                                Create Account
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className='mt-6'>
                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center'>
                                <div className='w-full border-t border-gray-300' />
                            </div>
                            <div className='relative flex justify-center text-sm'>
                                <span className='px-2 bg-white text-gray-500'>Or sign up with</span>
                            </div>
                        </div>

                        {/* Social Signup Buttons */}
                        <div className='mt-6 grid grid-cols-2 gap-3'>
                            <button className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                                <span className='text-lg font-bold text-red-500'>G</span>
                                <span className='ml-2'>Google</span>
                            </button>

                            <button className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                                <span className='text-lg font-bold text-blue-600'>f</span>
                                <span className='ml-2'>Facebook</span>
                            </button>
                        </div>
                    </div>

                    {/* Login Link */}
                    <div className='mt-6 text-center'>
                        <p className='text-sm text-gray-600'>
                            Already have an account?{' '}
                            <Link to='/login' className='font-medium text-blue-600 hover:text-blue-500'>
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
