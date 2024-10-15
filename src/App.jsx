import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	About,
	Landing,
	HomeLayout,
	Error,
	Products,
	Cart,
	Checkout,
	SingleProduct,
	Register,
	Login,
	Orders,
} from "./pages";
import { ErrorElement } from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";

// actions

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: landingLoader,
			},
			{ path: "about", element: <About /> },
			{
				path: "products",
				element: <Products />,
				errorElement: <ErrorElement />,
				loader: productsLoader,
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
				errorElement: <ErrorElement />,
				loader: singleProductLoader,
			},
			{ path: "cart", element: <Cart /> },
			{ path: "checkout", element: <Checkout /> },
			{ path: "orders", element: <Orders /> },
		],
	},
	{ path: "/register", element: <Register />, errorElement: <Error /> },
	{ path: "/login", element: <Login />, errorElement: <Error /> },
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
