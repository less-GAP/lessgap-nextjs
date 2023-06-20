import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Script from 'next/script'

import MadeLabFooter from "@/components/MadeLabFooter";
import { AppConfig } from "@/utils/AppConfig";

library.add(fab, faFacebookF, faInstagram);

const MadeFooter = () => (
  <MadeLabFooter className="lessgap-lab-footer mt-auto bg-black py-12 px-3 lg:px-10 text-white">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="mb-12 basis-1/3 text-center lg:mb-0 lg:text-left">
          <p className="mb-8">
            <strong>Powered by:</strong>
          </p>
        </div>
        <div className="mb-12 basis-1/3 text-center lg:mb-0">
          <p className="font-light">{AppConfig.address}</p>
          <p className="mt-3">
            <Link href="/privacy">Privacy Policy</Link>
          </p>
        </div>
        <div className="basis-1/3">
          <ul className="mb-5 flex items-center justify-center lg:justify-end socialmedia">
            <li className="mr-4 inline-flex items-center justify-center">
              <Link
                href={`${AppConfig.facebook}`}
                className="inline-flex h-[1.8rem] max-h-[1.8rem] w-[2rem] max-w-[2rem] items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="h-[1.8rem] w-[2rem] max-h-[1.8rem] max-w-[2rem] stroke-white fill-white"
                />
              </Link>
            </li>
            <li className="inline-flex items-center justify-center">
              <Link
                href={`${AppConfig.instagram}`}
                className="inline-flex h-[2rem] max-h-[2rem] w-[2rem] max-w-[2rem] items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-[2rem] w-[2rem] max-h-[2rem] max-w-[2rem] stroke-white fill-white"
                />
              </Link>
            </li>
          </ul>
          <p className="text-center lg:text-right">
            <Link href={`${AppConfig.mapurl}`}>View Map</Link>
          </p>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-10 text-center text-xs opacity-50 font-light">
      © Copyright {new Date().getFullYear()} by {" "}
      <Link href="https://lessgap.com">{AppConfig.title}</Link>. All rights reserved.
    </div>
    <Script id="script" type="text/javascript">
      {``}
    </Script>
  </MadeLabFooter>
);

export { MadeFooter };
