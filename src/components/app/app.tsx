import {Flex} from "antd";

import {Head} from "../head/head";
import {LangSwitchBtns} from "@core";
export function App() {
  return (
    <Flex gap="middle" wrap>
      <LangSwitchBtns />
      <Head />
    </Flex>
  );
}
