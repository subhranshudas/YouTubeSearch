import React from 'react';
import VideoListItem from './video_list_item';

/* when using functional components, props get passed on as arguments as below */

const VideoList = ({videos, onVideoSelect}) => {
  const videoItems = videos.map(video => {
    return (
      <VideoListItem
        video={video}
        onVideoSelect={onVideoSelect}
        key={video.etag}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
