import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateBooks = () => {
  const navigate = useNavigate();
  let storeId = localStorage.getItem('id');

  if (storeId) {
    storeId = storeId.replace(/^"(.*)"$/, '$1');
  }

  const [book, setBook] = useState({
    image: '',
    name: '',
    author: '',
    category: '',
    rating: ''
  });

  useEffect(() => {
    axios.get(`https://libraymanagement-nu.vercel.app/allbooks/${storeId}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error('Error fetching book:', error));
  }, [storeId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`https://libraymanagement-nu.vercel.app/allbooks/${storeId}`, book)
      .then((response) => {
        alert(response);
         Swal.fire({
                icon: "success",
                title: "Updated Book Successfully",
                text: "Book",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        navigate('/allbooks'); // Redirect to All Books page after update
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to update book");
      });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={book.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Book Title</label>
          <input
            type="text"
            name="name"
            value={book.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Author Name</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={book.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Fiction">Fiction</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Non-Fiction">Non-Fiction</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            name="rating"
            value={book.rating}
            onChange={handleChange}
            min="1"
            max="5"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateBooks;
