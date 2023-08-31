import React, { useState } from "react";

import Header from "./components/Header/Header";
import Cart from "./components/Modal/Cart";
import PrixodList from "./components/PrixodList/PrixodList";


function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  }

  const hideCartHandler = () => {
    setCartIsVisible(false);
  }
  
  const [tasks, setTasks] = useState([
    { id: "t1", title: "Long Long Text of Prixod", quant: 23, quantext: "Producs", 
    date1: "04 / 12", date2: "06 / Apr / 2017", amount1: "2 500 $", 
    amount2: "250 000.50", dev: "UAH"},

    { id: "t2", title: "Long Text", quant: 23, quantext: "Producs", 
    date1: "09 / 12", date2: "06 / Sep / 2017", amount1: "", 
    amount2: "50", dev: "UAH"},

    { id: "t3", title: "Long Long Text of Prixod", quant: 23, quantext: "Producs", 
    date1: "06 / 12", date2: "06 / Jun / 2017", amount1: "2 500.85 $", 
    amount2: "50.25", dev: "UAH"},

    { id: "t4", title: "Long Text of Prixod", quant: 23, quantext: "Producs", 
    date1: "02 / 12", date2: "06 / Feb / 2017", amount1: "", 
    amount2: "50.25", dev: "UAH"},
  ]);

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };
  
  let content = (
    <p style={{ textAlign: "center" }}>Please reload the page</p>
  );

  if (tasks.length > 0) {
    content = <PrixodList items={tasks} onDeleteTask={deleteTaskHandler} onShowCart={showCartHandler}/>;
  }

  return (
    <React.Fragment>

      {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}

      <Header />

      <section id="tasks">{content}</section>

    </React.Fragment>
  );
}

export default App;
