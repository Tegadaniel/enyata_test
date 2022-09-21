import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import Text from "../../components/Typography/Typography";
import { useRecoilState } from "recoil";
import { ActiveNavState } from "../../atoms/ActiveStateAtom";

export default function StarShip() {
  // eslint-disable-next-line
  const [isTrue, setIsTrue] = useRecoilState(ActiveNavState);
  const [isLoading, setIsloading] = useState(true);
  const [starShip, setStarShip] = useState([]);

  const baseUrl = "https://swapi.dev/api/starships/";
  const getStarShip = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setStarShip(response.data?.results);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    setIsTrue(true);
  };

  useEffect(() => {
    getStarShip();
    // eslint-disable-next-line
  }, []);

  const rows = starShip?.map((item, id) => {
    return {
      name: <p className="font-normal text-sm text-[#303B54] ">{item.name}</p>,
      model: (
        <p className="font-normal text-sm text-[#303B54] ">{item.model}</p>
      ),
      class: (
        <p className="font-normal text-sm text-[#303B54] ">
          {item.starship_class}
        </p>
      ),
      passengers: (
        <p className="font-normal text-sm text-[#303B54] ">{item.passengers}</p>
      ),
      length: (
        <p className="font-normal text-sm text-[#303B54] ">
          {item.length || 5}
        </p>
      ),
      character: (
        <Link
          className="cursor-pointer"
          to={`/starship/url/${id + 1}`}
          state={item}
        >
          <p
            onClick={() => handleClick()}
            className="font-normal text-sm text-[#0048D3] "
          >
            {item?.url}
          </p>
        </Link>
      ),
    };
  });

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Class",
        accessor: "class",
      },
      {
        Header: "Passengers",
        accessor: "passengers",
      },
      {
        Header: "Length",
        accessor: "length",
      },
      {
        Header: "Character",
        accessor: "character",
      },
    ],
    []
  );
  return (
    <>
      {isLoading ? (
        <div className="w-full flex flex-column justify-center items-center h-52">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="w-full ">
          <Text variant="h4" format="text-[#A4A7B7] font-normal mt-8">
            Films
          </Text>
          <div className=" border border-[#A4A7B766] border-solid rounded-sm mt-6">
            <Table
              columns={columns}
              data={rows}
              showChecked={true}
              className="w-full"
              // isLoading={isLoading}
              removePaginationAndFiltering={true}
            />
          </div>
        </div>
      )}
    </>
  );
}
