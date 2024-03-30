import styled from 'tailwind';

/* eslint-disable-next-line */
export interface UiOrganismsProps {}

const StyledUiOrganisms = styled.div`
  color: pink;
`;

export function UiOrganisms(props: UiOrganismsProps) {
  return (
    <StyledUiOrganisms>
      <h1>Welcome to UiOrganisms!</h1>
    </StyledUiOrganisms>
  );
}

export default UiOrganisms;
