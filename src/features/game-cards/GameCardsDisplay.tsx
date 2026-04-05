import { Card } from "../../components/Card"

interface GameCardsDisplayProps {
  
}

export const GameCardsDisplay = (props: GameCardsDisplayProps) => {
  return (
    <>
      <Card
        containerCss="w-full md:w-180"
        header={<>
          <p>Display 8 Random Games</p>
          <button className="cursor-pointer">Refresh</button>
        </>}
        childContent={<>
          <GameCard title="hello" description="again" />
        </>}
      >
      </Card>
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