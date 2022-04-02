import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import MainLayout from "./layuots/MainLayout";
import Add from "./components/Admin/Add";
import Form from "./components/Admin/Form";
import List from "./components/Admin/List";
import Edit from "./components/Admin/Edit";
import EEdit from "./components/Admin/Edit";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Admin />}>
            <Route index element={<List />} />
            <Route path="add" element={<Add />} />
            <Route path="edit/:id" element={<Edit />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
