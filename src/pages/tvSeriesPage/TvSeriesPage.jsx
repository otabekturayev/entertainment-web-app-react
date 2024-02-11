import "./TvSeriesPage.scss";
import { MovieCardSmall } from "../../components/movieCardSmall/MovieCardSmall";
import { SearchTvSeriesPage } from "../../components/searchTvSeriesPage/SearchTvSeriesPage";

export const TvSeriesPage = ({
  movieData,
  searchMovies,
  temp,
  onChangeStr,
}) => {
  let newDataMovies = searchMovies(temp, movieData);

  return (
    <main>
      <SearchTvSeriesPage onChangeStr={onChangeStr} temp={temp} />
      {temp ? (
        <div className="main2">
          <h3>
            Found {newDataMovies.length} results for '{temp}'
          </h3>
          <div className="searchMovies">
            {newDataMovies?.map((item, i) => {
              if (item.category != "Movie") {
                return (
                  <MovieCardSmall
                    key={i}
                    img={item.thumbnail.regular.large}
                    name={item.title}
                    year={item.year}
                    category={item.category}
                    rating={item.rating}
                    isBookmarked={item.isBookmarked}
                    isTrending={item.isTrending}
                  />
                );
              }
            })}
          </div>
        </div>
      ) : (
        <div className="main1">
          <h2>TV Series</h2>
          <div className="allTvSeries">
            {movieData?.map((item, i) => {
              if (item.category != "Movie") {
                return (
                  <MovieCardSmall
                    key={i}
                    img={item.thumbnail.regular.large}
                    name={item.title}
                    year={item.year}
                    category={item.category}
                    rating={item.rating}
                    isBookmarked={item.isBookmarked}
                    isTrending={item.isTrending}
                  />
                );
              }
            })}
          </div>
        </div>
      )}
    </main>
  );
};
