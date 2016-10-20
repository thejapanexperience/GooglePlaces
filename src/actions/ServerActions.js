import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  gotList(data){
  console.log('in ServerActions');
  AppDispatcher.dispatch({
    type:'GOT_LIST',
    payload:{data}
  })
  }
}
export default ServerActions;
