" use client ";

import Image from "next/image";
import Link from "next/link";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type Props = {
  title: string;
  movies: {
    results: Movie[];
  };
};

const Movies = ({ title, movies }: Props) => {
  console.log(movies, "movies");
  return (
    <section className="w-full px-4 md:px-6 lg-px-8 py-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies?.results.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="group curcor-pointer transition hover:scale-105">
              <div className="relative w-full h-[350px]">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="flex items-center text-yellow-500 text xs mt-2">
                ★ {movie.vote_average.toFixed(1)}/10
              </div>
              <p className="font-semibold text-sm textblack dark:text-white truncate">
                {movie.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Movies;
