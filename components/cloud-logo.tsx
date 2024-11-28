import React from "react";

interface CloudLogoProps {
  data: { id: number; url: string }[];
}

const CloudLogo: React.FC<CloudLogoProps> = ({ data }) => {
  return (
    <div className="relative w-full z-30">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {data.map((item, key) => (
                  <img
                    key={key}
                    src={item.url}
                    className="h-20 w-max px-2"
                    alt={`${item.url}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CloudLogo;
