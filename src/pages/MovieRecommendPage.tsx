import { useState } from "react";
import { Movie } from "../types/movie_rec";

const MovieRecommendPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("all");

  const movies: Movie[] = [
    {
      id: "1",
      title: "Oppenheimer",
      genre: "Drama",
      rating: 8.5,
      year: 2023,
      description:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      color: "bg-gradient-to-br from-slate-800 to-slate-900",
    },
    {
      id: "2",
      title: "Killers of the Flower Moon",
      genre: "Crime",
      rating: 8.0,
      year: 2023,
      description:
        "An investigation into serial killings of wealthy Osage Nation members in the 1920s.",
      color: "bg-gradient-to-br from-amber-700 to-amber-900",
    },
    {
      id: "3",
      title: "Barbie",
      genre: "Comedy",
      rating: 7.9,
      year: 2023,
      description:
        "Barbie escapes her perfect plastic world and comes to Los Angeles searching for her identity.",
      color: "bg-gradient-to-br from-pink-400 to-rose-500",
    },
    {
      id: "4",
      title: "Dune",
      genre: "Sci-Fi",
      rating: 8.0,
      year: 2021,
      description:
        "A young man named Paul Atreides arrives at a desert planet to retrieve the valuable spice needed for space travel.",
      color: "bg-gradient-to-br from-orange-700 to-red-800",
    },
    {
      id: "5",
      title: "Poor Things",
      genre: "Fantasy",
      rating: 7.7,
      year: 2023,
      description:
        "A woman created by an eccentric scientist embarks on a journey of self-discovery across the globe.",
      color: "bg-gradient-to-br from-green-600 to-teal-700",
    },
    {
      id: "6",
      title: "The Brutalist",
      genre: "Drama",
      rating: 8.2,
      year: 2023,
      description:
        "A visionary architect fights to build his masterpiece while navigating ambition and identity.",
      color: "bg-gradient-to-br from-gray-700 to-gray-900",
    },
    {
      id: "7",
      title: "Saltburn",
      genre: "Thriller",
      rating: 7.5,
      year: 2023,
      description:
        "A charismatic student infiltrates an aristocratic family and becomes entangled in a dark obsession.",
      color: "bg-gradient-to-br from-blue-900 to-indigo-950",
    },
    {
      id: "8",
      title: "Past Lives",
      genre: "Romance",
      rating: 8.0,
      year: 2023,
      description:
        "Two childhood friends are separated and reunited after several years, reigniting their past connection.",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
  ];

  const genres = [
    { id: "all", name: "All" },
    { id: "Drama", name: "Drama" },
    { id: "Sci-Fi", name: "Sci-Fi" },
    { id: "Comedy", name: "Comedy" },
    { id: "Crime", name: "Crime" },
    { id: "Fantasy", name: "Fantasy" },
    { id: "Thriller", name: "Thriller" },
    { id: "Romance", name: "Romance" },
  ];

  const filteredMovies =
    selectedGenre === "all"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-semibold text-black">Movies</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Genre Filter */}
        <div className="mb-12">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                  selectedGenre === genre.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="group cursor-pointer">
              {/* Movie Card */}
              <div
                className={`${movie.color} rounded-2xl aspect-[3/4] mb-4 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 flex items-end p-6 overflow-hidden relative`}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 w-full">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {movie.title}
                      </h3>
                      <p className="text-white/70 text-xs mt-1">{movie.year}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-lg backdrop-blur">
                      <span className="text-yellow-300">★</span>
                      <span className="text-white text-sm font-medium">
                        {movie.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Movie Info */}
              <div className="px-1">
                <p className="text-gray-600 text-sm font-medium mb-1">
                  {movie.genre}
                </p>
                <p className="text-gray-700 text-sm line-clamp-2 leading-relaxed">
                  {movie.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMovies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              No movies found for this genre.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MovieRecommendPage;
