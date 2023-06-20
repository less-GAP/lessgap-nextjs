import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { CloseOutline, MenuOutline } from "react-ionicons";

import MadeLabHeader from "@/components/MadeLabHeader";
import Logo from "@/img/logo-made.png";
import { AppConfig } from "@/utils/AppConfig";

library.add(fab, faFacebookF, faInstagram, faBars, faTimes);

function openMenu() {
  const menu = document.getElementById("menu");
  const menuToggle = document.getElementById("menu-toggle");
  if (menu?.classList.contains("hidden")) {
    menu?.classList.remove("hidden");
    menuToggle?.classList.add("active");
  }
}
function closeMenu() {
  const menu = document.getElementById("menu");
  const menuToggle = document.getElementById("menu-toggle");
  if (!menu?.classList.contains("hidden")) {
    menu?.classList.add("hidden");
    menuToggle?.classList.remove("active");
  }
}

const MadeHeader = () => (
  <MadeLabHeader className="lessgap-lab-header bg-black text-white">
    <div className="container-fluid mx-auto p-3 md:py-5 lg:py-8 lg:px-10" id="headerblock">
      <div className="flex flex-row items-center">
        <div className="mr-auto flex basis-1/4 flex-row items-center">
          <Link href="/" className="flex flex-wrap items-center text-white">
            <img
              src={Logo.src}
              alt={AppConfig.title}
              className="mr-auto h-[30px] 2xl:h-[36px] max-w-[unset] lg:mr-8 xl:mr-15 2xl:mr-18"
            />
          </Link>
        </div>
        <div className="hidden basis-1/2 whitespace-nowrap text-center lg:flex lg:justify-center xl:ml-15">
          <ul className="flex-col text-xl lg:flex lg:flex-row">
            <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
              <Link
                href="/about"
                className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl"
              >
                About
              </Link>
              <ul className="submenu·text-left">
                <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
                  <Link
                    href="/facility"
                    className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl"
                  >
                    Facility
                  </Link>
                </li>
                <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
                  <Link
                    href="/capabilities"
                    className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl"
                  >
                    Capabilities
                  </Link>
                </li>
                <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
                  <Link
                    href="/contact"
                    className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
              <Link
                href="/partners"
                className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl"
              >
                Partners
              </Link>
            </li>
            {/* <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
              <Link
                href="/ts"
                className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl flex flex-row items-center justify-center"
              >
                <span>TRAINING</span>
                <span className="text-sm px-2"> x </span>
                <span>SUPPORT</span>
              </Link>
            </li> */}
            <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
              <Link
                href="/events"
                className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl"
              >
                Events
              </Link>
            </li>
            <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
              <Link
                href="/blogs"
                className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl"
              >
                Blog
              </Link>
            </li>
            <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
              <Link
                href="/my-account"
                className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl"
              >
                My Account
              </Link>
            </li>
            {/* <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
              <Link
                href="/register"
                className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl"
              >
                Register
              </Link>
            </li>
            <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 flex items-center">
              <Link
                href="/login"
                className="border-none font-black uppercase text-white hover:opacity-50 sm:text-sm md:text-md xl:text-lg 2xl:text-xl"
              >
                Login
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="invisible hidden basis-1/4 text-center lg:visible lg:flex lg:justify-end">
          <ul className="flex-col text-xl lg:flex lg:flex-row">
            <li className="mr-4 inline-flex items-center justify-center">
              <Link
                href={`${AppConfig.facebook}`}
                className="inline-flex h-[1.8rem] max-h-[1.8rem] w-[2rem] max-w-[2rem] items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="h-[1.8rem] w-[2rem] max-h-[1.8rem] max-w-[2rem]"
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
                  className="h-[2rem] w-[2rem] max-h-[2rem] max-w-[2rem]"
                />
              </Link>
            </li>
          </ul>
        </div>
        {/* Toggle Menu Button */}
        <div className="visible flex basis-2/3 justify-end text-center lg:invisible lg:hidden">
          <button
            id="menu-toggle"
            className="inline-flex h-[2rem] max-h-[2rem] w-[2rem] max-w-[2rem] items-center justify-center"
            type="button"
          >
            <MenuOutline color={"#00000"} onClick={() => openMenu()} />
            <CloseOutline color={"#00000"} onClick={() => closeMenu()} />
          </button>
        </div>
      </div>
    </div>

    <div
      className="visible hidden bg-black py-5 text-white lg:invisible"
      id="menu"
    >
      <div className="container mx-auto">
        <ul className="flex-col text-xl lg:flex lg:flex-row">
          <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
            <Link
              href="/about"
              className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
            >
              About
            </Link>
            <ol>
              <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
                <Link
                  href="/facility"
                  className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
                >
                  Facility
                </Link>
              </li>
              <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
                <Link
                  href="/capabilities"
                  className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
                >
                  Capabilities
                </Link>
              </li>
              <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
                <Link
                  href="/contact"
                  className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
                >
                  Contact
                </Link>
              </li>
            </ol>
          </li>
          <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
            <Link
              href="/partners"
              className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
            >
              Partners
            </Link>
          </li>
          {/* <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
            <Link
              href="/ts"
              className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl flex flex-row items-center justify-center"
            >
              <span>TRAINING</span>
              <span className="text-sm px-2"> x </span>
              <span>SUPPORT</span>
            </Link>
          </li> */}
          <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
            <Link
              href="/events"
              className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
            >
              Events
            </Link>
          </li>
          <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
            <Link
              href="/blogs"
              className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
            >
              Blog
            </Link>
          </li>
          <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
            <Link
              href="/my-account"
              className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
            >
              My Account
            </Link>
          </li>
          {/* <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
            <Link
              href="/register"
              className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
            >
              Register
            </Link>
          </li>
          <li className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-7 my-3">
            <Link
              href="/login"
              className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
            >
              Login
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  </MadeLabHeader>
);

export { MadeHeader };
