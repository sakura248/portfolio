import styled from "styled-components";

export const SocialWrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  font-size: 2.5rem;
  color: black;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
