import { useReducer } from "react";
import CartContext from "./cart-context";

// Create Default State To Cart
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Create Function To Pass Reducer
const cartReducer = (state, action) => {
  // Check Type Is Add To Run This Code.
  if (action.type === "ADD") {
    // Update Items By Used Concat To Return New State
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exitingCartItem = state.items[exitingCartItemIndex];
    let updatedItems;

    if (exitingCartItem) {
      const updatedItem = {
        ...exitingCartItem,
        amount: exitingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exitingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    // Return New Date
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // Check Type Is Remove To Run This Code.
  if (action.type === "REMOVE") {
    // Get Index
    const exitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exitingCartItem = state.items[exitingCartItemIndex];
    // Update Total Amount
    const updatedTotalAmount = state.totalAmount - exitingCartItem.price;
    let updatedItems;
    // Check If Index less Than one Remove To Cart
    if (exitingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...exitingCartItem,
        amount: exitingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[exitingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
