import React from 'react';
import VideoWithTable from './table';

function Content() {
  return (
    <div className="Content">
      <div className="heading">
        <h1>Dynamic Ad Insertion</h1>
      </div>
        <div className="video-container">
            <VideoWithTable/>
          {/* <video controls width="600">
            <source src="https://drive.google.com/file/d/1eYslsKQiBElRRt3axck2VaXVb2y5WOMk/view?usp=sharing" type="video/mp4" />
            <p>
              Your browser does not support HTML5 video. Here is a{' '}
              <a href="https://drive.google.com/file/d/1eYslsKQiBElRRt3axck2VaXVb2y5WOMk/view?usp=sharing">link to the video</a> instead.
            </p>
          </video> */}
      </div>
    </div>
  );
}

export default Content;
