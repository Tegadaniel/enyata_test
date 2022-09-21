import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Text from "../../components/Typography/Typography";
import moment from "moment";

export default function Species() {
  const [isLoading, setIsloading] = useState(true);
  const [species, setSpecies] = useState([]);

  const baseUrl = "https://swapi.dev/api/species/";
  const getSpecies = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setSpecies(response.data?.results);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSpecies();
    // eslint-disable-next-line
  }, []);

  const rows = species?.map((item, i) => {
    return {
      name: <p className="font-normal text-sm text-[#303B54] ">{item.name}</p>,
      classification: (
        <p className="font-normal text-sm text-[#303B54] ">
          {item.classification}
        </p>
      ),
      eye_colors: (
        <p className="font-normal text-sm text-[#303B54] ">{item.eye_colors}</p>
      ),
      hair_colors: (
        <p className="font-normal text-sm text-[#303B54] ">{item.hair_colors}</p>
      ),
      height: (
        <p className="font-normal text-sm text-[#303B54] ">
          {item.average_height || 5} CM
        </p>
      ),
      created: (
        <p className="font-normal text-sm text-[#303B54] ">
          {" "}
          {moment(item?.created).format("LLLL")}
        </p>
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
        Header: "Classification",
        accessor: "classification",
      },
      {
        Header: "Eye Color",
        accessor: "eye_colors",
      },
      {
        Header: "Hair Color",
        accessor: "hair_colors",
      },
      {
        Header: "height",
        accessor: "height",
      },
      {
        Header: "Created",
        accessor: "created",
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
            Species
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
