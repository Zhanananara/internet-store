import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../contexts/ProductContextProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Edit = () => {
  const { editProduct, forEdit, saveEditProduct } = useContext(productContext);
  const [newEditProduct, setNewEditProduct] = useState(forEdit);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let newProduct = {
      ...newEditProduct,
      [e.target.name]: e.target.value,
    };
    setNewEditProduct(newProduct);
  };
  const handleSubmit = (newEditProduct) => {
    saveEditProduct(newEditProduct);
    navigate("/");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(newEditProduct);
        }}
        style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
      >
        <TextField
          onChange={(e) => handleChange(e)}
          name="title"
          value={newEditProduct.title}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="price"
          value={newEditProduct.price}
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="img"
          value={newEditProduct.img}
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Edit;
