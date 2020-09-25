import styled from '@emotion/styled';
import Typography from './_base';

// Predomina el estilo customizado
export default styled(Typography)`
  && {
    background-color: #6772e5;
    color: ${(props) => props.theme.color.primary};
    box-shadow: ${(props) => props.theme.button.boxShadow};
    padding: 7px 14px;
    &:hover {
      color: ${(props) => props.theme.color.secondary};
      background-color: ${(props) => props.theme.button.hover.backgroundColor};
    }
  }
`;
