import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './UploadData.css';

const UploadData = () => {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('description', data.description);
    if (file) {
      formData.append('media', file);
    }

    try {
      const response = await axios.post('/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response.data);
      reset();
      setFile(null);
    } catch (error) {
      console.error('Error uploading post', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Upload Your Favourite Song</h2>
        <textarea
          name="description"
          placeholder="Add a description..."
          {...register('description', { required: true })}
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <input
          type="file"
          name="media"
          onChange={handleFileChange}
          accept="image/*,video/*"
          className="w-full px-3 py-2 mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadData;



