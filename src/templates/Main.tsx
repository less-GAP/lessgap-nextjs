import type { ReactNode } from "react";

import MadeLabCore from "@/components/MadeLabCore";
import MadeLabMain from "@/components/MadeLabMain";
import { MadeFooter } from "@/templates/Footer";
import { MadeHeader } from "@/templates/Header";

type IMainProps = {
  meta?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const Main = (props: IMainProps) => (
  <MadeLabCore className="flex min-h-screen flex-col" id="madecore">
    <MadeHeader />

    <MadeLabMain className={props?.className ? props?.className : ""}>
      {props.meta}
      {props.children}
    </MadeLabMain>

    <MadeFooter />
  </MadeLabCore>
);

export { Main };
