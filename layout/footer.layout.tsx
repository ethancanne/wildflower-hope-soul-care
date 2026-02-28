import Image from 'next/image';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Margin } from './margin.layout';

export default function Footer() {
  return (
    <footer className="w-full bg-background shadow-md">
      <Margin innerClassName="px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Wildflower Hope logo"
                width={160}
                height={200}
                className="pb-5"
              />
            </div>

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Wildflower Hope Soul Care. All rights
              reserved.
            </p>
          </div>

          {/* Right: Links + Social */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            {/* <nav className="flex gap-6 text-sm uppercase tracking-wide text-gray-500">
              <Link href="/safety-policy" className="hover:text-gray-800">
                Safety Policy
              </Link>
              <Link href="/resources" className="hover:text-gray-800">
                Resources
              </Link>
              <Link href="/privacy" className="hover:text-gray-800">
                Privacy
              </Link>
            </nav> */}

            <div className="flex items-center gap-4 text-gray-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-gray-700"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-gray-700"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>
        </div>
      </Margin>
    </footer>
  );
}
