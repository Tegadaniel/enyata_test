import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Text from "../components/Typography/Typography";
import Summary from "./components";
import Table from "../components/Table";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [films, setFilms] = useState([]);

  const endpoints = [
    "https://swapi.dev/api/films/",
    "https://swapi.dev/api/starships/",
    "https://swapi.dev/api/people/",
    "https://swapi.dev/api/species/",
  ];

  function multipleApiCall() {
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread((...allData) => {
        setData({ allData });
        setIsloading(false);
      })
    );
  }

  const baseUrl = "https://swapi.dev/api/films/";
  const getFilms = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setFilms(response.data?.results);
        console.log("flims", response.data?.results[0]?.characters[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    multipleApiCall();
    getFilms();
    // eslint-disable-next-line
  }, []);

  const orderInfo = new Array(6).fill({
    title: "Moonlight",
    release_date: "9/18/20 ",
    director: "Esther Howard",
    producer: "Paracetamol",
    episode_id: 7,
  });

  const [movies] = useState(orderInfo);

  const latestMovies = films || movies;


  const rows = latestMovies?.map((item, i) => {
    return {
      filmTitle: (
        <p className="font-normal text-sm text-[#303B54] ">{item.title}</p>
      ),
      releaseDate: (
        <p className="font-normal text-sm text-[#303B54] ">
          {item.release_date}
        </p>
      ),
      director: (
        <p className="font-normal text-sm text-[#303B54] ">{item.director}</p>
      ),
      producer: (
        <p className="font-normal text-sm text-[#303B54] ">{item.producer}</p>
      ),
      episodeId: (
        <p className="font-normal text-sm text-[#303B54] ">{item.episode_id || 5}</p>
      ),
      character: (
        <p className="font-normal text-sm text-[#303B54] ">{item?.characters[0]}</p>
      )
    };
  });

  const columns = useMemo(
    () => [
      {
        Header: "Film Title",
        accessor: "filmTitle",
      },
      {
        Header: "Release Date",
        accessor: "releaseDate",
      },
      {
        Header: "Director",
        accessor: "director",
      },
      {
        Header: "Producer",
        accessor: "producer",
      },
      {
        Header: "Episode ID",
        accessor: "episodeId",
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
          <Text variant="h2" format="text-[#303B54] font-bold cursor-pointer">
            Welcome, Admin 👋
          </Text>
          <div className="flex gap-x-2 my-4 w-full cursor-pointer">
            <Summary data={data} />
          </div>

          <div className="mt-8 cursor-pointer">
            <Text variant="h4" format="text-[#A4A7B7] font-normal">
              Films
            </Text>

            {/* <Table dataSource={rows} columns={column} /> */}

            {
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
            }
          </div>
        </div>
      )}
    </>
  );
}
