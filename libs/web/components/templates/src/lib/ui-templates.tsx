import styled from 'tailwind';

/* eslint-disable-next-line */
export interface UiTemplatesProps {}

const StyledUiTemplates = styled.div`
  color: pink;
`;

export function UiTemplates(props: UiTemplatesProps) {
  return (
    <StyledUiTemplates>
      <h1>Welcome to UiTemplates!</h1>
    </StyledUiTemplates>
  );
}

export default UiTemplates;
