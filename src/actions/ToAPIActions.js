import API from '../API'

const ToAPIActions = {
  search(where) {
    console.log('in ToAPIActions');
    API.search(where)
  },

  // audioAnalyse(string, id) {
  //   console.log('in ToAPIActions');
  //   API.audioAnalyse(string, id)
  // },
  //
  // saveImage(analysis){
  //   console.log('in ToAPIActions');
  //   API.saveImage(analysis)
  // },
  //
  // deleteImage(id) {
  //   API.deleteImage(id)
  // },
  //
  // getSaved(){
  //   API.getSaved()
  // }

}

export default ToAPIActions;
