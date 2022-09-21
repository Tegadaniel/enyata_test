import React from "react";
import shankImage from "../../../assets/shankImage.svg";
import { useLocation } from "react-router-dom";
import Text from "../../../components/Typography/Typography";

export default function SinglePerson() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="flex flex-row gap-4 mt-5 space-x-8">
      <div>
        <img src={shankImage} alt="shank cover" width="200" height="200" />
      </div>
      <div className="flex flex-col gap-3">
        <Text variant="h1" format="text-[#000000] font-bold text-md mb-5">
          {state?.name}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Gender: {state?.gender}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Year of Birth: {state?.birth_year}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Skin Color: {state?.skin_color}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
         Height: {state?.height}CM
        </Text>
      </div>
    </div>
  );
}
