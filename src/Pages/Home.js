import CardList from "../Components/CardList";
import NavBar from "../Components/NavBar";
import { products } from "../Data/products";
import { profiles } from "../Data/profile";

const HomePage = ({ children }) => {
  const pages = ["Products", "Pricing", "Blog"];

  return (
    <>
      <NavBar
        pages={["Profile", "Account", "Dashboard", "Logout"]}
        settings={pages}
      />
      <CardList data={products}  />
      <CardList data={profiles}  />
      {children}
    </>
  );
};

export default HomePage;
