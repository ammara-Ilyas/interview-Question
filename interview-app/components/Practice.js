"use client";
import React from "react";
import { useState } from "react";
const Practice = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const countries = [
    { coun: "Pakistan", code: "Pk", cities: ["Multan", "Khanewal"] },
    { coun: "India", code: "IN", cities: ["canadia", "chandigar"] },
    { coun: "USa", code: "us", cities: ["germany", "london"] },
  ];
  const index = countries.findIndex((ele) => ele.coun.trim() === country);

  console.log("index", index);
  //   console.log("counindex", countries[index].cities);
  //   let cites = countries[index].cities;
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCity("");
  };
  return (
    <div className="p-20 border-2">
      <select
        value={country}
        onChange={handleCountryChange}
        className="border-2"
      >
        <option value="" disabled>
          Select Country
        </option>
        {countries.map((ele, i) => (
          <option value={ele.coun} key={i}>
            {ele.coun}
          </option>
        ))}
      </select>
      {country && index > -1 && (
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border-2 w-10"
        >
          {countries[index].cities.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Practice;
