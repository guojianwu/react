import React from 'react';


import Index from "./jsq/Index"
import Test from "./jsq/Test"
import ListIndex from "./list/Index"
import ListTest from './list/Test';
function App() {
  return (
    <div className="App">
      <Index/>
      <hr/>
      <Test/>
      <hr/>
      <hr/>
      <ListIndex/>
      <ListTest/>
    </div>
  );
}

export default App;
