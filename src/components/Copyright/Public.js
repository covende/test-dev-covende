import styled from '@emotion/styled';
import Copyright from './_base';

export default styled(Copyright)`
  && {
    background-color: #6772e5;
    color: ${(props) => props.theme.colors.celeste};
    padding: 7px 14px;
  }
`;

// export default styled(Copyright)`
//   background-color: #6772e5;
//   color: ${(props) => props.theme.color.primary};
//   box-shadow: ${(props) => props.theme.button.boxShadow};
//   padding: 7px 14px;
// `;

// height: auto;
// margin: 0px;
// padding: 15px;
// font-size: 10pt;
// font-family: sans-serif;
// background: #004772;
// text-align: center;
