import styled from 'styled-components';

interface MainContainerProps{
   scroll: number;
}

export const MainContainer = styled.div<MainContainerProps>`
   background-color: ${(p) => (p.scroll < 15 ? 'rgba(0, 0, 0, 0)' : 'rgb(20, 20, 20)')};
   margin: 0;
   padding: 0;
   width: 100%;
   min-height: 60px;
   align-items: center;
   transition : all ease 0.5s;
   text-size-adjust: 100%;
   z-index: 999;
   display: flex;
   justify-content: space-between;
   padding-left: 15px;
   padding-right: 15px;
`;

export const Container = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
`;

export const ItemList = styled.a`
   margin: 10px;
   color: #fff;
   font-size: 18px;
   &:hover{
    color:rgb(186, 186, 186)
   };
   cursor: pointer;
`;

export const Logo = styled.img`
  width: 92px;
  margin: 0 25px;
`;

export const Avatar = styled.img`
   border-radius: 3px;
   margin-right: 35px;
   width: 32px;
   height: 32px;
`;
