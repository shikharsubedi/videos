import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from  './VideoDetail'
import youtube from '../api/youtube'

class App extends React.Component {
  state = {videos: [], selectedVideo: null}
  componentDidMount () {
    this.onSearchSubmit('shatakshi subedi')
  }
  onSearchSubmit = async (term) => {
    if(!term.trim()) {
      return
    }
    try {
      const { data } = await youtube.get('/search', {
        params: {
          q: term
        }
      })

      this.setState({
        videos: data.items,
        selectedVideo:  data.items[0] })
    } catch(err) {
      console.log(err.message)
      return
    }  
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})

  }
  render () {
    return (
      <div className='ui container'>
        <div><SearchBar onSearchSubmit={this.onSearchSubmit}/></div>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail  video={this.state.selectedVideo}/>
            </div>
            <div className='five wide column'>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
          </div>
      </div>
    )
  }
  
}

export default App
