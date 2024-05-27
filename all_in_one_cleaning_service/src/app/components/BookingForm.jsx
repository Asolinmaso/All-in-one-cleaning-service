'use client'
import React, { useState } from 'react';
import Select from 'react-select';

const citiesInTamilNadu = [
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Coimbatore', label: 'Coimbatore' },
  { value: 'Madurai', label: 'Madurai' },
  { value: 'Tiruchirappalli', label: 'Tiruchirappalli' },
  { value: 'Salem', label: 'Salem' },
  { value: 'Erode', label: 'Erode' },
  { value: 'Tirunelveli', label: 'Tirunelveli' },
  { value: 'Vellore', label: 'Vellore' },
  { value: 'Thoothukudi', label: 'Thoothukudi' },
  { value: 'Dindigul', label: 'Dindigul' },
  { value: 'Thanjavur', label: 'Thanjavur' },
  { value: 'Ranipet', label: 'Ranipet' },
  { value: 'Nagercoil', label: 'Nagercoil' },
  { value: 'Kanchipuram', label: 'Kanchipuram' },
  { value: 'Karur', label: 'Karur' },
  { value: 'Udhagamandalam', label: 'Udhagamandalam' },
  { value: 'Hosur', label: 'Hosur' },
  { value: 'Kumbakonam', label: 'Kumbakonam' },
  { value: 'Tiruvannamalai', label: 'Tiruvannamalai' },
  { value: 'Pollachi', label: 'Pollachi' },
  { value: 'Rajapalayam', label: 'Rajapalayam' },
  { value: 'Sivakasi', label: 'Sivakasi' },
  { value: 'Pudukkottai', label: 'Pudukkottai' },
  { value: 'Vaniyambadi', label: 'Vaniyambadi' },
  { value: 'Ambur', label: 'Ambur' },
  { value: 'Nagapattinam', label: 'Nagapattinam' },
  { value: 'Krishnagiri', label: 'Krishnagiri' },
  { value: 'Theni', label: 'Theni' },
  { value: 'Ariyalur', label: 'Ariyalur' },
  { value: 'Sirkazhi', label: 'Sirkazhi' }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.assign(newErrors, validate('name', form.name));
    Object.assign(newErrors, validate('email', form.email));
    Object.assign(newErrors, validate('phone', form.phone));
    Object.assign(newErrors, validate('city', form.city));
    Object.assign(newErrors, validate('service', form.service));

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
      setForm({
        name: '',
        email: '',
        phone: '',
        city: '',
        service: ''
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="container p-6 bg-white text-black max-w-lg mx-auto rounded-xl shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-6">Book Your Cleaning</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              className="form-control block w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              id="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-600 mt-1">{errors.name}</p>}
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Email Address</label>
            <input
              type="email"
              className="form-control block w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              id="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
          </div>
          <div className="form-group mb-4">
            <label htmlFor="phone" className="block text-lg font-medium">Phone Number</label>
            <input
              type="tel"
              className="form-control block w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              id="phone"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-600 mt-1">{errors.phone}</p>}
          </div>
          <div className="form-group mb-4">
            <label htmlFor="city" className="block text-lg font-medium">City</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isClearable={true}
              isSearchable={true}
              name="city"
              options={citiesInTamilNadu}
              onChange={handleCityChange}
            />
            {errors.city && <p className="text-red-600 mt-1">{errors.city}</p>}
          </div>
          <div className="form-group mb-4">
            <label htmlFor="service" className="block text-lg font-medium">Service</label>
            <select
              className="form-select block w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              id="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="" disabled>Choose your service</option>
              <option value="Mechanised Dewatering">Mechanised Dewatering</option>
              <option value="Sludge Removal">Sludge Removal</option>
              <option value="High Pressure Cleaning">High Pressure Cleaning</option>
              <option value="Vacuum Cleaning">Vacuum Cleaning</option>
              <option value="Anti Bacterial Spray">Anti Bacterial Spray</option>
              <option value="UV Disinfection">UV Disinfection</option>
              <option value="Sewage">Sewage</option>
              <option value="Toilet">Toilet</option>
              <option value="Septic Tank">Septic Tank</option>
              <option value="Mechanised Water Tank Cleaning">Mechanised Water Tank Cleaning</option>
            </select>
            {errors.service && <p className="text-red-600 mt-1">{errors.service}</p>}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark mt-4 bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition duration-300">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
