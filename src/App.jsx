
import Address from './Compponents/Address';
import Comments from './Compponents/Comments'
import GetCard from './Compponents/GetCard'
import Navbar from './Compponents/Navbar'
import Photos from './Compponents/Photos'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/users' Component={GetCard} />
      </Routes>
      <Routes>
        <Route path='/comments' Component={Comments} />
      </Routes>
      <Routes>
        <Route path='/photos' Component={Photos} />
      </Routes>
      <Routes>
        <Route path='/address/:id' Component={Address} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
