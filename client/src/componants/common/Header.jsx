import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import { Button } from "./Layouts";

const Header = () => {
       setTimeout(() => {
        console.log("this is test header ");
    }, 1000);

  return (
       
    <nav className="bg-white-600 text-black sticky top-0 border-b-2 border-blue-100 bg-white">
      <div className="container mx-auto flex justify-between px-4 py-2">
      <div className="container mx-auto flex justify-start items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold mr-20">
           <img src={logo} className='w-16' alt='center' title='center'  />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg ">
          <li>
            <Link to="/" className="hover:text-amber-500 transition">Home</Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-amber-500 transition">Blog</Link>
          </li>
          
          <li>
            <Link to="/contact" className="hover:text-amber-500 transition">Contact</Link>
          </li>
        </ul>
      </div>
        <Button text="Login" link="/login" className="bg-blue-500"/>
      </div>
      {/* Mobile Menu Dropdown */}
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4 space-y-4 text-base ">
            <li>
              <Link to="/" className="hover:text-amber-500 transition" >Home</Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-amber-500 transition" >Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-500 transition" >Contact</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Header;