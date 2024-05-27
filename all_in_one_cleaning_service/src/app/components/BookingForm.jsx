'use client'
import React, { useState } from 'react';

const citiesInTamilNadu = [
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode",
  "Tirunelveli", "Vellore", "Thoothukudi", "Dindigul", "Thanjavur",
  "Ranipet", "Nagercoil", "Kanchipuram", "Karur", "Udhagamandalam",
  "Hosur", "Kumbakonam", "Tiruvannamalai", "Pollachi", "Rajapalayam",
  "Sivakasi", "Pudukkottai", "Vaniyambadi", "Ambur", "Nagapattinam",
  "Krishnagiri", "Theni", "Ariyalur", "Sirkazhi"
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

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email address is invalid';
    if (!form.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(form.phone)) newErrors.phone = 'Phone number is invalid';
    if (!form.city) newErrors.city = 'City is required';
    if (!form.service) newErrors.service = 'Service is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
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
            <select
              className="form-select block w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              id="city"
              value={form.city}
              onChange={handleChange}
            >
              <option value="" disabled>Choose your city</option>
              {citiesInTamilNadu.map((city, index) => (
                <option key={index} value={city.toLowerCase()}>{city}</option>
              ))}
            </select>
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
              <option value="3">Mechanised Dewatering</option>
              <option value="1">Sludge Removal</option>
              <option value="2">High Pressure Cleaning</option>
              <option value="3">Vacuum Cleaning</option>
              <option value="4">Anti Bacterial Spray</option>
              <option value="5">UV Disinfection</option>
              <option value="6">Sewage</option>
              <option value="7">Toilet</option>
              <option value="8">Septic Tank</option>
              <option value="9">Mechanised Water Tank Cleaning</option>
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
