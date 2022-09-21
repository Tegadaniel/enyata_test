import React from "react";
import cover from "../../assets/cover.svg";
import { useLocation } from "react-router-dom";
import Text from "../../components/Typography/Typography";

export default function SingleOverview() {
  const { state } = useLocation();
  return (
    <div className="flex flex-row gap-4 mt-5 space-x-8">
      <div>
        <img src={cover} alt="cover" width="200" height="200" />
      </div>
      <div className="flex flex-col gap-3">
        <Text variant="h1" format="text-[#000000] font-bold text-md mb-5">
          {state?.title}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Director: {state?.director}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Producer: {state?.producer}
        </Text>
        <Text variant="body" format="text-[#434854] font-normal text-sm">
          Release Date: {state?.release_date}
        </Text>
      </div>
    </div>
  );
}
