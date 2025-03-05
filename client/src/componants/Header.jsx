import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Layout, Home, Blogs, Contact } from "../router/RouterLayout";

const Header = () => {
       setTimeout(() => {
        console.log("this is test header ");
    }, 1000);

    return (
        <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
           {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
       </Routes>
       
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