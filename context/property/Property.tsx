import React, { useContext, useReducer, createContext, useMemo } from 'react';
import reducer from './reducer';

const initialState = {
  title: null,
  address: null,
  price: null,
  details: null,
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

  const value = useMemo(
    () => ({
      title: state.title,
      address: state.address,
      details: state.details,
      price: state.price,
      tags: state.tags,
      gallery: state.gallery,
      setPropertyData,
    }),
    [state.title],
  );

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export function useProperty() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('You forgot to wrap PropertyProvider');
  }
  return context;
}
