import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();

export const useProductContext = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  forEdit: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "EDIT_PRODUCTS":
      return { ...state, forEdit: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  const addProduct = async (newProduct) => {
    try {
      let res = await axios.post(API, newProduct);
    } catch (err) {
      console.log(err);
    }
  };

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
    getProducts();
  };

  const editProduct = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
  };

  const saveEditProduct = async (newProduct) => {
    try {
      await axios.patch(`${API}/${newProduct.id}`, newProduct);
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        forEdit: state.forEdit,
        addProduct,
        getProducts,
        deleteProduct,
        editProduct,
        saveEditProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
