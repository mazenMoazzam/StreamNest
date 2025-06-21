import React, { useEffect, useState } from 'react';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>YouTube Mock</h1>
      <input placeholder="Search..." style={{ padding: '0.5rem', width: '50%' }} />
      <button>Upload Video</button>

      <div style={{ marginTop: '1rem' }}>
        {videos.map(video => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            <video width="320" controls>
              <source src={`/${video.url}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
