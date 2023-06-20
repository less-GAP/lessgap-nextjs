import type { ReactNode } from "react";

import MadeLabCoreBlank from "@/components/MadeLabCoreBlank";
import MadeLabMain from "@/components/MadeLabMain";
import { MadeFooterBlank } from "@/templates/FooterBlank";
import { MadeHeader } from "@/templates/Header";

type IMainProps = {
	meta?: ReactNode;
	children?: ReactNode;
	className?: string;
};

const MainBlank = (props: IMainProps) => (
	<MadeLabCoreBlank className="flex min-h-screen flex-col" id="madecore">
		<MadeHeader />

		<MadeLabMain className={props?.className ? props?.className : ""}>
			{props.meta}
			{props.children}
		</MadeLabMain>

		<MadeFooterBlank />
	</MadeLabCoreBlank>
);

export { MainBlank };
