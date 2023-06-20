import type { ReactNode } from "react";

import MadeLabCoreBlank from "@/components/MadeLabCoreBlank";
import MadeLabMain from "@/components/MadeLabMain";
import { MadeFooterBlank } from "@/templates/FooterBlank";

type IMainProps = {
	meta?: ReactNode;
	children?: ReactNode;
	className?: string;
};

const MainOnly = (props: IMainProps) => (
	<MadeLabCoreBlank className="flex min-h-screen flex-col">

		<MadeLabMain className={props?.className ? props?.className : ""}>
			{props.meta}
			{props.children}
		</MadeLabMain>

		<MadeFooterBlank />
	</MadeLabCoreBlank>
);

export { MainOnly };
