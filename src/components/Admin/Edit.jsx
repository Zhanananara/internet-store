import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductContextProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Edit = () => {
  const { id } = useParams();
  useEffect(() => {
    getId(id);
    console.log(id);
  }, []);
  const { forEdit, saveEditProduct, getId } = useContext(productContext);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    img: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let newProduct = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(newProduct);
  };
  const handleSubmit = (product) => {
    saveEditProduct(product);
    navigate("/admin");
  };

  useEffect(() => {
    if (forEdit) {
      setProduct(forEdit);
      console.log(forEdit);
    }
  }, [forEdit]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(product);
        }}
        style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
      >
        <TextField
          onChange={(e) => handleChange(e)}
          name="title"
          value={product.title}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="price"
          value={product.price}
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="img"
          value={product.img}
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />

        <Button type="submit" variant="primary">
          Save changes
        </Button>
      </form>
    </div>
  );
};

export default Edit;
