
import Register from './components/register/Register'
import Login from './components/login/login';
import {Routes,Route} from 'react-router-dom'
import PrivateRoute from './components/privateroute/PrivateRoute';
function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/app/privateRoute' element = {<PrivateRoute/>}/>
     </Routes>


    </div>
  );
}

export default App;
