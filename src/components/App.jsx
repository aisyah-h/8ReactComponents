import React from "react";
//In ES6, extension of file is optional. Can just remove the .js or .jsx in file name when importing. they'll be able to locate
//Note: relative path --> ./
import Heading from "./Heading";
import UnorderedList from "./UnorderedList";

function App() {
  return (
    <div>
      {/*Good practice to use self closing tag when there is no children (ie. no contents between opening and closing tags)
       */}
      <Heading />
      <UnorderedList />
    </div>
  );
}

export default App;
