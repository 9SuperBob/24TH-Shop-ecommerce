import { Link } from "react-router-dom";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mt-16 bg-gray-700 text-zinc-100">
      <div className="container mx-auto grid gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p to="/" className="text-3xl font-semibold tracking-tight ">
            24HR Shop
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
            Easily shop for the products you love and manage your shopping cart
            all in one place.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Menu</h2>
          <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-zinc-400">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <Link to="/checkout" className="transition hover:text-white">
              Check out
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Contact us</h2>
          <div className="mt-4 grid gap-3 text-sm text-zinc-300">
            <a
              href="mailto:hello@24hrshop.com"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <EnvelopeIcon className="size-5" aria-hidden="true" />
              hello@24hrshop.com
            </a>
            <a
              href="tel:021234567"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <PhoneIcon className="size-5" aria-hidden="true" />
              02-123-4567
            </a>
            <div className="flex gap-5 text-center">
              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-green-600"
              >
                <ChatBubbleLeftRightIcon
                  className="size-8"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-blue-600"
              >
                <FaFacebookF className="size-6" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/24hrshop"
                className="flex items-center gap-2 transition hover:text-amber-300"
              >
                <FaInstagram className="size-6" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/24hrshop"
                className="flex items-center gap-2 transition hover:text-black"
              >
                <FaXTwitter className="size-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-5 py-5 text-sm text-zinc-500">
          © 2026 My Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
