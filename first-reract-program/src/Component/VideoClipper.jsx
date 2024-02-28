import React, { useState, useRef } from "react";

function VideoClipper() {
  const [video, setVideo] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const videoRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideo(URL.createObjectURL(file));
  };

  const handleClip = () => {
    // Clip the video using HTML5 video methods
    videoRef.current.currentTime = startTime;
    videoRef.current.play();
    videoRef.current.addEventListener("timeupdate", function clipVideo() {
      if (videoRef.current.currentTime >= endTime) {
        videoRef.current.pause();
        videoRef.current.removeEventListener("timeupdate", clipVideo);
      }
    });
  };

  const handleSave = () => {
    // Capture the clipped portion of the video and save it
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const clippedVideoUrl = canvas.toDataURL("video/webm"); // Change MIME type to webm
    const a = document.createElement("a");
    a.href = clippedVideoUrl;
    a.download = "clipped_video.webm"; // Change file extension to webm
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {video && (
        <div>
          <video controls ref={videoRef} src={video} />
          <label>
            Start Time:
            <input
              type="number"
              value={startTime}
              onChange={(e) => setStartTime(parseInt(e.target.value))}
            />
          </label>
          <label>
            End Time:
            <input
              type="number"
              value={endTime}
              onChange={(e) => setEndTime(parseInt(e.target.value))}
            />
          </label>
          <button onClick={handleClip}>Clip Video</button>
          <button onClick={handleSave}>Save Clipped Video</button>
        </div>
      )}
    </div>
  );
}

export default VideoClipper;
// qlipper;
