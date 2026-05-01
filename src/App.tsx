import { useEffect } from "react"
import { GameCardsDisplay } from "./features/game-cards/GameCardsDisplay"
import { fetchData } from "./features/game-cards/hooks";

const App = () => {
  useEffect(() => {
    console.log(fetchData());
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">Roblox Shuffle</h1>
      <GameCardsDisplay />
    </>
  )
}

export default App
