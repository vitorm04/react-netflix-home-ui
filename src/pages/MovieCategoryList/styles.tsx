import styled from 'styled-components';

export const MainContainer = styled.div`
   color: #fff;
   margin-left: 35px;
   max-height: 400px;
   margin-top: 35px;
`;

export const CategoryTitle = styled.h2`
   color: #fff;
   margin-left: 10px;
   margin-bottom: 15px; 
   font-size: 1.4vw;
`;

export const BaseArrow = styled.div`
    position:absolute;
    border: none;
    outline: none;
    width: 40px;
    height: 350px;
    transform: scale(0.9);
    z-index: 99;
    background-color:rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    margin-bottom: -1px;
    margin-left: -2px;
    opacity :0;
    justify-content: center;
    overflow: hidden;
    cursor:pointer;
    transition : all ease 0.2s;
`;

export const ArrowLeft = styled(BaseArrow)`
    left: 0;
`;

export const ArrowRight = styled(BaseArrow)`
    right: 0;
`;

export const ItemListPoster = styled.img`
   width: 300px;
   height: 350px;
   transform: scale(0.9);
   margin-right: -15px;
   border-radius: 4px;
   &:hover {
      transform: scale(1);
   }
`;

export const ContainerMoviesList = styled.div`
   display: inline-block;
   transition : all ease 0.4s;
   cursor: pointer;
   
`;

export const ContainerMovies = styled.div`
   max-width: 100%;
   overflow-x: hidden;
   position: relative;
   &:hover{
      ${ArrowLeft} {
        opacity: .7;
      }
      ${ArrowRight} {
        opacity: .7;
      }
   }
`;
