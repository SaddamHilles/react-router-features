import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../services/apiRestaurant';

interface MenuItem {
  id: number;
  name: string;
  unitPrice: number;
  soldOut: number;
  imageUrl: string;
  ingredients: string[];
}
function Menu() {
  const menu = useLoaderData() as MenuItem[];
  return (
    <u style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {menu.map(item => (
        <li
          key={item.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '0.8rem ',
          }}
        >
          <div style={{ padding: '0.3rem 0' }}>
            <span>{item.name}</span>
            <br />
            <span>$ {item.unitPrice}</span>
          </div>
          <img src={item.imageUrl} alt={item.name} width={200} />{' '}
        </li>
      ))}
    </u>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
