import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Movies from './Movies';
import Login from './Login';
import Theatreinfo from './Theatreinfo';
import Profile from './Profile';
import CustomLayout from '../Components/Layout';
import Seating from './Seating';
import Scrolltotop from '../Components/Scrolltotop';
import Booking from './Booking';
import Success from './Success';
import Signup from './Signup';
import Orders from './Orders';
const App: React.FC = () => {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<CustomLayout> <Scrolltotop/><Home /></CustomLayout>} />
                    <Route path='/Login' element={<CustomLayout> <Scrolltotop/><Login /></CustomLayout>} />
                    <Route path='/Signup' element={<CustomLayout> <Scrolltotop/><Signup /></CustomLayout>} />
                    <Route path='/Theatreinfo' element={<CustomLayout> <Scrolltotop/><Theatreinfo /></CustomLayout>} />
                    <Route path='/Movies' element={<CustomLayout>  <Scrolltotop/><Movies /></CustomLayout>} />
                    <Route path='/Seating' element={<CustomLayout>  <Scrolltotop/><Seating /></CustomLayout>} />
                    <Route path='/Booking' element={<CustomLayout>  <Scrolltotop/><Booking /></CustomLayout>} />
                    <Route path='/Success' element={<CustomLayout>  <Scrolltotop/><Success /></CustomLayout>} />
                    <Route path='/Profile' element={<CustomLayout>  <Scrolltotop/><Profile /></CustomLayout>} />
                    <Route path='/Orders' element={<CustomLayout> <Scrolltotop/><Orders /></CustomLayout>} />

                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;