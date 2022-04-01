import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();

const INIT_STATE = {
  products: [],
  productToEdit: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

const ProductContextProvider = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      let { data } = await axios(API);

      dispatch({
        type: "GET_PRODUCTS",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTodos();
  };

  return <div></div>;
};

export default ProductContextProvider;
