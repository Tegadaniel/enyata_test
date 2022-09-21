import React from "react";
import films from "../../assets/films.svg";
import people from "../../assets/people.svg";
import species from "../../assets/species.svg";
import starships from "../../assets/starship.svg";
import Text from "../../components/Typography/Typography";

export default function Summary({ data }) {
  const summaries = [
    {
      id: 1,
      name: "Films",
      icon: films,
      total: data?.allData[0]?.data?.count || "20",
    },
    {
      id: 2,
      name: "Starships",
      icon: starships,
      total: data?.allData[1]?.data?.count || "20",
    },
    {
      id: 3,
      name: "People",
      icon: people,
      total: data?.allData[2]?.data?.count || "20",
    },
    {
      id: 4,
      name: "Species",
      icon: species,
      total: data?.allData[3]?.data?.count || "20",
    },
  ];
  return (
    <>
      <div className="w-full py-8">
        <div className="flex justify-between gap-x-3">
          {summaries.map((summary, index) => {
            return (
              <div
                key={index}
                className="flex justify-between gap-y-3 w-[20%] min-w-32 h-36 rounded-xl shadow-projects bg-white"
              >
                <div className="flex flex-col gap-4 basis-3/4 my-4 mx-4">
                  <div className="mb-1">
                    <Text variant="h3" format="text-[#303B54] sm:text-sm font-bold">
                      {summary.name}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Text variant="h3" format="text-[#303B54] sm:text-sm font-bold">
                      {summary.total}
                    </Text>

                    <Text variant="sub" format="text-[#00992B] text-xs font-normal">
                      20 More than than yesterday
                    </Text>
                  </div>
                </div>

                <div></div>

                <div className="hidden md:flex my-4 basis-1/4">
                  <div className="">
                    <img
                      src={summary.icon}
                      height="30"
                      width="30"
                      alt={summary.id}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
