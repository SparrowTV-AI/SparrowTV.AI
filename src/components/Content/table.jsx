import React, { useState, useRef, useEffect } from 'react';

function VideoWithTable() {
  const videoRef = useRef(null); // Reference to the video element
  const [rows, setRows] = useState([]); // State for table rows

  // Predefined info to insert at specific times (seconds)
  const timeMarkers = [
    { time: 5, info: "Underdog Ad" },
    { time: 35, info: "Cricket Wireless Ad" },
    { time: 80, info: "Chewy Ad" },
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
        (marker) => marker.time === currentTime && !rows.some((row) => row.time === marker.time)
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
    <div>
      <div>
        <video ref={videoRef} controls width="600">
          <source src="https://feed-samples.s3.us-east-2.amazonaws.com/ESPN2_LIVE.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA2YICAMZGGJQHDQBP%2F20241116%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T205140Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCICp3pSUONuYUK9U30LJU0o0j%2BCnrliVQJ%2F4vpCoqpXioAiEA9%2BRS8ru5JFDzX5FZhE3MmWsags0Lpoi7xJV8dCLW6zUq6AIINhAAGgw3MzkyNzU0NjYzMTYiDEprouRLQyGZcJSTPirFAqxhrtXRZZFERNqXdyOgjxuUShG85h0VosFjSH64TRHl442Lczkt%2FvGYEcMYZ2EQHq9MjEMvpW1QDQH1yxDwsW6wbck3SOsGzqWw6k9784Ndp9w76zW4YExRS2p55CqRWIf%2BluzICcG357yIuI3n%2FRTWbisQoB2tBSFy8AVtkub7a74kjDr3Pvt2U%2BO0VWnY0SjzKK%2BQnZE97NJrwqmnGg2runEcAZlYhHtl04nvuTWUmQ%2FKjTP3tULryNlAr5C30HQ1vFI9T4ekR%2FbI%2FwNRc6xNGg2j65M%2BYYFGRKxklR9hwHmED2ztG41Uuwi85HxufgdTNyd8roSOCFxtaX3vcGP2meogRXpoCFYgwEVjWYC2Lbk4%2FWR2mwBgrpcOFw6VrFKpnuyVllppnEFVcLeh5mk0c5vnST7fMOAZiCyFSjPzlZgmniMwudzjuQY6swI69rSMqDria%2FDR2q6Ln01n7wmy7%2BhTIPUXwYHOxATsn0PaXjTp0K4d1hOTxDhuNsLnu39b1Bzmwh0zHRh6krgYcp%2BbuyJ9pPu9zKTIkbcnEIVgjUccLPMsBRO9GYGpq8PeC%2BJjovBlWEx%2BujIRhJVd3%2FLWGjqX5YzjzsT5DF80sIE%2B1chuoQjKaCzG%2FQGNIgfEevL1x9qZmHCjZFnJpXzPEZXb3OYdNQTBvU6z%2F8L4Q4G8gY04sjOOTqjrynnz95VRkQf8YvTyxHrnLekZuuI%2Fwo1cSeK6AZhEk0G0SRr11mFodpqLYBZStjTAkUKEwA%2Bbi1o50l7GwjVVWYZzGJC30VcfHPaJCKaRI%2FevMQRX7qoMnhO0OJPd1UZ6ooXst8fpJkUasd89TE4e8mSyBDqA4wpI&X-Amz-Signature=0e3c8d6dd00f715cd73e3b35b26fe1049ab5f51464621e26a10b53ec127bd3fe&X-Amz-SignedHeaders=host&response-content-disposition=inline" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handlePrevious}>Previous Ad</button>
        <button onClick={handleNext}>Next Ad</button>
      </div>

      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Time (s)</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.time}</td>
              <td>{row.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VideoWithTable;
