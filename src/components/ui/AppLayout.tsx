import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from '../Loader';
import SearchOrder from '../SearchOrder';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div>
      <Header />
      <SearchOrder />
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
    </div>
  );
}

export default AppLayout;
