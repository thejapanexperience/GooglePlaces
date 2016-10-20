import axios, { get, post, put } from 'axios';
import ServerActions from './actions/ServerActions';

const API ={

  search(where){
    console.log('in API search before post');
    get(`/search/${where}`)
    .then( res => {
      console.log('res.data: ', res.data)
      ServerActions.gotList(res.data)
    })
    .catch(console.error)
  }

  // saveImage(analysis){
  //   console.log('in API savedImage before post');
  //   post('/api/saved',{analysis})
  //   .then( res => {
  //     // ServerActions.gotSaved(res.data)
  //   })
  //   .catch(console.error)
  // },
  //
  // deleteImage(id){
  //   axios.delete(`/api/saved/${id}`)
  //   .then(this.getSaved)
  //   .catch(console.error)
  // },
  //
  // getSaved(){
  //   get('/api/saved')
  //   .then( res => {
  //     ServerActions.gotSaved(res.data)
  //   })
  //   .catch(console.error)
  // },
  //
  // audioAnalyse(string,id){
  //   post(`/api/textToSpeech/`, {
  //     str: string,
  //     id: id
  //   })
  //   .then( res => {
  //     ServerActions.gotAudio(res.data)
  //   })
  //   .catch(console.error)
  // }
}

export default API
