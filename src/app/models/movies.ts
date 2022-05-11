export interface Movies {
  results: [{
    backdrop_path: string;
    title: string;
    overview: string;
    poster_path: string;
  }];
  page: number;
  total_results: number;
  total_pages: number;
}
export interface ResultsEntity {
  popularity: number;
  vote_count: number;
  video: boolean;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids?: (number)[] | null;
  vote_average: number;
  overview: string;
  release_date: string;
}
