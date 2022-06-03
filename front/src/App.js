import React from "react";
import { Provider } from "react-redux";
import { Route, Routes} from 'react-router-dom'
import Header from './common/header';
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from './pages/login';
import Write from './pages/write';
import store from './store';
import Buy from './pages/buy';
import BookDetail from './pages/bookdetail'
import Register from './pages/register';
import Center from './pages/center';
import About from './pages/about'
import './App1.css';



function App() {
  return (
    //1.Provider provides the data of store to Header
    //so Header can acquire the data in store
    <Provider store={store}>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/write' element={<Write/>}></Route>
          <Route path='/detail:id' element={<Detail />}></Route>
          <Route path='/bookdetail/:id' exact element={<BookDetail />}></Route>
          <Route path='/buy' element={<Buy />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/center' element={<Center />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path="*" element={<Home />}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
