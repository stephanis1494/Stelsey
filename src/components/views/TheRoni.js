import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const dohData = [
  { name: "03-16-2020", cases: 135, deaths: 6 },
  { name: "03-17-2020", cases: 108, deaths: 4 },
  { name: "03-18-2020", cases: 175, deaths: 14 },
  { name: "03-19-2020", cases: 187, deaths: 8 }
];
const cdcData = [
  { name: "03-17-2020", cases: 739, deaths: 7 },
  { name: "03-18-2020", cases: 2812, deaths: 22 },
  { name: "03-19-2020", cases: 3404, deaths: 53 }
];
const whoData = [
  { name: "03-15-2020", cases: 10982, deaths: 343 },
  { name: "03-16-2020", cases: 13903, deaths: 862 },
  { name: "03-17-2020", cases: 11562, deaths: 475 },
  { name: "03-18-2020", cases: 15123, deaths: 786 },
  { name: "03-19-2020", cases: 16556, deaths: 858 }
];

const TheRoni = () => (
  <div
    style={{
      margin: "100px"
    }}
  >
    {/* Depart of Health (WA) Data*/}
    <h1
      style={{
        marginBottom: "40px",
        fontFamily: "Raleway, sans-serif",
        fontWeight: "bold"
      }}
    >
      Department of Health (WA)
    </h1>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        background: "linear-gradient(195deg, #f0f0f0, #c2d4dd)",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <div>
        <h3
          style={{
            fontFamily: "Raleway, sans-serif",
            marginBottom: "20px"
          }}
        >
          New Cases
        </h3>
        <LineChart width={600} height={300} data={dohData}>
          <Line type="monotone" dataKey="cases" stroke="red" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
      <div>
        <h3 style={{ fontFamily: "Raleway, sans-serif", marginBottom: "20px" }}>
          New Deaths
        </h3>
        <LineChart width={600} height={300} data={dohData}>
          <Line type="monotone" dataKey="deaths" stroke="blue" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </div>

    {/* Center for Disease Control (USA) Data*/}
    <h1
      style={{
        marginBottom: "40px",
        marginTop: "80px",
        fontFamily: "Raleway, sans-serif",
        fontWeight: "bold"
      }}
    >
      Center for Disease Control (USA)
    </h1>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        background: "linear-gradient(195deg, #f0f0f0, #ddeedd)",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <div>
        <h3 style={{ fontFamily: "Raleway, sans-serif", marginBottom: "20px" }}>
          New Cases
        </h3>
        <LineChart width={600} height={300} data={cdcData}>
          <Line type="monotone" dataKey="cases" stroke="red" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
      <div>
        <h3 style={{ fontFamily: "Raleway, sans-serif", marginBottom: "20px" }}>
          New Deaths
        </h3>
        <LineChart width={600} height={300} data={cdcData}>
          <Line type="monotone" dataKey="deaths" stroke="blue" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </div>

    {/* World Health Organization Data (Global)*/}
    <h1
      style={{
        marginBottom: "40px",
        marginTop: "80px",
        fontFamily: "Raleway, sans-serif",
        fontWeight: "bold"
      }}
    >
      World Health Organization (Global)
    </h1>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        background: "linear-gradient(195deg, #f0f0f0, #b0aac0)",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <div>
        <h3 style={{ fontFamily: "Raleway, sans-serif", marginBottom: "20px" }}>
          New Cases
        </h3>
        <LineChart width={600} height={300} data={whoData}>
          <Line type="monotone" dataKey="cases" stroke="red" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
      <div>
        <h3 style={{ fontFamily: "Raleway, sans-serif", marginBottom: "20px" }}>
          New Deaths
        </h3>
        <LineChart width={600} height={300} data={whoData}>
          <Line type="monotone" dataKey="deaths" stroke="blue" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  </div>
);

export default TheRoni;
