import Header from './common/Header';
import Footer from "./common/Footer";
import { Outlet } from 'react-router-dom';

const RouterLayout = () => {
     
    return (
      <div className='body'>
        <Header />
        <div className='page-wrap mx-auto'>
          <Outlet /> 
        </div>
        <Footer />
      </div>
  );
}



const Blogs = () => {
  console.log("this is test");
  return <h1>Blog Articles</h1>;
};

const Contact = () => {
  return <h1>contact</h1>;
};


export { RouterLayout,Blogs,Contact };