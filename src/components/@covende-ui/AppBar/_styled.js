import styled from '@emotion/styled';
import AppBar from './_base';

/**
 * Renderiza AppBar
 *
 * ### Usage
 *
 * ```
 * import AppBar from '@covende-ui/AppBar'
 * ```
 *
 * @component
 * @category Application
 */
export default styled(AppBar)`
  && {
    background-color: #6772e5;
    color: ${(props) => props.theme.colors.white};
    box-shadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)';
    padding: 7px 14px;
    &:hover {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.celeste};
    }
  }
`;
