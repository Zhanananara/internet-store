import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Outlet, useNavigate } from "react-router-dom";

const List = () => {
  const { getProducts, products, deleteProduct, editProduct } =
    useContext(productContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const handleEdit = (id) => {
    editProduct(id);
    navigate("edit");
  };

  return (
    <div>
      <h1>Admin Products List</h1>

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
              {item.prise}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleEdit(item.id)}>
              Edit
            </Button>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default List;
