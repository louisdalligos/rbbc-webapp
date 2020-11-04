const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROPERTY_DATA': {
      const data = action.payload.listings[0];

      return {
        ...state,
        title: data.title,
        address: data.address,
        tags: data.tags,
        price: data.startingPrice,
        gallery: data.gallery,
        details: data.propertyDescription,
      };
    }

    default:
      return state;
  }
};

export default reducer;
