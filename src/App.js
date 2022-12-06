import './App.css';
import {useEffect, useState} from 'react';
import Loader from './components/loader/loader';
import CardList from './components/card-list/card-list';

function App() {
  const [mainState, setMainState] = useState({
    isLoaded: false,
    items: []
  })

  const [isLiked, setIsLiked] = useState(false)
  const [sortItems, setSortItems] = useState(false)
  const [likedStore, setLikedStore] = useState([])

  useEffect(() => {

    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then((result) => setMainState({isLoaded: true, items: result }))
        .then((result) => {
          const itemsWithLikes = result.map((item) => {item.isLiked = false; return item})
          setMainState({ isLoaded: true, items: itemsWithLikes })
        })
  }, [])

  // Обработка постановки лайка
  const setLike = (card) => {
    card.isLiked = !card.isLiked
  }

  // Удаление карточки из списка
  const removeItem = (id) => {
    const filterItems = mainState.items.filter((el) => el.id !== id)
    setMainState({isLoaded: true, items: filterItems})
  }

  //Фильтрация карточек по лайкам
  const cardWithLikes = () => {
    if(!sortItems){
      setSortItems(!sortItems)
      const filterState = mainState.items.filter(el => el.isLiked === true)
      setLikedStore({isLoaded: true, items: filterState})
    } else {
      setSortItems(!sortItems)
    }
  }

  return (
      <div className="App">
        <div className="container">
          <h1>Everybody likes kitties</h1>
          <h2>Me too</h2>
          <button onClick={cardWithLikes} isActive={sortItems}>Sort liked kittie`s</button>
          {!mainState.isLoaded  ?
              <Loader/> :
              <CardList
                  mainState={!sortItems ? mainState : likedStore}
                  removeItem={removeItem}
                  isLiked={isLiked}
                  setLike={setLike}
              />
          }
        </div>
      </div>
  );
}

export default App;
