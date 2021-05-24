import React from "react";

//note: use PascalCase when naming components
//in this case Heading
function Heading() {
  return <h1>My Favourite Foods</h1>;
}

//note: when exporting, component name (Heading) doesn't have parentheses after, because that will make it return immediately
//we want to instead use it as a component
export default Heading;
