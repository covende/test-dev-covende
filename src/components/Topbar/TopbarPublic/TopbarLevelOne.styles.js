import styled from '@emotion/styled';

export const TopbarContainer = styled.header`
  padding: 0 22px 0 37px;
  position: fixed;
  width: 100%;
  height: 70px;
  display: inline-flex;
  background-color: #ffffff;
  z-index: 50;
  ${(props) => props.theme.mq.max.lg} {
    padding: 0 10px 0 10px;
    background: red;
  }

  ${(props) => props.theme.mq.max.md} {
    padding: 0 10px 0 10px;
    background: blue;
  }
  ${(props) => props.theme.mq.max.sm} {
    padding: 0 10px 0 10px;
    background: yellow;
  }
  ${(props) => props.theme.mq.max.xs} {
    padding: 0 10px 0 10px;
    background: green;
  }
`;

export const AppLogo = styled.img`
  margin: 10px;
  width: 114px;
  height: 50px;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  ${(props) => props.theme.mq.max.xs} {
    width: 114px;
    height: 50px;
    margin-top: auto;
    margin-bottom: auto;
    background-color: green;
  }
`;
