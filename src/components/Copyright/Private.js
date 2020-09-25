import styled from '@emotion/styled';
import Copyright from './_base';

export default styled(Copyright)`
  && {
    background-color: #6772e5;
    color: ${(props) => props.theme.color.primary};
    box-shadow: ${(props) => props.theme.button.boxShadow};
    padding: 7px 14px;
  }
`;
