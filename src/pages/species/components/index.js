import React from "react";
import wookieImage from "../../../assets/wookieImage.svg";
import { useLocation } from "react-router-dom";
import Text from "../../../components/Typography/Typography";

export default function SingleSpecies() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="flex flex-row gap-4 mt-5 space-x-8">
      <div>
        <img src={wookieImage} alt={state?.name} width="200" height="200" />
      </div>
      <div className="flex flex-col gap-3">
        <Text variant="h1" format="text-[#000000] font-bold text-md mb-5">
          {state?.name}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Designation: {state?.designation}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
         Language: {state?.language}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Eye Color: {state?.eye_color || "Empty"}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Average Lifespan: {state?.average_lifespan}
        </Text>
      </div>
    </div>
  );
}
