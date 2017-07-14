import React, {Component} from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB_pLQ4gXZiLTh_Bfwppe85bP0MredCYCk';

/* functional component because it doesn't have any state */

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo:null
    };
    this.videoSearch('reactjs');
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term
    }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    /*
       debounce just transforms the fn
       rule is if const fnVar = () => {}
       then debounced version is
       _.debounce(() => {},t)
    */

    /*
      Also the reson we are debouncing here instead of search bar is
      we don't want to introduce delay in keystrokes, but rather the XHR call
    */

    const debouncedSearch = _.debounce(term => {this.videoSearch(term)}, 300);

    return ( /* wrap multiline JSX into () */
      <div>
       <SearchBar onSearchTermChange={debouncedSearch}/>
       <VideoDetail video={this.state.selectedVideo}/>
       <VideoList
        videos={this.state.videos}
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
     );
  }
}

ReactDom.render(<App/>, document.querySelector('.container'));
