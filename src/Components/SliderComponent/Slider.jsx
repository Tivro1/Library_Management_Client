import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/swiper-bundle.css"; 
import "./Slider.css"; 
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);

  const books = [
    {
      name: "The Great Gatsby",
      description: "A novel by F. Scott Fitzgerald that explores themes of wealth, class, and the American Dream in 1920s New York.",
      image: "/book1.jpeg",
    },
    {
      name: "1984",
      description: "A dystopian novel by George Orwell that critiques totalitarianism and explores surveillance, propaganda, and freedom.",
      image: "/book2.jpeg",
    },
    {
      name: "To Kill a Mockingbird",
      description: "A Pulitzer Prize-winning novel by Harper Lee that addresses racial injustice and moral growth in the American South.",
      image: "/book3.jpeg",
    },
    {
      name: "Moby-Dick",
      description: "A classic American novel by Herman Melville that tells the story of Captain Ahab's obsessive quest to hunt down the white whale.",
      image: "/book4.jpeg",
    },
    {
      name: "Pride and Prejudice",
      description: "A novel by Jane Austen that examines issues of marriage, social class, and morality in early 19th-century England.",
      image: "/book5.jpeg",
    },
  ];

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000 },
    breakpoints: {
      1024: { slidesPerView: 3, spaceBetween: 30 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      480: { slidesPerView: 1, spaceBetween: 10 },
    },
  };
     const navigate = useNavigate();
      const handelButton = ()=>
      {
         navigate('/allbooks')
      }
  return (
    <div className="banner-container ">
      <h2 className="text-2xl text-center text-[#d2e03d] font-bold mb-6 ">Our Best Selling Books</h2>
      <Swiper {...swiperParams}>
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <div
              className="item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="item-title">{book.name}</h3>
              <p className="item-description">{book.description}</p>
              <div
                className="item-image"
                style={{ backgroundImage: `url(${book.image})` }}
              ></div>
              <div className={`item-overlay ${isHovered ? 'show' : ''}`}>
                <button onClick={()=> handelButton()} className="btn-view-details">View Details</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
