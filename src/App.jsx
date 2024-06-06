import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Root from "./pages/root.jsx";
import MealsDetail from "./components/meals/mealsDetail/index.jsx";
import Astronaut404 from "./components/404page/Astronaut404.jsx";
import Main from "./pages/main.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Root />}>
        <Route path={'/'} element={<Main />} index/>
        <Route
            path={'meals/:id'}
            element={<MealsDetail />}
            errorElement={<Astronaut404 />}/>

        <Route
        path={'error'}
        element={<Astronaut404 />}
        />
    </Route>

))
function App() {
  return <RouterProvider router={router} />
}

export default App
