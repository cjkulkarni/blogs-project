import { Link } from "react-router-dom";

const Header = () => {
       setTimeout(() => {
        console.log("this is test header ");
    }, 1000);

     return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          MySite
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-200 transition">Blog</Link>
          </li>
          
          <li>
            <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
          </li>
        </ul>

  
      </div>

      {/* Mobile Menu Dropdown */}
      
        <div className="md:hidden bg-blue-700">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-200 transition" >Home</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-200 transition" >Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200 transition" >Contact</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}


export default Header;