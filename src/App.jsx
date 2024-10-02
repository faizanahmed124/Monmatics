
import Footer from './Components/Footer/Footer';
import SmallFooter from './Components/Footer/SmallFooter';

import MainHome from './Components/Homepage/MainHome';
import Accountung from './Components/Navbar/Apps-pages/Accountung';
import Invoices from './Components/Navbar/Apps-pages/Invoices';
import Login from './Components/Navbar/Loginpage/Login';
import Navigation1 from './Components/Navbar/Navbarpages/Navigation1';
import Navigation2 from './Components/Navbar/Navbarpages/Navigation2';
import Navigation3 from './Components/Navbar/Navbarpages/Navigation3';
import './index.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <>
   <Router>
   <Navigation1/>
 <div className='hidden lg:flex'> <Navigation2/> </div>
 <div className=' lg:hidden'> <Navigation3/></div>

       <Routes>
    <Route path='Login'element={<Login/>}/>
    <Route path='/'element={<MainHome/>}/>
    <Route path ='Accounting' element= {<Accountung/>}/>
    <Route path ='Invoices' element= {<Invoices/>}/>

      </Routes>
      <div className='hidden lg:block'> <Footer/> </div>
      <div className='block lg:hidden '> <SmallFooter/></div>
      </Router>
    </>
  );
}

export default App;
