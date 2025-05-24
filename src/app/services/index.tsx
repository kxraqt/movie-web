import { getEnv } from "@/utils/getEnv";
import { API_V0, API_V1, API_V2 } from "@/lib/api";
import { AxiosResponse } from "axios";

const GOGO_PATH = getEnv("GOGO_PATH") || process.env["NEXT_PUBLIC_GOGO_PATH"];

const MovieService = {
  getMoviesPopular: async (): Promise<AxiosResponse> => {
    return API_V0().get("/tmdb/movies/popular");
  },
  getMoviesTrending: async (): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/movies/trending`);
  },
  getMoviesTopRated: async (): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/movies/top-rated`);
  },
  getMoviesById: async (id: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/movies/${id}`);
  },
  getMovieTrailer: async (id: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/movies/${id}/videos`);
  },
  getMovieRecommendations: async (id: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/movies/${id}/recommendations`);
  },
  getMovieSimilar: async (id: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/movies/${id}/similar`);
  },
  getMovieReviews: async (id: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/movies/${id}/reviews`);
  },
  getTvTrending: async (): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/tv/trending`);
  },
  getTvTopRated: async (): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/tv/top-rated`);
  },
  getTvById: async (id: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/tv/${id}`);
  },
  getTvSeason: async (id: string, season: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/tv/${id}/season/${season}`);
  },
  getTvEpisode: async (
    id: string,
    season: string,
    episode: string
  ): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/tv/${id}/season/${season}/episode/${episode}`);
  },
  getTvTrailer: async (id: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/tv/${id}/videos`);
  },
  getTvRecommendations: async (id: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/tv/${id}/recommendations`);
  },
  getTvSimilar: async (id: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/tv/${id}/similar`);
  },
  getTvReviews: async (id: string): Promise<AxiosResponse> => {
    return API_V0().get(`/tmdb/tv/${id}/reviews`);
  },
  searchMovie: async (title?: string): Promise<AxiosResponse> => {
    return API_V0({ params: { query: title } }).get(`/tmdb/search`);
  },
};

export { MovieService };
