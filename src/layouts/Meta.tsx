import Script from 'next/script'
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { AppConfig } from "@/utils/AppConfig";

type IMetaProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/favicon/apple-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon/favicon.ico`}
          key="favicon"
        />
      </Head>
      <Script src="https://connect.facebook.net/en_US/sdk.js"></Script>
      <NextSeo
        title={`${props.title} | less[GAP]oratory`}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: `${props.title} | less[GAP]oratory`,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: props.image
            ? [
              {
                url: props.image,
                width: 800,
                height: 600,
                alt: props.title,
              },
            ]
            : [],
        }}
      />
    </>
  );
};

export { Meta };
