import Header from '../componants/Header';
import { Outlet } from 'react-router-dom';

const RouterLayout = () => {
     
    return (
      <div className='body'>
        <Header />
        <div className='page-wrap container mx-auto px-4 py-3'>
          <Outlet /> 
        </div>
        <Footer />
      </div>
  );
}

const Home = () => {
     
  return <h1>Home</h1>;
};

const Blogs = () => {
  console.log("this is test");
  return <h1>Blog Articles</h1>;
};

const Contact = () => {
  return <h1>contact</h1>;
};

const Footer = () => {
  return <h2 className="footer"> this is footer</h2>
}
export { RouterLayout,Home,Blogs,Contact };