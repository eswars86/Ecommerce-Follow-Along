import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Login,SignupPage, Homepage} from './Routes.jsx'
 

 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Homepage />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
 
    </Routes>
    </BrowserRouter>
 
  );
}
 
export default App;
 