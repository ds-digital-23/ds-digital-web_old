import './styles/reset.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPageClient from './Pages/signUpPageClient/signUpPageClient';
import LoggedInPage from './Pages/loggedInPage/loggedInPage';
import DSPage from './Pages/DSPage/DSPage';

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<DSPage />} />
    <Route path="/sign-up-as-client" element={<SignUpPageClient />} />
    <Route path="/logged-in-page" element={<LoggedInPage />} />
  </Routes>
</BrowserRouter>
);

export default App;
