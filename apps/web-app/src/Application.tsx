import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Private from './screens/Private';
import Login from './screens/Authentication/Login';
import GuardRoute from './guards';

function Application() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<GuardRoute privateValidation={true} />}>
            <Route path="/*" element={<Private />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
export default Application;
