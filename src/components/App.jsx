import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      videos: exampleVideoData,
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(i) {
    this.setState({
      current: i,
    });
  }

  getVideos(options, callback) {
    let defaultCB = (data) => {
      this.setState({
        videos: data || exampleVideoData,
      });
    };
    callback = callback || defaultCB;
    this.props.searchYouTube(options, callback);
  }

  handleChange(event) {
    console.log('from within handleChange: ', event.target.value);
    this.setState({
      query: event.target.value,
    });

    var options = {key: YOUTUBE_API_KEY, query: this.state.query, max: 5};

    this.getVideos(options);
  }

  componentDidMount() {
    this.getVideos(
      {key: YOUTUBE_API_KEY, query: 'corvettes', max: 5});
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search onChange={(event) => this.handleChange(event)}/></h5></div>
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
