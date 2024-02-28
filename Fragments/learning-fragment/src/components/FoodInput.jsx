import style from "./FoodInput.module.css";
function FoodInput({ handleKeyDown }) {
  // const handleOnEvent = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter Food Name "
      className={style.foodInput}
      onKeyDown={handleKeyDown}
    />
  );
}
export default FoodInput;
