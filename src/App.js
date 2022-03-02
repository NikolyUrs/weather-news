
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import News from './component/News';
import Weather from './component/Weather';



function App() {

  return (
    <>

      
        <Router>
          <Header />          
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Main />} />
                <Route exact path='/weather' element={<Weather />} />
                <Route exact path='/news' element={<News />} />
              </Routes>
            </div>
        </Router>
        <Footer />
     
    </>
  );
}

export default App;
