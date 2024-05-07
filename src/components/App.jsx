import {LoginPage} from '../pages/Login'
import { MainPage } from '../pages/MainPage';
import {SignUpPage} from '../pages/SignUp'
import {OverviewPage} from '../pages/Overview'
import { DevicesPage } from "../pages/Devices";
import {AccountPage} from '../pages/Account'
import { SettingsPage } from "../pages/Settings";
import { MantineProvider} from '@mantine/core'
import { PrivateRoute } from "../routes/PrivateRoutes";
import {PublicRoute} from '../routes/PublicRoute'
import { Routes, Route } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {selectToken} from '../redux/auth/auth-selectors'
import './index.css'

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
  }, [dispatch, token]);
  return (
      <MantineProvider>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/login' element={<PublicRoute component={<LoginPage />} />} />
          <Route path='/signup' element={<PublicRoute component={<SignUpPage />} />} />
          {/* <Route path='/overview' element={<PrivateRoute component={<OverviewPage />} />}/> */}
          <Route path='/devices' element={<PrivateRoute component={<DevicesPage />} />}/>
          <Route path='/devices/:deviceId' element={<PrivateRoute component={<OverviewPage />} />} />
          <Route path='/account' element={<PrivateRoute component={<AccountPage />} />}/>
          <Route path='/settings' element={<PrivateRoute component={<SettingsPage />} />}/>
        </Routes>
      </MantineProvider>
  );
};
