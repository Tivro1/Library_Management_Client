import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    image: '',
    name: '',
    quantity: 0,
    author: '',
    category: '',
    description: '',
    rating: 1,
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://libraymanagement-nu.vercel.app/allbooks', bookData, {
        headers: { 'Content-Type': 'application/json' },
      });
      Swal.fire({ icon: 'success', title: 'Added Book Successfully', text: 'Book has been added.' });
    } catch (error) {
      toast.error(`Failed to add book: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white mt-6">
      <Helmet>
        <title>Add Books</title>
      </Helmet>
      
      <motion.h2 
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Add New Book
      </motion.h2>

      <motion.form 
        onSubmit={handleSubmit} 
        className="max-w-lg mx-auto space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {['email', 'image', 'name', 'quantity', 'author', 'description', 'rating'].map((field, index) => (
          <motion.div key={field} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <label className="block mb-1 capitalize">{field.replace('_', ' ')}</label>
            <input
              type={field === 'quantity' || field === 'rating' ? 'number' : 'text'}
              name={field}
              value={bookData[field]}
              onChange={handleInputChange}
              required
              className="border p-2 w-full text-black"
            />
          </motion.div>
        ))}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <label className="block mb-1">Category</label>
          <select name="category" value={bookData.category} onChange={handleInputChange} required className="border p-2 w-full text-black">
            <option value="Novel">Fiction</option>
            <option value="Thriller">Non-Fiction</option>
            <option value="History">History</option>
            <option value="Drama">Science</option>
          </select>
        </motion.div>
        
        <motion.button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Book
        </motion.button>
      </motion.form>
    </div>
  );
};

export default AddBook;
