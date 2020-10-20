import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getVideos();
    this.state = {
      current: 0,
      videos: exampleVideoData,
      currentVideos: [],
    };
  }

  handleClick(i) {
    this.setState({
      current: i,
    });
  }

  getVideos() {
    // let searchResults = [];
    searchYouTube({key: YOUTUBE_API_KEY, query: 'corvettes', max: 5}, (data) => {
      this.setState({
        videos: data,
      });
      // data.forEach(result => {
      //   searchResults.push(result);
      // });
    });
  //onsole.log(searchResults)
    // return searchResults;
  }

  componentDidMount() {
    this.setState({currentVideos: videos});
    console.log('in componentDidMount: ', this.state.currentVideos);
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5>{<VideoPlayer video={this.state.videos[this.state.current]}/>}</h5></div>
          </div>
          <div className="col-md-5">
            <div><h5> <VideoList videos={this.state.videos} onClick={(i)=>this.handleClick(i)}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
