
import ReactStars from 'react-rating-stars-component';

const FeaturedBooks = () => {

  const featuredBooks = [
    {
      _id: "1",
      image: "https://m.media-amazon.com/images/I/61dRoDRubtL._SY342_.jpg", 
      name: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      category: "Classic", 
      rating: 4.7, 
      quantity: 10
    },
    {
      _id: "2",
      image: "https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UL320_.jpg", 
      name: "1984", 
      author: "George Orwell", 
      category: "Dystopian", 
      rating: 4.8, 
      quantity: 15
    },
    {
      _id: "3",
      image: "https://m.media-amazon.com/images/I/71HZbA0WscL._AC_UY218_.jpg", 
      name: "To Kill a Mockingbird", 
      author: "Harper Lee", 
      category: "Fiction", 
      rating: 4.9, 
      quantity: 5
    },
    {
      _id: "4",
      image: "https://m.media-amazon.com/images/I/91PBkjTNJhL._AC_UL320_.jpg", 
      name: "Moby Dick", 
      author: "Herman Melville", 
      category: "Adventure", 
      rating: 4.5, 
      quantity: 8
    },
    {
      _id: "5",
      image: "https://m.media-amazon.com/images/I/81c2DA7Lw2L._AC_UY218_.jpg", 
      name: "Pride and Prejudice", 
      author: "Jane Austen", 
      category: "Romance", 
      rating: 4.6, 
      quantity: 12
    },
    {
      _id: "6",
      image: "https://m.media-amazon.com/images/I/71c4HiVmNrL._AC_UY218_.jpg", 
      name: "Brave New World", 
      author: "Aldous Huxley", 
      category: "Science Fiction", 
      rating: 4.7, 
      quantity: 7
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Featured Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          featuredBooks.map(res => (
            <div key={res._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src={res.image} alt="Book" className="w-full h-64 object-cover rounded-lg mb-4" />
              <strong className="text-lg block font-semibold mb-2">{res.name}</strong>
              <span className="block text-sm text-gray-600">Author Name: {res.author}</span>
              <span className="block text-sm text-gray-600">Category: {res.category}</span>

              {/* Rating component */}
              <div className="flex items-center mt-2">
                <ReactStars
                  count={5}
                  value={res.rating}
                  edit={false}
                  size={24}
                  activeColor="#ffd700"
                />
                <strong className="ml-2">{`(${res.rating})`}</strong>
              </div>

              <span className="block text-sm text-gray-600">Quantity: {res.quantity}</span>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Details
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedBooks;
