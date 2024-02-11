import "./HomePage.scss";
import { Search } from "../../components/search/Search";
import { MovieCardBig } from "../../components/movieCardBig/MovieCardBig";
import { MovieCardSmall } from "../../components/movieCardSmall/MovieCardSmall";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const HomePage = ({ movieData, searchMovies, temp, onChangeStr }) => {
  // let [temp, setTemp] = useState('')

  // function searchMovies(temp, movies){
  //     if(temp){
  //         return movies.filter(item => {
  //             return item.title.toLowerCase().includes(temp.toLowerCase())
  //         })
  //     }else{
  //         return []
  //     }
  // }

  // function onChangeStr(str){
  //     return setTemp(str)
  // }

  let newDataMovies = searchMovies(temp, movieData);

  return (
    <main>
      <Search onChangeStr={onChangeStr} temp={temp}></Search>
      {temp ? (
        <div className="main2">
          <h3>
            Found {newDataMovies.length} results for '{temp}'
          </h3>
          <div className="searchMovies">
            {newDataMovies?.map((item, i) => {
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
            })}
          </div>
        </div>
      ) : (
        <div className="main1">
          <h2>Trending</h2>
          <div className="trendingMovie">
            <div className="movieCards">
              {/* {
                            movieData?.map((item, i) => {
                                if(item.isTrending){
                                    return(
                                        <MovieCardBig
                                        key={i}
                                        img={item.thumbnail.trending.large}
                                        name={item.title}
                                        year={item.year}
                                        category={item.category}
                                        rating={item.rating}
                                        isBookmarked={item.isBookmarked}
                                        isTrending={item.isTrending}/>
                                    )
                                }

                            })
                        } */}
              <Swiper spaceBetween={0} slidesPerView={2.5}>
                {movieData?.map((item, i) => {
                  if (item.isTrending) {
                    return (
                      <SwiperSlide>
                        <MovieCardBig
                          key={i}
                          img={item.thumbnail.trending.large}
                          name={item.title}
                          year={item.year}
                          category={item.category}
                          rating={item.rating}
                          isBookmarked={item.isBookmarked}
                          isTrending={item.isTrending}
                        />
                      </SwiperSlide>
                    );
                  }
                })}
              </Swiper>
            </div>
          </div>
          <h2>Recommended for you</h2>
          <div className="recommended">
            {movieData?.map((item, i) => {
              if (!item.isTrending) {
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
