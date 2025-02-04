import {Flex} from "antd";
import {LangSwitchBtns} from "../../core/i18n/components/lang-switch-btns/lang-switch-btns";
import {Head} from "../head/head";

export function App() {
  return (
    <Flex gap="middle" wrap>
      <LangSwitchBtns />
      <Head />
    </Flex>
  );
}
