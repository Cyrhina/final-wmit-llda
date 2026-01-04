import { getMonitoringParameter } from "../partials/functions-partials";

const WaterQualityDescription = () => {
  return (
    <>
      <div className="bg-gray-100 pt-3 pb-8" id="description">
        <div className="website_container !max-w-[1000px]">
          <div className="flex flex-col items-center justify-center my-10">
            <h2 className="fonfont-open-sans-regular text-center text-[clamp(36px,6vw,40px)] leading-[1.1]">
              Water Quality Description
            </h2>
            <p className="font-open-sans-regular sm:text-center text-justify leading-6 pt-6 text-sm">
              Monitoring parameters provide LLDA with a comprehensive picture of
              Laguna Lake’s health. By monitoring them regularly, the Authority
              ensures the lake remains suitable for its intended beneficial uses
              while guiding environmental planning and sustainable management.
            </p>
          </div>
          <div className="h-full ">
            <div className="relative mb-5">
              <div className="flex justify-center mb-5">
                {getMonitoringParameter().map((item, key) => {
                  return (
                    key === 0 && (
                      <div className="flip-card " key={key}>
                        <div className="flip-card-inner">
                          <div className="flip-card-front pb-5 px-5 pt-3 ">
                            <img
                              src={item.img}
                              alt="logo"
                              className="w-[150px] h-[150px] m-auto"
                            />
                            <h1 className="text-[20px] leading-relaxed">
                              {item.name}
                            </h1>
                          </div>
                          <div className="flip-card-back p-5">
                            <h1 className="text-base">{item.name}</h1>
                            <p className=" text-justify mt-5">
                              {item.discription}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
              <div className="flex justify-center gap-5 flex-wrap items-center">
                {getMonitoringParameter().map((item, key) => {
                  return (
                    key !== 0 && (
                      <div className="flip-card" key={key}>
                        <div className="flip-card-inner">
                          <div className="flip-card-front pb-5 px-5 pt-3 ">
                            <img
                              src={item.img}
                              alt="logo"
                              className="w-[150px] h-[150px] m-auto"
                            />
                            <h1 className="text-[20px] leading-relaxed">
                              {item.name}
                            </h1>
                          </div>
                          <div className="flip-card-back p-5">
                            <h1 className="text-base">{item.name}</h1>
                            <p className=" text-justify mt-5">
                              {item.discription}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaterQualityDescription;
