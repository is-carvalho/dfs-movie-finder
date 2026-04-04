import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Modal from "./Modal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Gallery({ data }) {
  const results = data;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  function handleCardClick(movie) {
    setModalData(movie);
    setModalOpen(true);
  }

  return (
    <div className="gallery-container">
      {results.length > 0 ? (
        <>
          <ResponsiveMasonry
            className="masonry-container"
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
            gutterBreakpoints={{ 350: "12px", 750: "18px", 900: "28px" }}
          >
            <Masonry className="masonry-grid">
              {results.map((movie) => {
                const { id, title, poster_path, overview, vote_average } =
                  movie;
                const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
                const voteValue =
                  typeof vote_average === "number" && !isNaN(vote_average)
                    ? vote_average.toFixed(1)
                    : "N/A";
                return (
                  <MovieCard
                    key={id}
                    url={url}
                    title={title}
                    desc={overview}
                    vote={voteValue}
                    onClick={() =>
                      handleCardClick({
                        title,
                        desc: overview,
                        vote: voteValue,
                      })
                    }
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title={modalData.title}
            desc={modalData.desc}
            vote={modalData.vote}
          />
        </>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default Gallery;
