import React from "react";

const Add = () => {
  return (
    <div>
      <h1>add</h1>
      <IconButton
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>
      <h2>Add new product </h2>
      <Form saveValues={addProduct} compForEdit={false} />
    </div>
  );
};

export default Add;
