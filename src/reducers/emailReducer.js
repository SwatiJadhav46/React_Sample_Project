const initialState = {
  emailList: []
}

const emailReducer = ( state=initialState, action) => {
  switch (action.type) {
    case 'FETCHING_EMAILS_SUCCEEDED':
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default emailReducer;
