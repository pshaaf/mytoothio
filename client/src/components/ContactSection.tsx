import { MapPinIcon } from "lucide-react";
import React from "react";

export const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-12 pt-0 pb-16 px-0 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex-col px-4 py-0 flex items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="items-start gap-10 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-10 h-10 bg-[#b3d6ff] rounded-full overflow-hidden flex items-center justify-center">
              <MapPinIcon className="w-5 h-5 text-[#0069dc]" />
            </div>

            <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#181d27] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                Dental Care – New York
              </h2>

              <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#535861] text-[length:var(--text-md-regular-font-size)] text-center tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                (212) 555-0198
              </p>
            </div>

            <address className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto] not-italic">
              <p className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#005ec6] text-[length:var(--text-md-semibold-font-size)] text-center tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                1234 Lexington Avenue
                <br />
                New York, NY 10028
              </p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};
