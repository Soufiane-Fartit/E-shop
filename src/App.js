import './App.css';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import initialState from './initialState';


function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "SET_PRICE":
      var new_price = action.price;
      var id = action.id;
      // console.log(state.items)
      var targeted_item = state.items.filter(item => item.id === id)[0];
      var rest_of_items = state.items.filter(item => item.id !== id);

      targeted_item.price = new_price;
      var new_state = {...state, items:[...rest_of_items, targeted_item]};
      //console.log(new_state);
      return new_state;
    
    case "ADD_ITEM_TO_CART":
      // console.log('old_state', state);
      var item_id = action.id;
      var quantity = action.quantity;
      var targeted_item = state.items.filter(item => item.id === item_id)[0];
      var item_name = targeted_item.name;
      var item_price = targeted_item.price;
      
      var new_cart_element = {id: item_id, quantity: quantity, name: item_name, price: item_price};

      var exists = state.cart.filter(item => item.id === item_id).length>0;
      console.log('check existance', exists);
      if (!exists) {
        var new_cart = [...state.cart, new_cart_element];
        new_state = {...state, cart:new_cart};  
      }
      else {
        var current_quantity = state.cart.filter(item => item.id === item_id)[0].quantity;
        console.log('current_quantity', current_quantity);
        var neg_match = state.cart.filter(item => item.id !== item_id);
        new_cart_element.quantity = current_quantity + new_cart_element.quantity;
        var new_cart = [...neg_match, new_cart_element];
        new_state = {...state, cart:new_cart};  
      }
      // var new_cart = [...state.cart, new_cart_element];
      // new_state = {...state, cart:new_cart};  
      // console.log('new_state', new_state);
      
      return new_state

    case "REMOVE_ITEM_FROM_CART":
      new_cart = state.cart.filter(item => item.id !== action.id)
      new_state = {...state, cart:new_cart}
      return new_state

    case "SET_FILTER":
      var new_filters = {...state.filters};
      var filter_name = action.name;
      var filter_option = action.option;
      
      new_filters[filter_name] = filter_option;
      return {...state,filters:new_filters};

    default:
      return state;
  }
}

const store = createStore(reducer);
// store.dispatch({type: "SET_PRICE", id:8, price: 900})
// store.dispatch({type: "ADD_ITEM_TO_CART", id:2, quantity: 1})

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <Shop/>
    </div>
    </Provider>
  );
}

export default App;
