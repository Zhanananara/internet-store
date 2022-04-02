import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { notify } from "../Toastify";

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
    case "GET_ID":
      return {
        ...state,
        forEdit: action.payload,
      };

    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

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

  const addProduct = async (newProduct) => {
    try {
      let res = await axios.post(API, newProduct);
      navigate("/admin");
      notify("info", " Успешно добавлен!");
    } catch (err) {
      console.log(err);
    }
  };

  async function getId(id) {
    try {
      let { data } = await axios(`${API}/${id}`);
      let action = {
        type: "GET_ID",
        payload: data,
      };
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }


  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
    notify("success", "Успешно удален ");
  };

  const saveEditProduct = async (newProduct) => {
    try {
      await axios.patch(`${API}/${newProduct.id}`, newProduct);
      getProducts();
      notify("success", "Успешно изменен! ");
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

        saveEditProduct,
        getId,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
