import Script from 'next/script'

import MadeLabFooter from "@/components/MadeLabFooter";

const MadeFooterBlank = () => (
	<MadeLabFooter>
		<Script id="script" type="text/javascript">
			{`
        var $zoho = $zoho || {}; 
        $zoho.salesiq = $zoho.salesiq || { widgetcode: "e5fd57a9e647943ff36870624f02c640ff0ab33bfe67881491eea981ea610171", values: {}, ready: function () { $zoho.salesiq.floatbutton.visible('hide'); } }; var d = document; s = d.createElement("script"); s.type = "text/javascript"; s.id = "zsiqscript"; s.defer = true; s.src = "https://salesiq.zoho.com/widget"; t = d.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t);
      `}
		</Script>
	</MadeLabFooter>
);

export { MadeFooterBlank };
