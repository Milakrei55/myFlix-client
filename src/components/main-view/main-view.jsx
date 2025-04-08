import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Flow",
      genre: "animation",
      description: "A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.",
      image:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/imKSymKBK7o73sajciEmndJoVkR.jpg",
      director: "Gints Zilbalodis"
    },
    {
      id: 2,
      title: "The Wild Robot",
      genre: "animation",
      description: "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
      image:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
      director: "Chris Sanders"
    },
    {
      id: 3,
      title: "Fight Club",
      genre: "drama",
      description: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fight clubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      image:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      director: "David Fincher"
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
