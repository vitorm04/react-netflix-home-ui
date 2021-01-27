import React, { useEffect, useState } from 'react';

import Header from '../Header';
import {
  MainContainer,
  ContainerHeader,
  ContainerPoster,
  ContainerPosterInfo,
  ContainerDescription,
  ContainerActions,
  ActionButton,
  PosterTitle,
  SvgIcon,
  ContainerCategories,
} from './styles';
import ApiService from '../../services';
import MovieCategoryList from '../MovieCategoryList';
import { Movie } from '../../models';

const CATEGORIES = [
  'Populares na Netflix',
  'Em alta',
  'Lançamentos',
  'Séries dramáticas para maratonar',
  'Sitcoms',
  'Originais Netflix',
];

const Main : React.FC = () => {
  const [data, setData] = useState<Array<Movie>>([]);

  useEffect(() => {
    async function getMovies() {
      const movies = await ApiService.getMovies();
      setData(movies);
    };

    getMovies();
  }, []);

  const getRandomPoster = () : string => {
    if (data.length === 0) return '';
    const index = Math.floor(Math.random() * data.length);
    return ApiService.buildMoviePosterUrl(data[index].poster_path);
  };

  return (
    <MainContainer>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <ContainerPoster imageUrl={getRandomPoster()}>
        <ContainerPosterInfo>
          <PosterTitle alt="Poster Title" src="/images/poster_title.webp" />
          <ContainerDescription>
            <h2>Top 1 no Brasil hoje</h2>
            <h3>
              Magias e mistérios. Perigos e mentiras.
              Bem-vindos a Alfea, o lugar onde tudo pode acontecer.
            </h3>
          </ContainerDescription>
          <ContainerActions>
            <ActionButton>
              <SvgIcon viewBox="0 0 24 24">
                <path d="M6 4l15 8-15 8z" fill="currentColor" />
              </SvgIcon>
              <h4>Assistir</h4>
            </ActionButton>
            <ActionButton secundary>
              <SvgIcon viewBox="0 0 24 24"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z" fill="currentColor" /></SvgIcon>
              <h4>Mais informações</h4>
            </ActionButton>
          </ContainerActions>
        </ContainerPosterInfo>
      </ContainerPoster>
      <ContainerCategories>
        {
        CATEGORIES.map((category) => (
          <MovieCategoryList
            key={category}
            movies={data.sort((_) => 0.5 - Math.random()).map((movie) => movie)}
            category={category}
          />
        ))
      }
      </ContainerCategories>
    </MainContainer>
  );
};

export default Main;
