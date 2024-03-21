import React, { useEffect, useState } from "react";
import { DeportivoPastoIcon, EnvigadoIcon } from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { getLeague, teamStats } from "../../reducers/TeamComparisonSlice";
import { LastHomeResult } from "../../reducers/PredictionsSlice";

const ViewTeamInformationDetails = ({ singleId }) => {
  console.log("infoModalId: ", singleId);
  const { statistics, isLoading } = useSelector(
    (state) => state.teamComparision
  );
  const { leaguesData } = useSelector((state) => state.teamComparision);
  const { lastHomeResult } = useSelector((state) => state.prediction);
  const [leagueId, setLeaugeId] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch league data and set leagueId
    dispatch(getLeague({ team: singleId })).then(() => {
      setLeaugeId(leaguesData[0]?.league?.id);
      console.log("league id: ", leaguesData[0]?.league?.id);
      dispatch(
        teamStats({
          team: singleId,
          league: leagueId,
          season: "2023",
        })
      );
      dispatch(LastHomeResult({ team: singleId, last: 5 }));
    });
  }, [dispatch, singleId, leagueId]);
  console.log("statistics: ", statistics?.response);

  console.log("lastHome: ", lastHomeResult);

  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="pt-2 pb-2">
      <div className="flex justify-between items-center">
        {/* <h2 className="font-Bebas text-2xl md:text-3xl tracking-normal text-[#2aa9e1] mb-0">
          View Team Information Details
        </h2> */}
        {/* <img
          src={statistics?.response?.team?.logo}
          alt={statistics?.response?.team?.name}
        /> */}
      </div>
      {isLoading ? (
        <div class="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <img
              src={statistics?.response?.team?.logo}
              alt={statistics?.response?.team?.name}
            />
            <h2 className="font-Bebas text-2xl md:text-3xl tracking-normal text-[#2aa9e1]">
              {statistics?.response?.team?.name}
            </h2>
          </div>
          <div className="mt-8">
            <div className="mb-2">
              <h3 className="font-Bebas text-xl tracking-normal">Statistics</h3>
            </div>
            <div class="lg:flex gap-4 mb-4">
              <div class="border border-[#d1d5db] p-4 rounded-xl flex mb-2 lg:mb-0">
                <div>
                  <h3 className="font-Bebas text-xl tracking-normal pb-2">
                    Goals
                  </h3>
                  <div className="md:flex">
                    <div className="flex items-center mr-8">
                      <h2 className="text-[#2aa9e1] text-[28px] leading-[28px] font-semibold mr-4">
                        For
                      </h2>
                      <p className="text-black text-[14px] leading-[24px] font-medium">
                        Home
                      </p>
                      <h3 className="text-[#2aa9e1] text-[20px] leading-[35px] font-medium px-3">
                        {statistics?.response?.goals?.for?.total?.home}
                      </h3>
                      <p className="text-black text-[14px] leading-[24px] font-medium">
                        Away
                      </p>
                      <h3 className="text-[#2aa9e1] text-[20px] leading-[35px] font-medium px-3">
                        {statistics?.response?.goals?.for?.total?.away}
                      </h3>
                    </div>
                    <div className="flex items-center mr-8">
                      <h2 className="text-[#2aa9e1] text-[28px] leading-[28px] font-semibold mr-4">
                        Against
                      </h2>
                      <p className="text-black text-[14px] leading-[24px] font-medium">
                        Home
                      </p>
                      <h3 className="text-[#2aa9e1] text-[20px] leading-[35px] font-medium px-3">
                        {statistics?.response?.goals?.against?.total?.home}
                      </h3>
                      <p className="text-black text-[14px] leading-[24px] font-medium">
                        Away
                      </p>
                      <h3 className="text-[#2aa9e1] text-[20px] leading-[35px] font-medium px-3">
                        {statistics?.response?.goals?.against?.total?.away}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border border-[#d1d5db] p-4 rounded-xl flex">
                <div>
                  <h3 className="font-Bebas text-xl tracking-normal pb-2">
                    Streak
                  </h3>
                  <div className="md:flex">
                    <div className="flex items-center mr-8">
                      <p className="text-black text-[14px] leading-[24px] font-medium">
                        Wins
                      </p>
                      <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                        {statistics?.response?.biggest?.streak?.wins}
                      </h3>
                      <p className="text-black text-[14px] leading-[24px] font-medium">
                        Loses
                      </p>
                      <h3 className="text-[#2aa9e1] text-[20px] leading-[35px] font-medium px-3">
                        {statistics?.response?.biggest?.streak?.loses}
                      </h3>
                      <p className="text-black text-[14px] leading-[24px] font-medium">
                        Draws
                      </p>
                      <h3 className="text-[#2aa9e1] text-[20px] leading-[35px] font-medium px-3">
                        {statistics?.response?.biggest?.streak?.draws}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-2">
              <h3 className="font-Bebas text-xl tracking-normal">
                Clean Sheet
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="border border-[#d1d5db] p-4 rounded-xl flex items-center justify-center">
                <p className="text-black text-[14px] leading-[24px] font-medium">
                  Total
                </p>
                <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                  {statistics?.response?.clean_sheet?.total}
                </h3>
                <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
                  Home
                </p>
                <h3 className="text-black text-[20px] leading-[35px] font-medium">
                  {statistics?.response?.clean_sheet?.home}
                </h3>
                <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
                  Away
                </p>
                <h3 className="text-black text-[20px] leading-[35px] font-medium">
                  {statistics?.response?.clean_sheet?.away}
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-2">
              <h3 className="font-Bebas text-xl tracking-normal">Fixtures</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="border border-[#d1d5db] p-4 rounded-xl">
                <h3 class="font-Bebas text-xl tracking-normal pb-2">Draws</h3>
                <div className="flex items-center justify-center">
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Total
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    {statistics?.response?.fixtures?.draws?.total}
                  </h3>
                  <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
                    Home
                  </p>
                  <h3 className="text-black text-[20px] leading-[35px] font-medium">
                    {statistics?.response?.fixtures?.draws?.home}
                  </h3>
                  <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
                    Away
                  </p>
                  <h3 className="text-black text-[20px] leading-[35px] font-medium">
                    {statistics?.response?.fixtures?.draws?.away}
                  </h3>
                </div>
              </div>
              <div className="border border-[#d1d5db] p-4 rounded-xl">
                <h3 class="font-Bebas text-xl tracking-normal pb-2">Loses</h3>
                <div className="flex items-center justify-center">
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Total
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    {statistics?.response?.fixtures?.loses?.total}
                  </h3>
                  <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
                    Home
                  </p>
                  <h3 className="text-black text-[20px] leading-[35px] font-medium">
                    {statistics?.response?.fixtures?.loses?.home}
                  </h3>
                  <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
                    Away
                  </p>
                  <h3 className="text-black text-[20px] leading-[35px] font-medium">
                    {statistics?.response?.fixtures?.loses?.away}
                  </h3>
                </div>
              </div>
              <div className="border border-[#d1d5db] p-4 rounded-xl">
                <h3 class="font-Bebas text-xl tracking-normal pb-2">Played</h3>
                <div className="flex items-center justify-center">
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Total
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    {statistics?.response?.fixtures?.played?.total}
                  </h3>
                  <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
                    Home
                  </p>
                  <h3 className="text-black text-[20px] leading-[35px] font-medium">
                    {statistics?.response?.fixtures?.played?.home}
                  </h3>
                  <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
                    Away
                  </p>
                  <h3 className="text-black text-[20px] leading-[35px] font-medium">
                    {statistics?.response?.fixtures?.played?.away}
                  </h3>
                </div>
              </div>
              <div className="border border-[#d1d5db] p-4 rounded-xl">
                <h3 class="font-Bebas text-xl tracking-normal pb-2">Wins</h3>
                <div className="flex items-center justify-center">
                  <p className="text-black text-[14px] leading-[24px] font-medium">
                    Total
                  </p>
                  <h3 className="text-[#2aa9e1] text-[35px] leading-[35px] font-medium px-3">
                    {statistics?.response?.fixtures?.wins?.total}
                  </h3>
                  <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
                    Home
                  </p>
                  <h3 className="text-black text-[20px] leading-[35px] font-medium">
                    {statistics?.response?.fixtures?.wins?.home}
                  </h3>
                  <p className="text-[#868686] text-[14px] leading-[24px] font-medium px-3">
                    Away
                  </p>
                  <h3 className="text-black text-[20px] leading-[35px] font-medium">
                    {statistics?.response?.fixtures?.wins?.away}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-Bebas text-xl tracking-normal">
              Recent Encounters
            </h3>
            {/* <div>
      <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
        <div className="text-center flex justify-center items-center">
          <img
            src={DeportivoPastoIcon}
            alt="DeportivoPastoIcon"
            className="inline-block"
          />
        </div>
        <div className="text-center col-span-2">
          <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
            Sun, 10th Mar 2024
          </h3>
          <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
            <span className="text-[#2aa9e1]">
              At Estadio Olímpico Metropolitano,
            </span>{" "}
            Liga Nacional
          </p>
          <div className="bg-[#2aa9e1] py-2 rounded-full">
            <h3 className="text-white text-base">2 - 0</h3>
          </div>
        </div>
        <div className="text-center flex justify-center items-center">
          <img
            src={EnvigadoIcon}
            alt="EnvigadoIcon"
            className="inline-block"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
        <div className="text-center flex justify-center items-center">
          <img
            src={DeportivoPastoIcon}
            alt="DeportivoPastoIcon"
            className="inline-block"
          />
        </div>
        <div className="text-center col-span-2">
          <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
            Sun, 10th Mar 2024
          </h3>
          <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
            <span className="text-[#2aa9e1]">
              At Estadio Olímpico Metropolitano,
            </span>{" "}
            Liga Nacional
          </p>
          <div className="bg-[#2aa9e1] py-2 rounded-full">
            <h3 className="text-white text-base">2 - 0</h3>
          </div>
        </div>
        <div className="text-center flex justify-center items-center">
          <img
            src={EnvigadoIcon}
            alt="EnvigadoIcon"
            className="inline-block"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
        <div className="text-center flex justify-center items-center">
          <img
            src={DeportivoPastoIcon}
            alt="DeportivoPastoIcon"
            className="inline-block"
          />
        </div>
        <div className="text-center col-span-2">
          <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
            Sun, 10th Mar 2024
          </h3>
          <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
            <span className="text-[#2aa9e1]">
              At Estadio Olímpico Metropolitano,
            </span>{" "}
            Liga Nacional
          </p>
          <div className="bg-[#2aa9e1] py-2 rounded-full">
            <h3 className="text-white text-base">2 - 0</h3>
          </div>
        </div>
        <div className="text-center flex justify-center items-center">
          <img
            src={EnvigadoIcon}
            alt="EnvigadoIcon"
            className="inline-block"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
        <div className="text-center flex justify-center items-center">
          <img
            src={DeportivoPastoIcon}
            alt="DeportivoPastoIcon"
            className="inline-block"
          />
        </div>
        <div className="text-center col-span-2">
          <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
            Sun, 10th Mar 2024
          </h3>
          <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
            <span className="text-[#2aa9e1]">
              At Estadio Olímpico Metropolitano,
            </span>{" "}
            Liga Nacional
          </p>
          <div className="bg-[#2aa9e1] py-2 rounded-full">
            <h3 className="text-white text-base">2 - 0</h3>
          </div>
        </div>
        <div className="text-center flex justify-center items-center">
          <img
            src={EnvigadoIcon}
            alt="EnvigadoIcon"
            className="inline-block"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
        <div className="text-center flex justify-center items-center">
          <img
            src={DeportivoPastoIcon}
            alt="DeportivoPastoIcon"
            className="inline-block"
          />
        </div>
        <div className="text-center col-span-2">
          <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
            Sun, 10th Mar 2024
          </h3>
          <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
            <span className="text-[#2aa9e1]">
              At Estadio Olímpico Metropolitano,
            </span>{" "}
            Liga Nacional
          </p>
          <div className="bg-[#2aa9e1] py-2 rounded-full">
            <h3 className="text-white text-base">2 - 0</h3>
          </div>
        </div>
        <div className="text-center flex justify-center items-center">
          <img
            src={EnvigadoIcon}
            alt="EnvigadoIcon"
            className="inline-block"
          />
        </div>
      </div>
    </div> */}
            {lastHomeResult?.data?.map((homeResults) => {
              return (
                <>
                  <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-300 py-4">
                    <div className="text-center flex justify-center items-center">
                      <img
                        src={homeResults?.teams?.home?.logo}
                        alt={homeResults?.teams?.home?.name}
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                    <div className="text-center col-span-2">
                      <h3 className="text-black text-[14px] leading-[16px] font-medium font-Bebas text-base tracking-normal pb-0">
                        {formatDate(homeResults?.fixture?.date)}
                      </h3>
                      <p className="text-black font-semibold text-[12px] leading-[16px] font-Montserrat inline-block pb-2">
                        <span className="text-[#2aa9e1]">
                          {homeResults?.fixture?.venue?.name}
                        </span>{" "}
                        {homeResults?.league?.name}
                      </p>
                      <div className="bg-[#2aa9e1] py-2 rounded-full">
                        <h3 className="text-white text-base">
                          {homeResults?.goals?.home} -{" "}
                          {homeResults?.goals?.away}
                        </h3>
                      </div>
                    </div>
                    <div className="text-center flex justify-center items-center">
                      <img
                        src={homeResults?.teams?.away?.logo}
                        alt={homeResults?.teams?.away?.name}
                        className="inline-block mb-2 w-10"
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ViewTeamInformationDetails;
