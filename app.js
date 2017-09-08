// TODO
var App = () => (
  <div>Some cliche salutation</div>
);

var Milk = () => (
  <li>Milk</li>
);

var Candy = () => (
  <li>Candy</li>
);

// var GroceryList = () => (
//   <ul>
//     < Milk />
//     < Candy />
//   </ul>
// );


// var GroceryList = () => (
//   <ul>
//     <li>Milk</li>
//     <li>Candy</li>
//   </ul>
// );

// var ToDoList = () => (
//   <ul>
//     <li>Pay Mortgage</li>
//     <li>Workout</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h1>My ToDo List</h1>
//     < ToDoList />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));
// ReactDOM.render(<GroceryList />, document.getElementById("app"));



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//PROPS:
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// var GroceryList = (props) => (
//   <ul>
//     <li>{props.grocery[0]}</li>
//     <li>{props.grocery[1]}</li>
//     <li>{props.grocery[2]}</li>
//   </ul>
// );

// var App = (props) => (
//   <div>
//     <h2>My Grocery List</h2>
//     < GroceryList grocery={['Milk', 'Dog Food', 'Cat Litter']} />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//USER EVENTS:
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// var GroceryListItem = (props) => {          //WHY DO WE HAVE TO RETURN WITH CURLY BRACES HERE, BUT NOT FOR onListItemClick???

//   var onListItemClick = (event) => {
//     console.log('List Item Clicked!', event);  
//   }

//   return (
//     <ul>
//       <li onClick={onListItemClick}>props.grocery[0]</li>
//       <li>props.grocery[1]</li>
//       <li>props.grocery[2]</li>
//     </ul>
//   );
// }

// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     < GroceryListItem grocery={['cat litter', 'dog food', 'tooth paster']} />
//   </div>
// )

// ReactDOM.render(< App />, document.getElementById("app"));



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//CLASS COMPONENTS (INTERACTIVE WITH STATES)
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sometimes components need to store data that cannot be explicitly passed in as PROPS and re-render as this data changes.

//React makes this possible with CLASS COMPONENTS. To demonstrate this, we'll refactor each <li> of our TodoList into a TodoListItem class component:

//ES5 TO ES6
// props.todos.map(todo =>
//       <TodoListItem todo={todo} />
// )

// props.todos.map(function(todo) {
//     return <TodoListItem todo={todo} />;
// });

//ATTEMPT (IDENTIFY WEAKNESSES)
// class GroceryListItem extends React.Component {
//   constructor: (props) => {  //??? What do we need to do to set constructor?
//     super(React.Component)  //??? How to make it a subclass?
//   }

//   render: (props) =>  { //??? Does render take props?
//     <li>this.props.grocery</li>
//   }
// } //??? Do we need to return something?

// //UPDATE GROCERY LIST TO USE NEW GROCERYLISTITEM CLASS COMPONENT
// var GroceryList


/////////////////////////////////////
//SOLUTION:
/////////////////////////////////////

// class GroceryListItem extends React.Component {
//   constructor(props) {  
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props) 
//   }

//   render() {
//     return (
//       <li>{this.props.groceryItem}</li>   
//     );
//   }
// }

// //UPDATE GROCERY LIST TO USE NEW GroceryListItem CLASS COMPONENT
// var GroceryList = (props) => (
//   <ul>
//     {props.groceries.map(groceryItem =>
//       <GroceryListItem groceryItem={groceryItem} />
//     )}
//   </ul>
// )

// var App = (props) => (
//   <div>
//     <h2>My Grocery List</h2>
//     < GroceryList groceries={['foodA', 'foodB', 'foodC']} />
//   </div>
// )

// ReactDOM.render(< App />, document.getElementById("app"));



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//STATE (CROSSED OUT STYLE)
///////////////////////////////////////////////////////////////////////////////////////////////////////////

class GroceryListItem extends React.Component {
  constructor(props) {  
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({done: !this.state.done});
  }

  onListItemHover() {
    this.setState({hover: true});
  }

  offListItemHover() {
    this.setState({hover: false});
  }

  render() {
    var style = {
      textDecoration : this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} onMouseOut={this.offListItemHover.bind(this)}>{this.props.groceryItem}</li>   
    );
  }
}

//UPDATE GROCERY LIST TO USE NEW GroceryListItem CLASS COMPONENT
var GroceryList = (props) => (
  <ul>
    {props.groceries.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
)

var App = (props) => (
  <div>
    <h2>My Grocery List</h2>
    < GroceryList groceries={['foodA', 'foodB', 'foodC']} />
  </div>
)

ReactDOM.render(< App />, document.getElementById("app"));



