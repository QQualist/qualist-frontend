import { Routes, Route } from 'react-router-dom';
import { 
    Dashboard,
  SignIn,
  SignUp
} from '../views';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './privateRoutes';


const RouteNavigators = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />

            <Route path='/' element={<PrivateRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            </Route>

            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default RouteNavigators