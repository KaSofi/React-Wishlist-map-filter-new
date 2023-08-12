import { data } from "./data";

function Buttons({ filterItems, setCard }) {
  return (
    <div className="FilterButtons">
      <button onClick={() => setCard(data)}>ALL</button>
      <button onClick={() => filterItems("dress")}>DRESSES</button>
      <button onClick={() => filterItems("skirt")}>SKIRTS</button>
      <button onClick={() => filterItems("bag")}>BAGS</button>
      <button onClick={() => filterItems("shoes")}>SHOES</button>
      <button onClick={() => filterItems("blazer")}>BLAZERS</button>
    </div>
  );
}

export default Buttons;