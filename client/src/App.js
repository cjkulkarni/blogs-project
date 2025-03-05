import './App.css';
import { RouterLayout } from "./router/RouterLayout";
import Header from './componants/Header';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          
               <Header />
            <RouterLayout />
             <Footer />
         
        </BrowserRouter>
      </div>
      </>
  );
}



const Footer = () => {
  return <h2>Footer</h2>
}

export default App;
