'use client'
import React, { useState } from 'react';
import Select from 'react-select';

const areasInChennai = [
  { value: 'Adambakkam', label: 'Adambakkam' },
  { value: 'Adyar', label: 'Adyar' },
  { value: 'Alandur', label: 'Alandur' },
  { value: 'Alwarpet', label: 'Alwarpet' },
  { value: 'Alwarthirunagar', label: 'Alwarthirunagar' },
  { value: 'Ambattur', label: 'Ambattur' },
  { value: 'Aminjikarai', label: 'Aminjikarai' },
  { value: 'Anna Nagar', label: 'Anna Nagar' },
  { value: 'Arumbakkam', label: 'Arumbakkam' },
  { value: 'Ashok Nagar', label: 'Ashok Nagar' },
  { value: 'Avadi', label: 'Avadi' },
  { value: 'Ayanavaram', label: 'Ayanavaram' },
  { value: 'Besant Nagar', label: 'Besant Nagar' },
  { value: 'Chengalpattu', label: 'Chengalpattu' },
  { value: 'Chitlapakkam', label: 'Chitlapakkam' },
  { value: 'Choolaimedu', label: 'Choolaimedu' },
  { value: 'Chromepet', label: 'Chromepet' },
  { value: 'Egmore', label: 'Egmore' },
  { value: 'Ekkaduthangal', label: 'Ekkaduthangal' },
  { value: 'Ennore', label: 'Ennore' },
  { value: 'Foreshore Estate', label: 'Foreshore Estate' },
  { value: 'George Town', label: 'George Town' },
  { value: 'Gopalapuram', label: 'Gopalapuram' },
  { value: 'Guindy', label: 'Guindy' },
  { value: 'IIT Madras', label: 'IIT Madras' },
  { value: 'Injambakkam', label: 'Injambakkam' },
  { value: 'Iyyappanthangal', label: 'Iyyappanthangal' },
  { value: 'K.K. Nagar', label: 'K.K. Nagar' },
  { value: 'K.K. Nagar West', label: 'K.K. Nagar West' },
  { value: 'Kodambakkam', label: 'Kodambakkam' },
  { value: 'Kolathur', label: 'Kolathur' },
  { value: 'Korattur', label: 'Korattur' },
  { value: 'Kottivakkam', label: 'Kottivakkam' },
  { value: 'Kotturpuram', label: 'Kotturpuram' },
  { value: 'Koyambedu', label: 'Koyambedu' },
  { value: 'Kundrathur', label: 'Kundrathur' },
  { value: 'Madhavaram', label: 'Madhavaram' },
  { value: 'Madipakkam', label: 'Madipakkam' },
  { value: 'Maduravoyal', label: 'Maduravoyal' },
  { value: 'Manali', label: 'Manali' },
  { value: 'Manapakkam', label: 'Manapakkam' },
  { value: 'Medavakkam', label: 'Medavakkam' },
  { value: 'Meenambakkam', label: 'Meenambakkam' },
  { value: 'Mogappair', label: 'Mogappair' },
  { value: 'Mogappair East', label: 'Mogappair East' },
  { value: 'Mogappair West', label: 'Mogappair West' },
  { value: 'Mudichur', label: 'Mudichur' },
  { value: 'Mylapore', label: 'Mylapore' },
  { value: 'Nandanam', label: 'Nandanam' },
  { value: 'Nanganallur', label: 'Nanganallur' },
  { value: 'Nungambakkam', label: 'Nungambakkam' },
  { value: 'Otteri', label: 'Otteri' },
  { value: 'Padi', label: 'Padi' },
  { value: 'Palavakkam', label: 'Palavakkam' },
  { value: 'Pallavaram', label: 'Pallavaram' },
  { value: 'Pallikaranai', label: 'Pallikaranai' },
  { value: 'Pammal', label: 'Pammal' },
  { value: 'Park Town', label: 'Park Town' },
  { value: 'Parrys', label: 'Parrys' },
  { value: 'Perambur', label: 'Perambur' },
  { value: 'Perungudi', label: 'Perungudi' },
  { value: 'Poonamallee', label: 'Poonamallee' },
  { value: 'Porur', label: 'Porur' },
  { value: 'Pudupet', label: 'Pudupet' },
  { value: 'Purasaiwalkam', label: 'Purasaiwalkam' },
  { value: 'Raj Bhavan', label: 'Raj Bhavan' },
  { value: 'Ramapuram', label: 'Ramapuram' },
  { value: 'Royapettah', label: 'Royapettah' },
  { value: 'Saidapet', label: 'Saidapet' },
  { value: 'Saligramam', label: 'Saligramam' },
  { value: 'Santhome', label: 'Santhome' },
  { value: 'Selaiyur', label: 'Selaiyur' },
  { value: 'Shenoy Nagar', label: 'Shenoy Nagar' },
  { value: 'Sholinganallur', label: 'Sholinganallur' },
  { value: 'Sithalapakkam', label: 'Sithalapakkam' },
  { value: 'Sowcarpet', label: 'Sowcarpet' },
  { value: 'St. Thomas Mount', label: 'St. Thomas Mount' },
  { value: 'Teynampet', label: 'Teynampet' },
  { value: 'Tharamani', label: 'Tharamani' },
  { value: 'T. Nagar', label: 'T. Nagar' },
  { value: 'Thirumangalam', label: 'Thirumangalam' },
  { value: 'Thirumazhisai', label: 'Thirumazhisai' },
  { value: 'Thiruninravur', label: 'Thiruninravur' },
  { value: 'Thiruvanmiyur', label: 'Thiruvanmiyur' },
  { value: 'Tiruverkadu', label: 'Tiruverkadu' },
  { value: 'Tiruvottiyur', label: 'Tiruvottiyur' },
  { value: 'Triplicane', label: 'Triplicane' },
  { value: 'Urapakkam', label: 'Urapakkam' },
  { value: 'Vadapalani', label: 'Vadapalani' },
  { value: 'Valasaravakkam', label: 'Valasaravakkam' },
  { value: 'Vandalur', label: 'Vandalur' },
  { value: 'Vanagaram', label: 'Vanagaram' },
  { value: 'Velachery', label: 'Velachery' },
  { value: 'Villivakkam', label: 'Villivakkam' },
  { value: 'Virugambakkam', label: 'Virugambakkam' },
  { value: 'Vyasarpadi', label: 'Vyasarpadi' },
  { value: 'Washermanpet', label: 'Washermanpet' },
  { value: 'West Mambalam', label: 'West Mambalam' },
  { value: 'Zamin Pallavaram', label: 'Zamin Pallavaram' },
];


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
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex items-center" style={{minHeight: 'calc(100vh - 82px)'}}>
      <div className="container p-4 bg-white text-black max-w-lg mx-auto rounded-xl shadow-lg">
        <h1 className="text-center text-2xl font-bold mb-4">Book Your Cleaning</h1>
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
              <Select
                className="basic-single mt-1"
                classNamePrefix="select"
                isClearable={true}
                isSearchable={true}
                name="city"
                options={areasInChennai}
                onChange={handleCityChange}
              />
              {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="service" className="block text-md font-medium">Service</label>
              <Select
                className="basic-single mt-1"
                classNamePrefix="select"
                isClearable={true}
                isSearchable={true}
                name="service"
                options={services}
                onChange={handleServiceChange}
              />
              {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-dark bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition duration-300">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
