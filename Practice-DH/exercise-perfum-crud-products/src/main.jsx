import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createServer, Model } from "miragejs";
import {BrowserRouter as Router} from 'react-router-dom';

createServer({
  models: {
    product: Model,
  },
  seeds(server) {
    server.create("product", {
      id: 1,
      title: "Brown Perfume",
      description: "Royal_Mirage Sport Brown Perfu...",
      price: 40,
      stock: 52,
      category: "fragrances",
      image: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
    });
    server.create("product", {
      id: 2,
      title: "Samsung Galaxy S23 Ultra",
      description: "This model has a 12 MP self-portrait camera, a 12 MP ultra-wide camera and two 10 MP telephoto cameras with 10X and 3X optical zoom. Regarding the video section, the S23 Ultra cameras allow you to record in 8K up to 30 FPS, and in 4K up to 60 FPS, while the front lens records at 4K 60 FPS.",
      price: 1500,
      stock: 23,
      brand: "Samsung",
      category: "smartphones",
      image: "https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/g/a/galaxy_s23_ultra_black_with_decal_ecommerce_f3ac.png",
    });
    server.create("product", {
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      description: "HP Pavilion 15-DK1056WM Gaming...",
      price: 1099,
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      image: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
    });
  },

  routes() {
    this.namespace = "api/products";

    this.get("/", (schema, request) => {
      return schema.products.all();
    });

    this.get("/:id", (schema, request) => {
      let id = request.params.id;
      return schema.products.find(id);
    });

    this.put("/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let product = schema.products.find(id);
      return product.update(newAttrs);
    });

    this.post("/", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.products.create(attrs);
    });

    this.delete("/:id", (schema, request) => {
      let id = request.params.id;
      return schema.products.find(id).destroy();
    });
  },
});




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,

)
