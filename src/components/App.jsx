import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYoutube from '../lib/searchYoutube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  handleClick(i) {
    this.setState({
      current: i,
    });
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
            <div><h5>{<VideoPlayer video={this.props.searchYoutube[this.state.current]}/>}</h5></div>
          </div>
          <div className="col-md-5">
            <div><h5> <VideoList videos={this.props.searchYoutube} onClick={(i)=>this.handleClick(i)}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
