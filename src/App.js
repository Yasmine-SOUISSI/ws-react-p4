import "./App.css";
import HomePage from "./Pages/Home";
import Main from "./State/Main";

function App() {
  return (
    <HomePage>
      <h1>Home Page</h1>
      <img src='https://picsum.photos/200/300' alt='random' />
      <Main title='Counter' />
    </HomePage>
  );
}

export default App;
