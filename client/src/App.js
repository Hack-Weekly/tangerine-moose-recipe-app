// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Navbar from "./components/utility/Navbar";
import MyRecipes from "./pages/MyRecipes";
import AddRecipe from "./pages/AddRecipe";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='search' element={<Search />} />
          <Route path='my-recipes' element={<MyRecipes />} />
          <Route path='add' element={<AddRecipe />} />
          <Route path='recipe/:id' element={<Recipe />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
