import { BrowserRouter, Route, Routes } from "react-router-dom";
import Propage from './Propage';
import Details from "./Details";
import Cheakout from "./Cheakout";
import Pagenotfund from "./Pagenotfund";
import Homepage from './Homepage';
import Layout from './layouts/Layout';
import { ThemeProvider } from "./context/ThemeContext";


import  {CardProvider  }  from "../src/context/Cardcontext";
import GetPro from './context/getpro';

function App() {
  return (
    
    <BrowserRouter>
    <ThemeProvider>
      <CardProvider>
        <GetPro>
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<Propage />} />
              <Route path="/products/:id" element={<Details />} />
              <Route path="/Cheakout" element={<Cheakout />} />
              <Route path="/*" element={<Pagenotfund />} />
            </Routes>
          </Layout>
        </GetPro>
      </CardProvider>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
