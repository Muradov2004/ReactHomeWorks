import PropTypes from 'prop-types';
import {useState} from "react";

const Goods = ({name, description, price}) => {
  const [nameState, setName] = useState(name);
  const [descriptionState, setDescription] = useState(description);
  const [priceState, setPrice] = useState(price);
  return (
    <div>
      <h1>Product</h1>
      <p>Name : {nameState}</p>
      <p>Description : {descriptionState}</p>
      <p>Price : {priceState}$</p>
    </div>
  );
}

Goods.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
}

export default Goods;