import styled from "styled-components";

const Title = styled.h1`
  text-decoration: underline;
`;

const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Head = () => (
  <HeadWrapper>
    <Title>Progress year</Title>
  </HeadWrapper>
);
