import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Home = () => {
  const navigate = useNavigate();
  const itemData = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZN3bRk7y6SZfxzierLVoQuWzE-NcOzDJ81XspXDDMHr3kUzyMAyh4T1uicALjSg6u80&usqp=CAU",
      title: "The First Teacher",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/A1aDb5U5myL.jpg",
      title: "365",
    },
    {
      img: "https://m.media-amazon.com/images/I/51TTOZk13IL.jpg",
      title: "h",
    },
  ];

  return (
    <div className="home-page">
      <span>Welcome to the AJR BookStore</span>
      <h2>Our Bestsellers of the day</h2>
      <ImageList
        sx={{ width: "100vw", height: "70vh" }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} className="books-list">
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate("/products")}
      >
        Check more books
      </Button>
    </div>
  );
};

export default Home;
