import { Routes, Route } from 'react-router';
import { Global, css } from '@emotion/react';
import Layout from 'components/Layout';
import { Container } from 'components/App/App.styled';

export default function App() {
  return (
    <>
      {/* Оставляет место с правой стороны под скрол, что бы не дёргался экран  */}
      <Global
        styles={css`
          html {
            overflow-y: scroll;
            scrollbar-gutter: stable;
          }
        `}
      />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </Container>
    </>
  );
}
