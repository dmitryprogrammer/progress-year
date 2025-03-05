import {useTranslation} from "react-i18next";
import {LANGUAGES} from "../..";
import {useState} from "react";
import {Radio} from "antd";

export function LangSwitchBtns() {
  const [languagesButtonNames] = useState(
    Object.values(LANGUAGES).map((lang: LANGUAGES) => ({
      label: lang,
      value: lang,
    })),
  );
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES.RU);

  const {i18n} = useTranslation();

  const switchLanguage = (language: LANGUAGES): void => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <>
      <Radio.Group
        className="lang-switch-btns"
        value={currentLanguage}
        onChange={(event) => switchLanguage(event.target.value)}
        options={languagesButtonNames}
        optionType="button"
        buttonStyle="outline"
      ></Radio.Group>
    </>
  );
}
