import React from "react";

interface HeaderProps {
  title?: string;
  showStatusBar?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showStatusBar = true }) => {
  return (
    <div className="flex flex-col w-full items-start absolute top-0 left-0">
      {showStatusBar && (
        <div className="relative w-[390px] h-11 ml-[-7.50px] mr-[-7.50px] bg-white overflow-hidden">
          <div className="h-[78px] bg-[#f7f7f7]">
            <div className="relative w-[390px] h-[78px]">
              <div className="absolute w-[390px] h-[38px] top-0 left-0">
                <img
                  className="absolute w-[67px] h-[11px] top-[17px] left-[309px]"
                  alt="Right"
                  src="/figmaAssets/right.png"
                />

                <img
                  className="absolute w-7 h-[11px] top-[17px] left-[33px]"
                  alt="Date"
                  src="/figmaAssets/date.png"
                />
              </div>

              <div className="absolute w-[390px] h-[34px] top-11 left-0">
                <div className="relative w-[134px] h-[5px] top-[21px] left-32 bg-black rounded-[100px]" />
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="h-16 items-center justify-center border-b [border-bottom-style:solid] flex flex-col w-full bg-white border-[#e9e9eb] md:rounded-t-xl">
        <div className="flex items-center justify-center px-4 md:px-6 py-3 flex-1 w-full">
          <div className="inline-flex items-center gap-4">
            <div className="inline-flex items-center gap-1.5">
              <div className="relative w-[34px] h-10 bg-[url(/figmaAssets/image-7.png)] bg-[100%_100%]" />

              <div className="relative w-[95px] h-[38px] mr-[-4.00px]">
                <div className="absolute top-0 left-0 [font-family:'Lobster',Helvetica] font-normal text-[#1a5ed5] text-xl tracking-[0] leading-5 whitespace-nowrap">
                  Dental Care
                </div>

                <div className="absolute top-5 left-0.5 font-[number:var(--text-xs-medium-font-weight)] text-[#4badfd] text-[length:var(--text-xs-medium-font-size)] leading-[var(--text-xs-medium-line-height)] whitespace-nowrap font-text-xs-medium tracking-[var(--text-xs-medium-letter-spacing)] [font-style:var(--text-xs-medium-font-style)]">
                  New York
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {title && (
        <div className="flex items-center justify-between p-4 md:px-6 w-full bg-basewhite border-b [border-bottom-style:solid] border-[#e9e9eb]">
          <div className="items-center inline-flex flex-col gap-0.5">
            <div className="mt-[-1.00px] font-[number:var(--text-lg-medium-font-weight)] text-[#181d27] text-[length:var(--text-lg-medium-font-size)] leading-[var(--text-lg-medium-line-height)] whitespace-nowrap font-text-lg-medium tracking-[var(--text-lg-medium-letter-spacing)] [font-style:var(--text-lg-medium-font-style)]">
              {title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
