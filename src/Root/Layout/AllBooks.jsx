import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [search , setSerch]= useState('');
 const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://libraymanagement-nu.vercel.app/allbooks?search=${search}`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Error fetching books:', error));
  }, [search]);
const handelUpdata = (id)=>
{ 
  console.log(id);
  localStorage.setItem('id', JSON.stringify(id));
         navigate('/update')
}

  return (
    <div className="p-4">
      <input 
  onKeyUp={(e) => setSerch(e.target.value)} 
  className="border border-gray-800 rounded-lg px-4 py-2 w-full sm:w-[500px] h-10 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
  type="text" 
  placeholder="Search Books" 
/>

      <Helmet>
        <title>All Books</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">All Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        {books.map((book) => (
          <div 
          key={book.id} 
          className="bg-white p-4 rounded-lg shadow-lg flex flex-col h-full"
        >
          {/* Image and Content */}
          <div className="flex-grow">
            <img 
              className="w-full h-64 object-cover mb-4" 
              src={book.image} 
              alt={book.name} 
            />
            <h2 className="text-xl font-semibold mb-2">{book.name}</h2>
            <p className="text-sm text-gray-600">Author: {book.author}</p>
            <p className="text-sm text-gray-600">Category: {book.category}</p>
            <p className="text-sm text-gray-600">Rating: {book.rating}</p>
          </div>
        
          {/* Update Button */}
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => handelUpdata(book._id)}
          >
            Update
          </button>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
