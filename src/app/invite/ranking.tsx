import Image from "next/image";
import medal_1 from "../../assets/medals/medal_1.svg";
import medal_2 from "../../assets/medals/medal_2.svg";
import medal_3 from "../../assets/medals/medal_3.svg";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 font-heading font-semibold leading-none text-xl">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col justify-center gap-3 p-6 relative">
          <span className="text-sm font-bold text-gray-300">
            <span className="font-semibold"> 1º</span> | André Souza
          </span>
          <span className="font-heading  text-gray-200 font-semibold text-2xl leading-none">
            1.128
          </span>
          <Image
            src={medal_1}
            alt=""
            width={56}
            height={86}
            className="absolute top-0 right-8"
          />
        </div>
        <div className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col justify-center gap-3 p-6 relative">
          <span className="text-sm font-bold text-gray-300">
            <span className="font-semibold"> 2º</span> | André Souza
          </span>
          <span className="font-heading  text-gray-200 font-semibold text-2xl leading-none">
            1.128
          </span>
          <Image
            src={medal_2}
            alt=""
            width={56}
            height={86}
            className="absolute top-0 right-8"
          />
        </div>
        <div className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col justify-center gap-3 p-6 relative">
          <span className="text-sm font-bold text-gray-300">
            <span className="font-semibold"> 3º</span> | André Souza
          </span>
          <span className="font-heading text-gray-200 font-semibold text-2xl leading-none">
            1.128
          </span>
          <Image
            src={medal_3}
            alt=""
            width={56}
            height={86}
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  );
}
