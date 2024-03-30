import styled from 'tailwind';

/* eslint-disable-next-line */
export interface UiAtomsProps {}

const StyledUiAtoms = styled.div`
  color: pink;
`;

export function UiAtoms(props: UiAtomsProps) {
  return (
    <StyledUiAtoms>
      <h1>Welcome to UiAtoms!</h1>
    </StyledUiAtoms>
  );
}

export default UiAtoms;
