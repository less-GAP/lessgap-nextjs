import Script from 'next/script'

import MadeLabFooter from "@/components/MadeLabFooter";

const MadeFooterBlank = () => (
	<MadeLabFooter>
		<Script id="script" type="text/javascript">
			{``}
		</Script>
	</MadeLabFooter>
);

export { MadeFooterBlank };
