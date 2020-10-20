
import App from './components/App.js';
import searchYoutube from './lib/searchYoutube.js';
import YOUTUBE_API_KEY from './config/Youtube.js';

let searchResults = [];


ReactDOM.render(<App searchYoutube={searchYoutube}/>, document.getElementById('app'));
