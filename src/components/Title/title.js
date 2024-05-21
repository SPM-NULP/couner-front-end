import { TitleS, TitleWrap } from './title.styled';

export const Title = ({ children }) => {
  return (
    <TitleWrap>
      <TitleS>{children}</TitleS>
    </TitleWrap>
  );
};
