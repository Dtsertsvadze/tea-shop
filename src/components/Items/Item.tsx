import "./Item.css";
import img1 from "../../images/products/tea/tea1.webp";
import img2 from "../../images/products/tea/tea2.webp";
import img3 from "../../images/products/tea/tea3.webp";
import img4 from "../../images/products/tea/tea4.webp";
import img5 from "../../images/products/tea/tea5.webp";
import img6 from "../../images/products/tea/tea6.webp";
import img7 from "../../images/products/tea/tea7.webp";
import img8 from "../../images/products/tea/tea8.webp";
import img9 from "../../images/products/tea/tea9.webp";
import { useState } from "react";

interface teas {
  img: string;
  price: number;
  servingSize: number;
  species: string;
}

const TEAS: teas[] = [
  {
    img: img1,
    price: 4.85,
    servingSize: 50,
    species: "Ceylon Ginger Cinnamon chai tea",
  },
  {
    img: img2,
    price: 4.85,
    servingSize: 50,
    species: "Ceylon Ginger Cinnamon chai tea",
  },
  {
    img: img3,
    price: 4.85,
    servingSize: 50,
    species: "Ceylon Ginger Cinnamon chai tea",
  },
  {
    img: img4,
    price: 4.85,
    servingSize: 50,
    species: "Ceylon Ginger Cinnamon chai tea",
  },
  {
    img: img5,
    price: 4.85,
    servingSize: 50,
    species: "Ceylon Ginger Cinnamon chai tea",
  },
  {
    img: img6,
    price: 4.85,
    servingSize: 50,
    species: "Ceylon Ginger Cinnamon chai tea",
  },
  {
    img: img7,
    price: 4.85,
    servingSize: 50,
    species: "Ceylon Ginger Cinnamon chai tea",
  },
  {
    img: img8,
    price: 4.85,
    servingSize: 50,
    species: "Ceylon Ginger Cinnamon chai tea",
  },
  {
    img: img9,
    price: 4.85,
    servingSize: 50,
    species: "Ceylon Ginger Cinnamon chai tea",
  },
];

const Item = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const hoverHandler = (id: number) => {
    setHoveredItem(id);
  };

  const mouseLeaveHandler = () => {
    setHoveredItem(null);
  };

  const items = TEAS.map((i: teas, idx: number) => (
    <div className="item-container__tea" key={idx}>
      <div
        onMouseEnter={() => hoverHandler(idx)}
        onMouseLeave={mouseLeaveHandler}
        className="img-wrapper"
      >
        {hoveredItem === idx ? (
          <div className="img-wrapper__details">
            <button className="img-wrapper__details-button">
              <p className="img-wrapper__details-button-details">details</p>
            </button>
            <button className="img-wrapper__details-button">
              <p className="img-wrapper__details-button-details">Add To Bag</p>
            </button>
          </div>
        ) : (
          ""
        )}

        <img className="item-container__tea-img" src={i.img} />
      </div>
      <p className="item-container__tea-name">{i.species}</p>
      <div className="price-container">
        <p className="item-container__tea-price">${i.price}</p>
        <p className="item-container__tea-serving">/{i.servingSize}g</p>
      </div>
    </div>
  ));

  return <div className="item-container">{items}</div>;
};

export default Item;
