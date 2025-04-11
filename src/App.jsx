import './app.css'
import LeftBar from "./components/leftBar/LeftBar"
import TopBar from "./components/topBar/TopBar"
import Gallery from "./components/gallery/Gallery"

const App = () => {
  return (
    <div className='app'>
      <LeftBar></LeftBar>
      <div className='content'>
        <TopBar></TopBar>
        <Gallery></Gallery>
      </div>
    </div>
  )
}

export default App