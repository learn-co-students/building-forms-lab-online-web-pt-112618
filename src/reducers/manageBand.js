export default function manageBand(state = {
  bands: [],
}, action) {
  console.log(action)
  switch(action.type) {
    case 'ADD_BAND':

    const band = {
      id: Math.random()*1000000000000,
      name: action.name
    }
    return {bands: [...state.bands, band]}
  
    default:
    return state
  }
};
