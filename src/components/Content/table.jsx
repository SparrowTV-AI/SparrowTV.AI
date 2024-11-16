import React, { useState, useRef, useEffect } from 'react';

function VideoWithTable() {
  const videoRef = useRef(null); // Reference to the video element
  const [rows, setRows] = useState([]); // State for table rows

  // Predefined info to insert at specific times (seconds)
  const timeMarkers = [
    { time: 5, info: "Underdog Ad" },
    { time: 35, info: "Cricket Wireless Ad" },
    { time: 50, info: "Adidas Ad" },
    { time: 80, info: "Papa Johns Pizza Ad" },
    { time: 95, info: "Chewy Ad" },
    { time: 110, info: "Downy Comfy Cozy Ad" },
    { time: 145, info: "PNC Bank Ad" },
    { time: 170, info: "Wingstop Ad" },
    { time: 355, info: "Carnival Cruise Ad" },
    { time: 385, info: "Deadpool X Wolverine streaming on Disney+ Ad" },
    { time: 400, info: "Macy's Black Friday Ad" },
    { time: 415, info: "Taco Bell Ad" },
    { time: 445, info: "Gladiator II Movie Ad" },
    { time: 460, info: "Video Game Ad" },
  ];

  // Restart video playback
  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  // Playback from the previous timestamp
  const handlePrevious = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const previousMarker = [...timeMarkers]
        .reverse()
        .find((marker) => marker.time < currentTime);
      if (previousMarker) {
        videoRef.current.currentTime = previousMarker.time;
        videoRef.current.play();
      }
    }
  };

  // Play from the next timestamp
  const handleNext = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const nextMarker = timeMarkers.find((marker) => marker.time > currentTime);
      if (nextMarker) {
        videoRef.current.currentTime = nextMarker.time;
        videoRef.current.play();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      const currentTime = Math.floor(video.currentTime);

      // Check if there's info to add at the current time
      const marker = timeMarkers.find(
        (marker) =>
          marker.time === currentTime &&
          !rows.some((row) => row.time === marker.time)
      );

      if (marker) {
        setRows((prevRows) => [...prevRows, marker]);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [rows, timeMarkers]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "flex-start",
        padding: "20px",
        
      }}
    >
      {/* Left column: Video and controls */}
      <div>
        <div>
          <video ref={videoRef} controls width="400">
            <source
              src="https://feed-samples.s3.us-east-2.amazonaws.com/ESPN2_LIVE.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button onClick={handleRestart}>Restart</button>
          <button onClick={handlePrevious}>Previous Ad</button>
          <button onClick={handleNext}>Next Ad</button>
        </div>
      </div>

      {/* Right column: Table */}
      <div style={{ flex: 1 }}>
        <table
          border="1"
          style={{
            backgroundColor: "white",
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
            <th style={{ width: "120px" }}>Timestamp (s)</th>
            <th style={{ width: "350px" }}>Info</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td style={{ width: "20%" }}>{row.time}</td>
                <td style={{ width: "80%" }}>{row.info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VideoWithTable;
