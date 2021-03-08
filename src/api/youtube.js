import axios from 'axios'
const KEY = 'AIzaSyCUGCjLCf0-oVwkcjfoWPb5BydD2sp8mTs'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
})