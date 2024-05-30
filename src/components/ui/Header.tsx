import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Product</Link>
        <Link to={'/about-us'}>About-Us</Link>
        <Link to={'/menu'}>Menu</Link>
        <p>Saddam</p>
      </nav>
    </header>
  );
}

export default Header;
