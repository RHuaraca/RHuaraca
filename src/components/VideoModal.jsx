function VideoModal({ videoId, titulo}) {
  return (
    <div className="modal-content">
      {/* Embed del video de YouTube */}
      <iframe
        title={titulo}
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>       
    </div>
  );
}

export default VideoModal;
