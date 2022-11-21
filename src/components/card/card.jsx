import {StyledCard} from './card.styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment, faHeart, faTrash} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';


const Card = ({removeItem, setLike, card}) => {

  const [isLiked, setIsLiked] = useState(false)

  const like = () => {
    setIsLiked(!isLiked)
    setLike(card)
  }

  return(
      <StyledCard>
        <img src={card.url} alt="img here"/>
        <div className="info">
          <div className="likes">
            <FontAwesomeIcon
                data={card.id}
                onClick={like}
                className={!isLiked ? 'icon' : 'red'}
                icon={faHeart}
            />
            <FontAwesomeIcon className="icon" icon={faComment}/>
          </div>
          <div className="edit">
            <FontAwesomeIcon onClick={() => removeItem(card.id)} data={card.id} className="icon" icon={faTrash}/>
          </div>
        </div>
        <div className="description">
          <p>Description here</p>
        </div>
      </StyledCard>
  )
}

export default Card;