import styled from 'styled-components';

export const Form = styled.form``;

export const Input = styled.input`
  padding-left: 32px;
  padding-right: 120px;
  width: 295px;
  height: 53px;
  border: 2px solid #f0f0f0;
  border-radius: 24px 44px;
  border-color: 2px solid #f0f0f0;
  background-color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  color: #3e4462;

  @media screen and (min-width: 768px) {
    width: 362px;
    height: 57px;
    padding-left: 38px;
    padding-right: 170px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 70px;
    font-size: 16px;
    margin-bottom: 28px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 113px;
  height: 53px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  background-color: #22252a;
  color: #fafafa;
  border-radius: 24px 44px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  &:disabled {
    background-color: #bdbdbd;
  }
  @media screen and (min-width: 768px) {
    width: 161px;
    height: 57px;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;
    height: 70px;
    font-size: 16px;
  }
`;

export const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const InputWrapperBlock = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: start;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;
