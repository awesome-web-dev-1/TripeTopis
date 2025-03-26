import React, { useState, useEffect } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  useEffect(() => {
    // Cleanup function
    return () => {
      // Any cleanup needed when component unmounts
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an actual API call
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // const data = await response.json();

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', password: '' }); // Reset form on success
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.message });
    }
  };

  return (
    <section className='py-[120px]'>
      <div className="container grid gap-16 md:grid-cols-2">
        <figure className='order-1 md:-order-1'>
          <img 
            src="/images/sign-up-banner.png" 
            alt="signup banner" 
            width={570} 
            height={467} 
            className="w-full h-auto"
            loading="lazy"
          />
        </figure>
        <div className="">
          <div className='grid gap-2'>
            <h2 className=''>Register Yourself</h2>
            <p className='text-neutral-600 mt-3 mb-8'>Please Sign Up here</p>
          </div>

        <form onSubmit={handleSubmit} className='grid gap-6'>
          <div className="grid gap-4">
            <div className="bg-neutral-200 rounded-lg overflow-hidden">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                className='w-full p-4'
                required
              />
            </div>
            <div className="bg-neutral-200 rounded-lg overflow-hidden">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className='w-full p-4'
                required
              />
            </div>
            <div className="bg-neutral-200 rounded-lg overflow-hidden">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                className='w-full p-4'
                required
                minLength={6}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status.submitting}
            className='bg-primaryClr text-white py-4 rounded-lg hover:bg-primaryClr/90 transition-colors disabled:opacity-70'
          >
            {status.submitting ? 'Processing...' : 'Send Message'}
          </button>

          {status.error && (
            <p className="text-red-500 text-center">{status.error}</p>
          )}
          {status.success && (
            <p className="text-green-500 text-center">Registration successful!</p>
          )}
        </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;