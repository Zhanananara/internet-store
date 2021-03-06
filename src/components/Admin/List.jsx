import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, Outlet, useNavigate } from "react-router-dom";

const List = () => {
  const { getProducts, products, deleteProduct } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (

    <>
      <h1>Products List</h1>
      <div className="pr">
        {products.map((item) => (
          <Card sx={{ maxWidth: 345 }} key={item.id}>
            <CardMedia
              component="img"
              height="140"
              image={item.img}
              alt="green iguana"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`edit/${item.id}`}>
                <Button size="small">Edit</Button>
              </Link>
              <Button size="small" onClick={() => deleteProduct(item.id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
    
  );
};

export default List;
