import {StyledCardList} from './card-list.styled';
import Card from '../card/card';

const CardList = ({removeItem, mainState, setLike}) => {
  const allCardList = mainState.items.map((card) => {

    return(
        <Card
            key={card.id}
            removeItem={removeItem}
            card={card}
            setLike={setLike}
        />)
  })

  return(
      <StyledCardList>
        {allCardList}
      </StyledCardList>
  )
}

export default CardList;