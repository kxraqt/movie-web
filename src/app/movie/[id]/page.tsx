import { getSingleMovieApi } from "@/Hooks/GetSingleMovie";

const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const singleMovie = await getSingleMovieApi(id);
  const similarMovies = await getSingleMovieApi(id);

  return <></>;
};

export default MovieDetailPage;
