export default (state, action) => {
  switch (action.type) {
    case 'userData':
      return {
        ...state,
        userData: action.payload.userData,
        currentTab: action.payload.currentTab,
      };
    case 'privacyData':
      return {
        ...state,
        privacyData: action.payload.privacyData,
        currentTab: action.payload.currentTab,
      };
    case 'getAllData':
      return console.log('Acquired data is', state) || state;
    default:
      throw new Error('Incorrect action dispatched');
  }
};
