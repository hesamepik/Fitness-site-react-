import React, { createContext, useReducer, useContext } from 'react';

import { sumProduct } from '../helpers/helper';
import Cheakout from '../Cheakout';

export const CardContext = createContext();








const initialState = {
  selecteditem: [],
  itemCounter: 0,
  total: 0,
  Cheakout: false,
};

const sumItems = (items) => {
  const itemCounter = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((total, item) => total + item.price * item.quantity, 0);
  return { itemCounter, total };
};

const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selecteditem.find((item) => item.id === action.payload.id)) {
        const newItems = [...state.selecteditem, { ...action.payload, quantity: 1 }];
        return {
          ...state,
          selecteditem: newItems,
          ...sumItems(newItems),
        };
      }
      return state;

    case "REMOVE_ITEM":
      const filteredItems = state.selecteditem.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        selecteditem: filteredItems,
        ...sumItems(filteredItems),
      };

    case "INCREASE":
      const increased = state.selecteditem.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        selecteditem: increased,
        ...sumItems(increased),
      };

    case "DECREASE":
      const decreased = state.selecteditem.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0);
      return {
        ...state,
        selecteditem: decreased,
        ...sumItems(decreased),
      };

    case "CLEAR":
      return initialState;

    case "CHECKOUT":
      return {
        selecteditem: [],
        itemCounter: 0,
        total: 0,
        Cheakout: true,
      };

    default:
      return state;
  }
};

// Provider
export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

// Hook استفاده
export const usecard = () => {
  const context = useContext(CardContext);
  if (!context) throw new Error("usecard باید داخل CardProvider استفاده شود");
  return context;
};
