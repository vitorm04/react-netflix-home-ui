import React, {
  useState, useEffect, useCallback, CSSProperties,
} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {
  Container,
  MainContainer,
  ItemList,
  Logo,
  Avatar,
} from './styles';

const urlLogo = '/images/header_logo.png';
const urlAvatar = '/images/avatar.png';

const Header : React.FC = () => {
  const [scroll, setScroll] = useState<number>(window.scrollY);
  const handleScroll = useCallback(() => setScroll(window.scrollY), [setScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const buildRightIconStyle = useCallback((isText?: boolean) : CSSProperties => ({ color: 'white', marginRight: '25px', fontSize: isText ? '14pt' : '24pt' }), []);

  return (
    <Container>
      <MainContainer scroll={scroll}>
        <Container>
          <Logo src={urlLogo} />
          <Container>
            <ItemList>Início</ItemList>
            <ItemList>Séries</ItemList>
            <ItemList>Filmes</ItemList>
            <ItemList>Bombando</ItemList>
            <ItemList>Minha lista</ItemList>
          </Container>
        </Container>
        <Container>
          <SearchIcon style={buildRightIconStyle()} />
          <NotificationsIcon style={buildRightIconStyle()} />
          <h4 style={buildRightIconStyle(true)}>INFANTIL</h4>
          <Avatar src={urlAvatar} alt="Avatar" />
        </Container>
      </MainContainer>
    </Container>
  );
};

export default Header;
