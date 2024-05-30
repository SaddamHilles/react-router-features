import { LoaderFunctionArgs, useLoaderData, useNavigation } from "react-router-dom";
import { getOrder } from "../services/apiRestaurant";

interface Order {
  customer: string;
  status: string;
  priority: boolean;
  cart: CartItem[];
  id: string;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
}

interface CartItem {
  addIngredients: string[];
  removeIngredients: string[];
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}


function Order() {
  const {customer, orderPrice, priority} = useLoaderData() as Order

  return <div>
    <p>Customer name: <span>{customer}</span></p>
  </div>;
}

export async function loader({params}: LoaderFunctionArgs){
  const order = await getOrder(String(params.id!))
  return order
}

export default Order;
