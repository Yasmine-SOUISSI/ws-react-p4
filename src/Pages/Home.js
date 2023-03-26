import { useState } from "react";
import CardList from "../Components/CardList";
import NavBar from "../Components/NavBar";
import { products } from "../Data/products";
import useResponsive from "../hooks/useResponsive";

const HomePage = () => {
  const pages = ["Products", "Pricing", "Blog"];
  const [productsList, setProductsList] = useState(products);
  const [search, setSearch] = useState('')
  const { width, height } = useResponsive();
  console.log('width', width)
  console.log('height', height)
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    img: "",
  });
  console.log('productsList', productsList.length)
  console.log('newProduct', newProduct)
  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    })
  }
  const addProduct = (newProduct) => {
    setProductsList([...productsList,
    {
      id: productsList.length + 1,
      ...newProduct
    }
    ])
  }

  console.log('productsList', productsList)

  const deleteProduct = (id) => {
    setProductsList(productsList.filter((product) => product.id !== id))
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <NavBar
        pages={["Profile", "Account", "Dashboard", "Logout"]}
        settings={pages}
      />
      <input type="text" placeholder="Search"
        onChange={handleSearch}
      />
      <CardList data={productsList}
        deleteProduct={deleteProduct}
        search={search}
      />
      <label>Name</label>
      <input type="text"
        name="name"
        onChange={handleChange}
      />
      <label>Price</label>
      <input type="number"
        name="price"
        onChange={handleChange}

      />
      <label>Image</label>
      <input type="text"
        name="img"
        onChange={handleChange}

      />
      <label>Description</label>
      <textarea
        name="description"
        onChange={handleChange}

      />
      <button onClick={() => addProduct(newProduct)}>Add Product</button>
    </>
  );
};

export default HomePage;
