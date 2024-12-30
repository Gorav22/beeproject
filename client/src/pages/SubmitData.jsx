import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SubmitData = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        age: '',
        occupation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/sendData', formData);
            alert('User data saved successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                country: '',
                age: '',
                occupation: '',
            });
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center my-10">
                <div className="max-w-xl mx-auto py-5 p-6 bg-gray-800 shadow-md rounded-lg w-full">
                    <h2 className="text-3xl font-bold mb-6 text-center text-indigo-500">User Information Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {Object.keys(formData).map((key) => (
                            <div key={key}>
                                <label
                                    htmlFor={key}
                                    required
                                    className="block text-sm font-medium text-gray-300 capitalize"
                                >
                                    {key}
                                </label>
                                <input
                                    type="text"
                                    name={key}
                                    id={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 p-3"
                                    required
                                />
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-500 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <Link
                            to="/show"
                            className="text-indigo-400 hover:text-indigo-300 bg-gray-900 rounded-lg px-4 py-2 mt-4"
                        >
                            View Submitted Data
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitData;