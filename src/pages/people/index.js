import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Text from "../../components/Typography/Typography";
import moment from "moment";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ActiveNavState } from "../../atoms/ActiveStateAtom";

export default function People() {
  // eslint-disable-next-line
  const [isTrue, setIsTrue] = useRecoilState(ActiveNavState);
  const [isLoading, setIsloading] = useState(true);
  const [people, setPeople] = useState([]);

  const baseUrl = "https://swapi.dev/api/people/";
  const getPeople = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setPeople(response.data?.results);
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
    getPeople();
    // eslint-disable-next-line
  }, []);

  const rows = people?.map((item, id) => {
    return {
      name: (
        <Link
          className="cursor-pointer"
          to={`/people/name/${id + 1}`}
          state={item}
        >
          <p
            onClick={() => handleClick()}
            className="font-normal text-sm text-[#0048D3] cursor-pointer "
          >
            {item.name}
          </p>
        </Link>
      ),
      birth_year: (
        <p className="font-normal text-sm text-[#303B54] ">{item.birth_year}</p>
      ),
      gender: (
        <p className="font-normal text-sm text-[#303B54] ">{item.gender}</p>
      ),
      hair_color: (
        <p className="font-normal text-sm text-[#303B54] ">{item.hair_color}</p>
      ),
      height: (
        <p className="font-normal text-sm text-[#303B54] ">
          {item.height || 5} CM
        </p>
      ),
      created: (
        <p className="font-normal text-sm text-[#303B54] ">
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
        Header: "Birth Year",
        accessor: "birth_year",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Hair Color",
        accessor: "hair_color",
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
            People
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
