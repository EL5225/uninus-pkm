import styled from 'tailwind';

/* eslint-disable-next-line */
export interface UiMoleculesProps {}

const StyledUiMolecules = styled.div`
  color: pink;
`;

export function UiMolecules(props: UiMoleculesProps) {
  return (
    <StyledUiMolecules>
      <h1>Welcome to UiMolecules!</h1>
    </StyledUiMolecules>
  );
}

export default UiMolecules;
