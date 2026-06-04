import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Copyright from "./Copyright";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="mt-auto w-full bg-[#333333] text-[15px] leading-relaxed text-[#b8bcc4]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
          <div>
            <p>
              Life Positive Mission (LPM) is a volunteer-driven international
              public charitable non-profit organization committed to building a
              positive, conscious, and spiritually awakened world through the
              power of positive energy, leadership, and human transformation.
            </p>
          </div>

          <div>
            <h3 className="card-title text-white">Contact Information</h3>
            <span className="mt-2 block h-0.5 w-12 bg-brand-orange" />
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt
                  className="mt-0.5 shrink-0 text-brand-orange"
                  aria-hidden
                />
                <span>Near Pashupati School, Bajrang Tola, Birganj</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-brand-orange" aria-hidden />
                <a
                  href="tel:+9779841441374"
                  className="transition-colors hover:text-white"
                >
                  +9779841441374
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-brand-orange" aria-hidden />
                <a
                  href="mailto:info@lpm.org.np"
                  className="transition-colors hover:text-white"
                >
                  info@lpm.org.np
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="card-title text-white">Office Location</h3>
            <span className="mt-2 block h-0.5 w-12 bg-brand-orange" />
            <div
              className="relative mt-5 aspect-2/1 w-full overflow-hidden rounded-lg bg-[#3d3d3d]"
              aria-label="Office location map placeholder"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #8a8f98 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              />
              <FaMapMarkerAlt
                className="absolute left-[22%] top-[35%] text-lg text-brand-orange"
                aria-hidden
              />
              <FaMapMarkerAlt
                className="absolute left-[48%] top-[28%] text-lg text-brand-orange"
                aria-hidden
              />
              <FaMapMarkerAlt
                className="absolute right-[28%] top-[45%] text-lg text-brand-orange"
                aria-hidden
              />
              <FaMapMarkerAlt
                className="absolute bottom-[30%] left-[38%] text-lg text-brand-orange"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-white/15" />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:max-w-md">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Subscribe our Newsletter
            </h4>
            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex overflow-hidden rounded-lg bg-white"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="min-w-0 flex-1 border-0 bg-white px-4 py-3 text-sm text-[#333] placeholder:text-brand-muted focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer bg-[#004d00] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003d00]"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <div className="flex gap-2">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaTwitter, label: "Twitter" },
                { Icon: FaYoutube, label: "YouTube" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaLinkedinIn, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-orange text-white transition-opacity hover:opacity-85"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
            <p className="text-[15px] text-white">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span className="mx-2 text-white/50">|</span>
              <a href="#" className="hover:underline">
                Term &amp; Condition
              </a>
              <span className="mx-2 text-white/50">|</span>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </p>
          </div>
        </div>
      </div>

      <Copyright />
    </footer>
  );
};

export default Footer;
