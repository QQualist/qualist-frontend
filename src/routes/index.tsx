import { Routes, Route } from 'react-router-dom';
import { 
  Checklists,
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
            <Route path='/checklists' element={<Checklists />} />
            </Route>

            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default RouteNavigators