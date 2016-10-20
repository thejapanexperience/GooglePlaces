import AppDispatcher from '../AppDispatcher'

const NormalActions = {
  search(where){
  console.log('in ServerActions');
  AppDispatcher.dispatch({
    type:'GOT_LOCATION',
    payload:{where}
  })
}
}

export default NormalActions;
