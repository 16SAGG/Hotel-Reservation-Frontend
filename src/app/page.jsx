import Image from "next/image";
import lakePic from "../../public/pictures/lake.png"
import biktoriaLogoV2 from "../../public/svg/biktoria_logo_v2.svg"

export default function Home() {
  return (
    <>
      <div
        className="grid grid-cols-1 grid-rows-1 h-[100vh] max-h-[1140px]"
      >
        <Image
          src={lakePic}
          alt="Lake Background"
          width={768}
          height={1150}
          className="h-full w-full col-start-1 row-start-1 object-cover"
        />
        <div className="flex justify-center col-start-1 row-start-1">
          <div className="flex justify-center flex-col gap-5 w-full min-h-[434px]">
            <div
              className="flex justify-center"
            >
              <Image
                src={biktoriaLogoV2}
                alt="Biktoria Logo"
                style={{transform:"translate(22px, 0)"}}
              />
            </div>
            <p
              className="text-center"
            >
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
