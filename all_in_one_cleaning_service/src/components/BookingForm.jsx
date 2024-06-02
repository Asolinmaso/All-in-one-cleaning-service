'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { areasInChennai } from '@/utils/chennaiAreas';
import SelectWrapper from '@/utils/SelectWrapper';
import Lottie from 'lottie-react';
import tickAnimation from '../../public/success.json';

const services = [
  { value: 'Mechanised Dewatering', label: 'Mechanised Dewatering' },
  { value: 'Sludge Removal', label: 'Sludge Removal' },
  { value: 'High Pressure Cleaning', label: 'High Pressure Cleaning' },
  { value: 'Vacuum Cleaning', label: 'Vacuum Cleaning' },
  { value: 'Anti Bacterial Spray', label: 'Anti Bacterial Spray' },
  { value: 'UV Disinfection', label: 'UV Disinfection' },
  { value: 'Sewage', label: 'Sewage' },
  { value: 'Toilet', label: 'Toilet' },
  { value: 'Septic Tank', label: 'Septic Tank' },
  { value: 'Mechanised Water Tank Cleaning', label: 'Mechanised Water Tank Cleaning' },
];

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (field, value) => {
    const newErrors = {};
    if (field === 'name' && !value) newErrors.name = 'Name is required';
    if (field === 'email') {
      if (!value) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(value)) newErrors.email = 'Email address is invalid';
    }
    if (field === 'phone') {
      if (!value) newErrors.phone = 'Phone number is required';
      else if (!/^\d{10}$/.test(value)) newErrors.phone = 'Phone number is invalid';
    }
    if (field === 'city' && !value) newErrors.city = 'City is required';
    if (field === 'service' && !value) newErrors.service = 'Service is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value
    });

    const fieldErrors = validate(id, value);
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors, ...fieldErrors };
      if (!fieldErrors[id]) delete newErrors[id];
      return newErrors;
    });
  };

  const handleCityChange = (selectedOption) => {
    setForm({
      ...form,
      city: selectedOption ? selectedOption.value : ''
    });

    const fieldErrors = validate('city', selectedOption ? selectedOption.value : '');
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors, ...fieldErrors };
      if (!fieldErrors.city) delete newErrors.city;
      return newErrors;
    });
  };

  const handleServiceChange = (selectedOption) => {
    setForm({
      ...form,
      service: selectedOption ? selectedOption.value : ''
    });

    const fieldErrors = validate('service', selectedOption ? selectedOption.value : '');
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors, ...fieldErrors };
      if (!fieldErrors.service) delete newErrors.service;
      return newErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.assign(newErrors, validate('name', form.name));
    Object.assign(newErrors, validate('email', form.email));
    Object.assign(newErrors, validate('phone', form.phone));
    Object.assign(newErrors, validate('city', form.city));
    Object.assign(newErrors, validate('service', form.service));

    if (Object.keys(newErrors).length === 0) {
      axios.post('http://localhost:8080/aiocs/', form, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }})
        .then(response => {
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setForm({
              name: '',
              email: '',
              phone: '',
              city: '',
              service: ''
            });
            setErrors({});
            window.location.href = '/';  
          }, 2000);
        })
        .catch(error => {
          console.error('There was an error submitting the form!', error);
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-form min-h-screen flex items-center" style={{ minHeight: 'calc(100vh - 82px)' }}>
      <div className="container p-4 bg-white text-black md:max-w-lg w-[85%] mx-auto rounded-xl shadow-lg">
        <h1 className="text-center text-2xl font-bold mb-4">Book Your Cleaning</h1>
        {submitted ? (
          <div className="flex flex-col items-center">
            <Lottie animationData={tickAnimation} style={{ width: 150, height: 150 }} />
            <p className="text-green-500 text-xl mt-2">Submitted Successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="form-group">
                <label htmlFor="name" className="block text-md font-medium">Name</label>
                <input
                  type="text"
                  className="form-control block w-full mt-1 px-3 py-1.5 border rounded-lg focus:ring focus:ring-blue-300"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-md font-medium">Email Address</label>
                <input
                  type="email"
                  className="form-control block w-full mt-1 px-3 py-1.5 border rounded-lg focus:ring focus:ring-blue-300"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="block text-md font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="form-control block w-full mt-1 px-3 py-1.5 border rounded-lg focus:ring focus:ring-blue-300"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="city" className="block text-md font-medium">City</label>
                <SelectWrapper
                  className="basic-single mt-1"
                  classNamePrefix="select"
                  isClearable={true}
                  isSearchable={true}
                  name="city"
                  options={areasInChennai}
                  value={areasInChennai.find(option => option.value === form.city)}
                  onChange={handleCityChange}
                />
                {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="service" className="block text-md font-medium">Service</label>
                <SelectWrapper
                  className="basic-single mt-1"
                  classNamePrefix="select"
                  isClearable={true}
                  isSearchable={true}
                  name="service"
                  options={services}
                  value={services.find(option => option.value === form.service)}
                  onChange={handleServiceChange}
                />
                {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
              </div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-dark bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition duration-300">Book Now</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
