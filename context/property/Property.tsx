import React, { useContext, useReducer, createContext } from 'react';
import reducer from './reducer';

const initialState = {
  title: null,
  address: null,
  price: null,
  tags: [],
  gallery: [],
  setPropertyData: (data) => {},
};

const PropertyContext = createContext(initialState);

export const PropertyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPropertyData = (data) => {
    dispatch({
      type: 'SET_PROPERTY_DATA',
      payload: data,
    });
  };

  return (
    <PropertyContext.Provider
      value={{
        title: state.title,
        address: state.address,
        price: state.price,
        tags: state.tags,
        gallery: state.gallery,
        setPropertyData,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export function useProperty() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('useProperty must be used within an PropertyContext');
  }
  return context;
}
