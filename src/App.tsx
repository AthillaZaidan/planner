import Navigation from "./nav"
import MainArea from "./mainArea"
import './App.css'

function App() {

  return (
    <>
      <div className="grid h-screen w-screen grid-cols-[1fr_4fr] grid-rows-1 gap-0 bg-putihkmj overflow-hidden">
        <div>
          <Navigation />
        </div>        
        <div>
          <MainArea />
        </div>
      </div>
    </>
  )
}

export default App
