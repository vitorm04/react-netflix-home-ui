import React, { useState, useCallback } from 'react';

import { Movie } from '../../models';
import ApiService from '../../services';

import {
  MainContainer,
  CategoryTitle,
  ContainerMovies,
  ContainerMoviesList,
  ItemListPoster,
  ArrowLeft,
  ArrowRight,
} from './styles';

interface MovieCategoryListProps {
    movies: Array<Movie>;
    category: string;
}

const MovieCategoryList : React.FC<MovieCategoryListProps> = ({ movies, category }) => {
  const [scrollX, setScrollX] = useState<number>(0);

  const handleScrollMoveLeft = () => {
    let x = scrollX + Math.round(window.innerWidth);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const getGridListSize = useCallback(() => movies.length * 305, [movies.length]);

  const handleScrollMoveRight = () => {
    let x = scrollX - Math.round(window.innerWidth);
    const maxSize = getGridListSize();
    if (window.innerWidth - maxSize > x) {
      x = (window.innerWidth - maxSize) + 300;
    }
    setScrollX(x);
  };

  return (
    <MainContainer>
      <CategoryTitle>{category}</CategoryTitle>
      <ContainerMovies>
        <ArrowLeft onClick={handleScrollMoveLeft}><img alt="Right" src="/images/left-arrow-icon.png" /></ArrowLeft>
        <ArrowRight onClick={handleScrollMoveRight}><img alt="Right" src="/images/right-arrow-icon.png" /></ArrowRight>
        <ContainerMoviesList style={{ marginLeft: scrollX, width: getGridListSize() }}>
          {movies.map((movie) => (
            <ItemListPoster
              key={movie.name}
              src={ApiService.buildMovieGridUrl(movie.poster_path)}
              alt={movie.name}
            />
          ))}
        </ContainerMoviesList>
      </ContainerMovies>
    </MainContainer>
  );
};

export default MovieCategoryList;
