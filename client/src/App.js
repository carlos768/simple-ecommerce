import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import IndexPage from './pages/IndexPage/IndexPage'
import ProductPage from './pages/ProductPage/ProductPage';
import AdminPage from './pages/AdminPage/AdminPage';
import AddProduct from './pages/AdminPage/AddProduct';
import ManageProducts from './pages/AdminPage/ManageProducts';
import ManageUsers from './pages/AdminPage/ManageUsers';
import SignUp from './pages/AuthPage/SignUp';
import SignIn from './pages/AuthPage/SignIn';

function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path='/products' element={ <ProductPage /> }/>
      <Route path='/admin' element={<AdminPage />}/>
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/manage-products' element={<ManageProducts />} />
      <Route path='/manage-users' element={<ManageUsers />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/login' element={<SignIn />} />
    </Routes>
    </>
  );
}

export default App;
