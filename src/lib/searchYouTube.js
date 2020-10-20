import YOUTUBE_API_KEY from '../config/youtube.js';
var searchYouTube = (options, callback) => {

  if (false) { // for controlling API frequency
    $.ajax({url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {key: options.key, q: options.query, maxResults: options.max, part: 'snippet', videoEmbeddable: true, type: 'video'},
      success:(data)=>{
        console.log('success: ', data.items);
        callback(data.items);
      },
      error: (error)=> console.log('error', error)
    });
  }
};

export default searchYouTube;
