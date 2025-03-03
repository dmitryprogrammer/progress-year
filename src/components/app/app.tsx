import {Flex} from "antd";

import {Head} from "../head/head";
import {LangSwitchBtns} from "@core/i18n/components/lang-switch-btns/lang-switch-btns";
export function App() {
  return (
    <Flex gap="middle" wrap>
      <LangSwitchBtns />
      <Head />
    </Flex>
  );
}
