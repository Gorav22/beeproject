import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/getData');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center my-10">
                <div className="max-w-3xl mx-auto p-6 bg-gray-800 shadow-md rounded-lg w-full">
                    <h2 className="text-3xl font-bold mb-6 text-center text-indigo-500">Users List</h2>
                    {users.length > 0 ? (
                        <ul className="space-y-6">
                            {users.map((user, index) => (
                                <li
                                    key={index}
                                    className="p-4 bg-gray-700 rounded-lg shadow-md"
                                >
                                    <p><span className="font-bold text-indigo-400">Name:</span> {user.name}</p>
                                    <p><span className="font-bold text-indigo-400">Email:</span> {user.email}</p>
                                    <p><span className="font-bold text-indigo-400">Phone:</span> {user.phone}</p>
                                    <p><span className="font-bold text-indigo-400">Address:</span> {user.address}</p>
                                    <p><span className="font-bold text-indigo-400">City:</span> {user.city}</p>
                                    <p><span className="font-bold text-indigo-400">State:</span> {user.state}</p>
                                    <p><span className="font-bold text-indigo-400">Zip:</span> {user.zip}</p>
                                    <p><span className="font-bold text-indigo-400">Country:</span> {user.country}</p>
                                    <p><span className="font-bold text-indigo-400">Age:</span> {user.age}</p>
                                    <p><span className="font-bold text-indigo-400">Occupation:</span> {user.occupation}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-gray-400">No users found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShowData;