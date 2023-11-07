import {LoginPage} from '../pages/Login'
import { MainPage } from '../pages/MainPage';

import { MantineProvider} from '@mantine/core'

// import { PrivateRoute } from "../routes/PrivateRoutes";
import { Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
      <MantineProvider>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<LoginPage />} />
        </Routes>
      </MantineProvider>
  );
};
