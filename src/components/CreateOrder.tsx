import {
  ActionFunction,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { createOrder } from '../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];
type Errors = { phone: string };

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const formErrors = useActionData() as Errors;
  console.log('formErrors: ', formErrors);
  return (
    <div style={{ width: '50%' }}>
      <h2>Ready to order? Let's go!</h2>

      {/* <Form method='POST' action='/order/new'> */}
      <Form method='POST'>
        <fieldset style={{ padding: '2rem 1.5rem' }}>
          <legend>Create Order</legend>
          <div>
            <label>First Name </label>
            <input type='text' name='customer' required />
          </div>

          <div>
            <label>Phone number</label>
            <div>
              <input type='tel' name='phone' required />
            </div>
            {formErrors?.phone && (
              <p style={{ color: 'red', margin: '0.4rem 0' }}>
                {formErrors?.phone}
              </p>
            )}
          </div>

          <div>
            <label>Address</label>
            <div>
              <input type='text' name='address' required />
            </div>
          </div>

          <div>
            <input
              type='checkbox'
              name='priority'
              id='priority'
              // value={withPriority}
              // onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor='priority'>Want to give your order priority?</label>
          </div>

          <div>
            <input type='hidden' name='card' value={JSON.stringify(cart)} />
            <button disabled={isSubmitting}>
              {isSubmitting ? 'Placing order...' : 'Order now'}
            </button>
          </div>
        </fieldset>
      </Form>
    </div>
  );
}

export const action: ActionFunction = async ({ request, params, context }) => {
  // console.log('context: ', context);
  // console.log('params: ', params);
  const formData = await request.formData();
  const data: any = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.card),
    priority: data.priority === 'on',
  };
  console.log('order: ', order);

  const errors = {} as Errors;
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
