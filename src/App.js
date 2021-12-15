import './App.css';
// import Chats from './components/chats/Chats';
// import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import Home from './components/home/Home'
import Rooms from './components/rooms/Rooms'
import Roomslist from './components/roomslist/Roomslist';
import Profile from './components/profile/Profile';
import CreateRoom from './components/createroom/CreateRoom';
import Chats from './components/chats/Chats';
import Login from "./components/login/Login"




function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roomslist" element={<Roomslist />} />
              <Route path="chats" element={<Chats/>} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/room/:id" element={<Rooms />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/createroom" element={<CreateRoom />} />
          </Routes>
        </AuthProvider>
    </BrowserRouter>,
    </>
  );
}

export default App;
