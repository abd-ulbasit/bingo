import ComputerBoard from "./components/ComputerBoard"
import DesignPlayerBoard from "./components/DesignPlayerBoard"
import PlayerBoard from "./components/PlayerBoard"

function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <ComputerBoard></ComputerBoard>
      <DesignPlayerBoard></DesignPlayerBoard>
      <PlayerBoard></PlayerBoard>
    </div>
  )
}

export default App
