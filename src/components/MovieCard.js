function MovieCard({ url, title, desc, vote, onClick }) {
  return (
    <div className="movie-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="movie-image-wrapper">
        <img src={url} alt={title} className="movie-image" />
      </div>
      <div className="movie-title">{title}</div>
    </div>
  );
}

export default MovieCard;
