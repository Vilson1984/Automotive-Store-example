import './App.css';
import './components/CarGallery/CarGallery.css'
import Footer from './components/Route/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'



function App() {
  

  return (
    <div className='Main'>
      <>
        <Header />
        <Home />
        <Footer />
      </>
    </div>
  )

}

export default App;
