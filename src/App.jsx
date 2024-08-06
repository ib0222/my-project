import Layout from "./Components/Layout"
import Categories from "./Pages/Categories"
import AddCategory from "./Pages/AddCategory"
import Favorites from "./Pages/Favorites"
import Basket from "./Pages/Basket"
import { Route, Routes } from "react-router"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Categories/>}/>
        <Route path="categories" element={<Categories/>}/>
        <Route path="addcategory" element={<AddCategory/>}/>
        <Route path="favorites" element={<Favorites/>}/>
        <Route path="basket" element={<Basket/>}/>
      </Route>
    </Routes>
  )
}

export default App
