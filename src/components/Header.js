import React from "react";
import FunnyChickenPink from "../img/Funny-Pink-Werid-Chicken.jpg";


function Header() {
  return (
    <React.Fragment>
      <h1> Cock-A-Doodle-Who????</h1>
      <img src={FunnyChickenPink} alt="a awesome chicken" />
    </React.Fragment>
  )
}
export default Header;