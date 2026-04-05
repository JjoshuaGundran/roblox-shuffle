import { Card } from "../../components/Card"

interface GameCardsDisplayProps {
  
}

export const GameCardsDisplay = (props: GameCardsDisplayProps) => {
  const DisplayHeader = () => {
    return (
      <>
        <p className="h-fit">Display 8 Random Games</p>
        <button className="btn cursor-pointer px-2 py-1 rounded-md">Refresh</button>
      </>
    )
  }
  
  return (
    <>
      <Card
        containerCss="w-full md:w-180"
        header={DisplayHeader()}
        childContent={<GameCard title="hello" description="again" />}
      />
    </>
  )
}

interface GameCardProps {
  title: string;
  description: string;
}

const GameCard = (props: GameCardProps) => {
  return (
    <Card
        header={<h2>{props.title}</h2>}
        childContent={<p>{props.description}</p>}
      >
    </Card>
  )
}