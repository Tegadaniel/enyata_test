import React from "react";
import deathStar from "../../../assets/deathStar.svg";
import { useLocation } from "react-router-dom";
import Text from "../../../components/Typography/Typography";

export default function SingleStarShip() {
  const { state } = useLocation();
  return (
    <div className="flex flex-row gap-4 mt-5 space-x-8">
      <div>
        <img src={deathStar} alt={state?.name} width="200" height="200" />
      </div>
      <div className="flex flex-col gap-3">
        <Text variant="h1" format="text-[#000000] font-bold text-md mb-5">
          {state?.name}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Model: {state?.model}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Passengers: {state?.passengers}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Pilots: {state?.pilots?.length === 0 ? "Empty" : state?.pilots}
        </Text>
      </div>
    </div>
  );
}
