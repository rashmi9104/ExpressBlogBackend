import './App.css';
import Body2 from './Components/Body/Body2';
// import Body from './Components/Body/Body';
import Discover from './Components/Discover/Discover';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Header2 from './Components/Header/Header2';
import HeroSection from './Components/HeroSection/HeroSection';
import TrendingPart from './Components/TrendingPart/TrendingPart';
import Login from './Components/Accounts/Login';

function App() {
  return (
    <div className="App">
      <Header2/>  
      <Body2/>
      {/* <Header/>
      <HeroSection/>
      <TrendingPart/>
      <Discover/> */}
      <Footer/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
