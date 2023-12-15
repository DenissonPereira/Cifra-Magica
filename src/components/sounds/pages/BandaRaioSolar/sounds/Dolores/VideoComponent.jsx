import "./DoloresResponsivo.sass";

const VideoComponent = () => {
  const videoId = "hxeY8uDffO4"; 

  return (
    <div className="iframe_video_dolores">
      <iframe
        width="500"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
