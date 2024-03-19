import Image from "next/image";
import Link from "next/link";
function Technical({ dataTechnology, lang }) {
  return (
    <section className="technical pt-[8.75rem] md:pb-[12rem] pb-[6rem] md:px-[4.17rem]">
      <div>
        <div className="md:flex-row-reverse flex text-[#444] font-bold items-center w-full max-md:px-[4.27rem]">
          <span className="text-[22.93333rem] leading-[1.2]">&</span>
          <div className="flex flex-col">
            <p
              className="text-[8.53333rem] leading-[1.2] w-[60rem] relative bottom-[-2rem] uppercase md:text-end"
            >
              {dataTechnology?.heading?.heading1}
            </p>
            <p
              className="text-[8.53333rem] leading-[1.2] w-[60rem] relative bottom-[-2rem] uppercase md:text-end"
            >
              {dataTechnology?.heading?.heading2}
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:mt-[6.6rem] mt-[5.2rem] gap-x-[13rem] max-md:flex-col-reverse max-md:px-[4.27rem]">
        <div className="left">
          <ul className="grid md:gap-x-[7.8rem] md:grid-cols-2 md:gap-y-[2rem] gap-[6rem] ">
            {dataTechnology?.listTechnology?.map((item, index) => (
              <li key={index} className="text-[1.35417rem]">
                <Image
                  src={item?.icon?.sourceUrl}
                  width={1000}
                  height={1000}
                  alt="icon"
                  className="md:w-[5.78125rem] md:h-[5.78125rem] w-[18.13333rem] h-[18.13333rem]"
                />
                <Link
                  href={`/${lang}/${lang === 'vi' ? 'cong-nghe' : 'technology'}/${
                   lang === 'vi' ? ( index === 0
                    ? "in-offset"
                    : index === 1
                    ? "in-flexo"
                    : index === 2
                    ? "in-ong-dong"
                    : "in-kts")
                    :(
                      index === 0
                      ? "offset-printing"
                      : index === 1
                      ? "flexography"
                      : index === 2
                      ? "gravure-printing"
                      : "others"
                    )
                  }`}
                >
                  <h4 className="text-[#444] font-bold md:mt-[1.25rem] max-md:my-[3rem] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem]">
                    {item?.technologyName}
                  </h4>
                </Link>
                <p className="md:text-[1.5rem] lg:mt-[1.425rem] text-[#888] lg:text-[1.35417rem] max-md:tracking-[-0.08533rem] leading-[116.662%] text-justify text-[4.26667rem]">
                  {item?.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: `${dataTechnology?.description}` }}
          className="right md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] tracking-[-0.08533rem] text-justify max-md:mb-[7rem]"
        ></div>
      </div>
    </section>
  );
}

export default Technical;
