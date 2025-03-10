import './App.css';
import { RouterLayout, Layout, Home, Blogs, Contact } from "./router/RouterLayout";
import Header from './componants/Header';
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
           {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>  
          <Header/>
          <Layout />
          <Footer/>           
         
        </BrowserRouter>
      </div>
      </>
  );
}


const Footer = () => {
  return <h2>Footer</h2>
}



export default App;
