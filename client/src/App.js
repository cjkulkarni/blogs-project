import './App.css';
import { RouterLayout,  Home, Blogs, Contact } from "./router/RouterLayout";
//import Header from './componants/Header';
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
           {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>  
        </BrowserRouter>
      </div>
      </>
  );
}






export default App;
