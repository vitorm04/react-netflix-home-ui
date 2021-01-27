import styled from 'styled-components';

export const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

interface ContainerPosterProps{
   imageUrl: string;
}

export const ContainerHeader = styled.div`
   position: fixed;
   min-width: 100%;
   z-index: 999;
`;

export const ContainerPoster = styled.div<ContainerPosterProps>`
   height: 900px;
   background-image: ${(prop) => `url(${prop.imageUrl})`};
   background-repeat: no-repeat;
   background-size: auto;
   background-size: cover;
   background-position: center;
`;

export const PosterTitle = styled.img`
   width: 610px;
   height: 210px;
`;

export const ContainerPosterInfo = styled.div`
   background: linear-gradient(to right, #111 10%, transparent 70%);
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   padding-left: 70px;
`;

export const ContainerDescription = styled.div`
   color: white;
   margin-top: 35px;
   max-width: 40%;
   > * {
      &:first-child {
         margin-bottom: 10px;
      }
   }
`;

export const ContainerActions = styled.div`
   margin-top: 35px;
   display: flex;
`;

interface ActionButtonProps{
   secundary?: boolean;
}

export const ActionButton = styled.button<ActionButtonProps>`
   background-color: ${(p) => (p.secundary ? 'rgba(109,109,110,0.7)' : '#fff')};
   height: 60px;
   font-weight: bold;
   cursor: pointer;
   font-size: 22px;
   padding: 10px;
   margin-right: 15px;
   border-radius: 5px;
   min-width: ${(p) => (p.secundary ? 300 : 160)}px;
   color: ${(p) => (p.secundary ? '#fff' : '#000')};
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;
   &:hover {
      opacity: 0.7;
   }
`;

export const SvgIcon = styled.svg`
   width: 35px;
   margin-right: 12px;
   max-width: 90%;
`;

export const ContainerCategories = styled.div`
   color: #fff;
   margin-top: -120px;
`;
