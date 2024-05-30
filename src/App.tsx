import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Counter from './components/Counter';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import ProductDetails from './pages/ProductDetails';
import AppLayout from './components/ui/AppLayout';
import Menu, { loader as menuLoader } from './pages/Menu';
import Error from './components/Error';
import Order, { loader as orderLoader } from './pages/Order';
import CreateOrder, {
  action as createOrderAction,
} from './components/CreateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <ProductDetails /> },
      {
        path: 'order/:id',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      { path: 'products/new', element: <NewProduct /> },
      {
        path: 'order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: 'menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Counter />
    </div>
  );
}

export default App;
