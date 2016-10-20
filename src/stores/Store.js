import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
// import Storage from '../Storage'

let _where
let _list

class Store extends EventEmitter {
  constructor(){
    super();
    AppDispatcher.register(action => {
      switch(action.type) {
          case 'GOT_LOCATION':
          _where = action.payload.where;
          console.log('_where: ', _where)
          this.emit('CHANGE');
          break;

          case 'GOT_LIST':
          _list = action.payload.data;
          console.log('_list: ', _list)
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb){
    this.on('CHANGE',cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE',cb)
  }

  getWhere(){
    return _where;
  }

  getList(){
    return _list;
  }

}

export default new Store();
