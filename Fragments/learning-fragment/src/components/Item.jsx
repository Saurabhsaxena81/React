import style from "./Item.module.css";
// passing function via props
function Item({ foodItem, bought, handleBuyButton }) {
  //   let { foodItem } = props; //object destructuring
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought`);
  // };
  return (
    <li
      className={`${style["kg-item"]} list-group-item ${bought && "active"} `}
    >
      {/** here active is used to colored blue */}
      <span className={style["kg-span"]}>{foodItem}</span>

      <button
        // className={`${style.button} btn btn-info`}
        // onClick={(event) => handleBuyButtonClicked(event)}
        className={`${style.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
      {/* <button
        className={`${style.button} btn btn-info`}
        onClick={() => console.log(`${foodItem} being bought`)}
      >
        Buy
      </button> */}
    </li>
  );
}
export default Item;
