import {useTranslation} from "react-i18next";
import {styled} from "styled-components";

const Title = styled.h1`
  text-decoration: underline;
`;

const HeadWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const Head = () => {
  const {t} = useTranslation();
  return (
    <HeadWrapper>
      <Title>{t("title")}</Title>
    </HeadWrapper>
  );
};
