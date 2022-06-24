 ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript)  ![image](https://img.shields.io/badge/ReactJS-black?style=for-the-badge&logo=react)
 
 <br><br>

# Personal Order Pizza
##        This is a small project from Codecademy used to learn Reactjs [![image](https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png)](https://www.codecademy.com/courses/react-101/lessons/the-state-hook/exercises/arrays-in-state)


<br><br>

> JavaScript arrays are the best data model for managing and rendering JSX lists. In this example, we are using two arrays: 

<br>

- [options](https://www.codecademy.com/courses/react-101/lessons/the-state-hook/exercises/arrays-in-state) is an array that contains the names of all of the pizza toppings available
- [selected](https://www.codecademy.com/courses/react-101/lessons/the-state-hook/exercises/arrays-in-state) is an array representing the selected toppings for our personal pizza


> The options array contains static data, meaning that it does not change. We like to define static data models outside of our function components since they don’t need to be recreated each time our component re-renders. In our JSX, we use the map method to render a button for each of the toppings in our options array.

<br>

> The selected array contains dynamic data, meaning that it changes, usually based on a user’s actions. We initialize selected as an empty array. When a button is clicked, the toggleTopping event handler is called. Notice how this event handler uses information from the event object to determine which topping was clicked.

<br>

> When updating an array in state, we do not just add new data to the previous array. We replace the previous array with a brand new array. This means that any information that we want to save from the previous array needs to be explicitly copied over to our new array. That’s what this spread syntax does for us: ...prev.

<br>

> Notice how we use the includes(), filter(), and map() methods of our arrays. If these are new to you, or you just want a refresher, take a minute to review these array methods. We don’t need to be full-fledged JavaScript gurus to build React UIs, but know that investing time to strengthen our JavaScript skills, will always help us do more faster (and have a lot more fun doing it) as React developers.


<br>

<br>

# Syntax:

```javascript
import React, { useState } from "react";
 
const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];
 
export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);
 
  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };
 
  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}
```
