import { Link, Outlet } from "react-router-dom";

const Header = () => {
       setTimeout(() => {
        console.log("this is test header ");
    }, 1000);

    return (
        <>
    
       
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
    );
}


export default Header;