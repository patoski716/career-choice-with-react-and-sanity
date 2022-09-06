import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Career from './components/Career'
import Detail from './components/Detail'
import Error from './components/Error'



import './App.css';
import "./dist/output.css"


function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/detail/:slug" element={<Detail />}/>
          <Route exact path="/career" element={<Career/>}/>
          <Route exact path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
