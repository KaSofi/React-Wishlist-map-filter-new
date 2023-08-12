import binLogo from "./assets/binIcon.png";

function ClothesFilter({ card, setCard }) {
  const deleteItem = (id) => {
    let newDeleteItem = card.filter((item) => item.id !== id);
    setCard(newDeleteItem);
  };

  return (
    <div className="App">
      {card.map((el) => {
        const { id, title, price, image } = el;
        return (
          <div key={id} className="Card">
            <img src={image} width={300} alt="" />
            <div className="TitleAndPriceCard">
              <p>{title}</p>
              <p>{price} EUR</p>
            </div>
            <div className="BinLogoButton">
              <button onClick={() => deleteItem(id)}>
                <img src={binLogo} alt="binLogo" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ClothesFilter;