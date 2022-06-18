import {Routes, Route} from 'react-router-dom';

import Navigation from './routes/navigation/navigation-comp';
import Homeage from './routes/homepage/homepage-comp';
import Authentication from './routes/sign-in/authentication-page-comp';
import Shop from './routes/shop/shop-comp';


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Homeage />} />
        <Route path='sign-in' element={<Authentication/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );
}

export default App;
