import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">Accredian</h2>

            <p className="mt-5 leading-7 text-gray-400">
              Empowering enterprises with future-ready learning solutions,
              industry experts, and measurable business outcomes.
            </p>

            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              {["Home", "Programs", "Enterprise", "Testimonials", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="group flex items-center transition hover:text-blue-400"
                    >
                      {item}

                      <ArrowUpRight
                        size={15}
                        className="ml-2 opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Enterprise Solutions
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Corporate Training",
                "Leadership Programs",
                "AI Learning",
                "Cloud & Data",
                "Digital Transformation",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center transition hover:text-blue-400"
                  >
                    {item}

                    <ArrowUpRight
                      size={15}
                      className="ml-2 opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact</h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-blue-500" size={20} />

                <p>
                  Bengaluru, Karnataka,
                  <br />
                  India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-500" size={20} />
                <p>+91 12345678</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" size={20} />
                <p>enterprise@accredian.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © 2026 Accredian Enterprise. All Rights Reserved.
            </p>

            <div className="flex gap-8 text-sm">
              <Link href="#" className="transition hover:text-blue-400">
                Privacy Policy
              </Link>

              <Link href="#" className="transition hover:text-blue-400">
                Terms of Service
              </Link>

              <Link href="#" className="transition hover:text-blue-400">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
