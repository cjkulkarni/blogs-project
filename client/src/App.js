import './App.css';
import { RouterLayout, Blogs, Contact } from "./componants/RouterLayout";
import Home from './componants/Home';
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
