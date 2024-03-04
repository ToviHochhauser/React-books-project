import './App.css';
import ApperBar from './features/navigation/ApperBar';
import AllBooks from "./features/book/AllBooks";
import { Routes, Route } from 'react-router-dom';
import LogInOrSignUp from './features/user/LogInOrSignUp';
import { Grid } from '@mui/material';
import ShoppingCartContainer from "./features/order/ShopingCart"
function App() {
  return (
    <div id='all'> 
      <ApperBar />
           <Routes>
        <Route path="allBooks" element={<AllBooks />} />
        <Route path="shopingCart" element={<ShoppingCartContainer />} />
        <Route path="register" element={
          <Grid container direction="column" alignItems="center" justifyContent="center" 
          style={{minHeight:"50vh"}}>
            <Grid item>
              <LogInOrSignUp />
            </Grid>
          </Grid>
        } />
      </Routes>
    </div>
  );
}

export default App;
