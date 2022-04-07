import styled from "styled-components";

export const SocialWrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  &:hover {
    cursor: pointer;
  }

  svg {
    height: 40px;
    width: 40px;
  }
`;
