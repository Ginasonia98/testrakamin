import React, { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Button = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    created_by: '',
    created_at: null,
    updated_at: null
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleDateChange = (date, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form data
    setFormData({
      id: '',
      title: '',
      created_by: '',
      created_at: null,
      updated_at: null
    });
    // Close the modal
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex items-center">
        <p className="text-black font-semibold text-sm ml-4 mr-2">Product Roadmap</p>
        <button
          className="w-36 h-7 rounded-lg bg-cyan-500 text-white border-none mt-2 flex items-center"
          onClick={() => setShowModal(true)}
        >
          <RiAddLine size={16} className="mr-1" />
          <span>Add New Group</span>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded">
            <h2 className="text-lg font-bold mb-4">Add New Group</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
                  ID:
                </label>
                <input
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="id"
                  id="id"
                  value={formData.id}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                  Title:
                </label>
                <input
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="created_by">
                  Created By:
                </label>
                <input
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="created_by"
                  id="created_by"
                  value={formData.created_by}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="created_at">
                  Created At:
                </label>
                <DatePicker
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  selected={formData.created_at}
                  onChange={(date) => handleDateChange(date, 'created_at')}
                  dateFormat="dd/MM/yyyy"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={15}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="updated_at">
                  Updated At:
                </label>
                <DatePicker
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  selected={formData.updated_at}
                  onChange={(date) => handleDateChange(date, 'updated_at')}
                  dateFormat="dd/MM/yyyy"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={15}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;







