import styled from '@emotion/styled';

/**
 * Renderiza Button
 *
 * ### Usage
 *
 * ```
 * import Button from '@covende-ui/Button'
 * ```
 *
 * @component
 * @category Application
 */
const Button = styled.button`
  color: ${(props) => props.theme.colors.celeste};
  letter-spacing: 0px;
  font-weight: 800;
  font-family: 'Poppins';
  border: ${(props) => `1px solid ` + props.theme.colors.celeste};
  border-radius: 14px;
  box-shadow: none;
  padding: 3px 22px;
  margin: 5px 10px;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.celeste};
    color: #ffffff;
  }
  &:focus {
    outline-style: none;
  }
`;

export default Button;
