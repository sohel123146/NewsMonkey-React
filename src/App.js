import './App.css';
import React, { useState } from 'react';
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 15;
  const apiKey = "5c6a9afa69c84015a36252f472309dac";

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />} />
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category='business' />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category='entertainment' />} />
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />} />
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category='health' />} />
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category='science' />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category='sports' />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category='technology' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;