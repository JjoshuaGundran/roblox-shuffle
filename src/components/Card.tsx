interface CardProps {
  containerCss?: string;
  header?: React.ReactNode;
  childContent?: React.ReactNode;
}

export const Card = (props: CardProps) => {
  let containerCss = `card rounded-xl overflow-hidden shadow-md`

  const getContainerCss = () => {
    if (props.containerCss === undefined || props.containerCss?.length === 0) return containerCss;

    return containerCss + " " + props.containerCss;
  }

  return (
    <div className={getContainerCss()}>
      {props.header &&
        <div className="card-header flex justify-between items-center border-b border-b-gray-500/25 p-3">
          {props.header}
        </div>
      }
      <div className="p-4">
        {props.childContent}
      </div>
    </div>
  )
}