import "./BookMarksPage.scss";
import { SearchBookMarksPage } from "../../components/searchBookMarksPage/SearchBookMarksPage";
import { MovieCardSmall } from "../../components/movieCardSmall/MovieCardSmall";

export const BookMarksPage = ({
  movieData,
  searchMovies,
  temp,
  onChangeStr,
}) => {
  let newDataMovies = searchMovies(temp, movieData);

  return (
    <main>
      <SearchBookMarksPage onChangeStr={onChangeStr} temp={temp} />
      {temp ? (
        <div className="main1">
          <h3>Bookmarked Movies</h3>
          <div className="allMarkMovies">
            {newDataMovies?.map((item, i) => {
              if (item.category == "Movie" && item.isBookmarked) {
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
          <h3>Bookmarked TV Series</h3>
          <div className="allMarkTvSeries">
            {newDataMovies?.map((item, i) => {
              if (item.category !== "Movie" && item.isBookmarked) {
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
          <h3>Bookmarked Movies</h3>
          <div className="allMarkMovies">
            {movieData?.map((item, i) => {
              if (item.category == "Movie" && item.isBookmarked) {
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
          <h3>Bookmarked TV Series</h3>
          <div className="allMarkTvSeries">
            {movieData?.map((item, i) => {
              if (item.category !== "Movie" && item.isBookmarked) {
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
