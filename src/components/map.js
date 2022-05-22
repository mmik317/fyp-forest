import React, { useRef, useEffect, useState } from "react";
import { Spin } from "antd";

import axios from "axios";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHVzc2Fpbi03IiwiYSI6ImNsMjNpNGY1azA5NTQzYnFrYzlsa3IxMnUifQ.MqO0NdU0Y7Ln6u6aHza3-Q";
export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(73.2215);
  const [lat, setLat] = useState(34.1688);
  const [inferenceResult, setInferenceResult] = useState("");
  const [zoom, setZoom] = useState(9);
  const [points, _setPoints] = useState([]);
  const pointsRef = useRef(points);
  const [formData, updateFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [markers, setMarkers] = useState([]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const setPoints = (data) => {
    pointsRef.current = data;
    _setPoints(data);
  };

  var currentMarkers = [];

  useEffect(() => {
    if (map.current && points.length == 0) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("load", function () {
      map.current.on("click", function (e) {
        let statePoints = [...pointsRef.current];
        if (statePoints.length <= 3) {
          statePoints.push(e.lngLat);
          setPoints(statePoints);
          const marker = new mapboxgl.Marker()
            .setLngLat([e.lngLat.lng, e.lngLat.lat])
            .addTo(map.current);
          currentMarkers.push(marker);
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  function polygonArea(X, Y, n) {
    // Initialize area
    let area = 0.0;

    // Calculate value of shoelace formula
    let j = n - 1;
    for (let i = 0; i < n; i++) {
      area += (X[j] + X[i]) * (Y[j] - Y[i]);

      // j is previous vertex to i
      j = i;
    }

    // Return absolute value
    return Math.abs(area / 2.0);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      polygonArea(
        [points[0].lng, points[1].lng, points[2].lng, points[3].lng],
        [points[0].lat, points[1].lat, points[2].lat, points[3].lat],
        4
      )
    );
    if (points.length != 4) {
      alert("please select 4 points");
      return;
    }
    setLoading(true);
    console.log(formData.startingYear, formData.endingYear, formData.region);
    console.log(
      `http://100.26.106.93:8001/playground/map/${formData.startingYear}/${formData.endingYear}/${formData.region}/${points[0].lng}/${points[0].lat}/${points[1].lng}/${points[1].lat}/${points[2].lng}/${points[2].lat}/${points[3].lng}/${points[3].lat}/`
    );
    axios
      .get(
        // `http://54.161.197.55:8000/playground/hello/${formData.startingYear}/${formData.endingYear}/${formData.region}/${points[0].lng}/${points[0].lat}/${points[1].lng}/${points[1].lat}/${points[2].lng}/${points[2].lat}/${points[3].lng}/${points[4].lat}/`,
        // "http://184.73.114.175:8001/playground/map/2018/2019/abbottabad/73.18030126953235/34.15743681038424/73.22973974609442/34.16198226976158/73.19266088867246/34.11537971335815/73.23111303711033/34.11424274460673/",
        `http://100.26.106.93:8001/playground/map/${formData.startingYear}/${formData.endingYear}/${formData.region}/${points[0].lng}/${points[0].lat}/${points[1].lng}/${points[1].lat}/${points[2].lng}/${points[2].lat}/${points[3].lng}/${points[3].lat}/`,

        {}
      )
      .then(function (response) {
        console.log("data:image/png;base64," + response.data);
        setInferenceResult("data:image/png;base64," + response.data);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>
      <form
        className="bg-black mx-4 my-4 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-4 mr-2 grid grid-cols-2 justify-items-center">
          <div>
            <label for="startingYear" className="text-white mx-4">
              Starting Year:
            </label>
            <input
              required
              name="startingYear"
              type="text"
              className=" rounded p-2"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label for="endingYear" className="text-white mx-4">
              Ending Year:
            </label>
            <input
              required
              name="endingYear"
              type="text"
              className=" rounded p-2"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="mb-4 mr-2 grid grid-cols-1 justify-items-center">
          <div>
            <label for="region" className="text-white mx-4">
              Region:
            </label>
            <input
              required
              type="text"
              name="region"
              className=" rounded p-2"
              placeholder="name your region"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div class="grid grid-cols-1 justify-items-center">
          <button class=" w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Process
          </button>
        </div>
      </form>
      <Spin spinning={loading}>
        {inferenceResult != "" ? (
          <div className="grid grid-cols-1 justify-items-center">
            <h1 className="text-white">Comparison</h1>
            <img src={inferenceResult} alt="result" />
          </div>
        ) : null}
      </Spin>
    </>
  );
}
