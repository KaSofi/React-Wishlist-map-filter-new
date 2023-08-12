import { useState } from "react";
import { data } from "./data";
import "./App.css";
import Buttons from "./Buttons";
import ClothesFilter from "./ClothesFilter";

function App() {
  const [card, setCard] = useState(data);

  const deleteAllButton = () => {
    setCard([]);
  };

  const filterItems = (searchTerm) => {
    let newFilterItems = data.filter((el) => el.searchTerm === searchTerm);
    setCard(newFilterItems);
  };

  return (
    <div>
      <div className="ShopTitle">
        <h1>WISH LIST</h1>
        <h5>{card.length} items</h5>
      </div>
      <div>
        <Buttons filterItems={filterItems} setCard={setCard} />
        <ClothesFilter card={card} setCard={setCard} />
      </div>
      <div className="DeleteAllButton">
        <button onClick={() => deleteAllButton()}>DELETE ALL</button>
      </div>
    </div>
  );
}

export default App;