import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { comparisonByQuery } from "../graphql/queries";
import { Spin } from "antd";
import Map from "./map";

export default function Form() {
  const [formData, updateFormData] = useState({});
  const [comparisonImage, setComparisonImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    var load = setTimeout(async function () {
      if (formData.startingYear !== formData.endingYear) {
        const comparison = await API.graphql({
          authMode: "API_KEY",
          query: comparisonByQuery,
          variables: {
            query:
              "comparisons/" +
              formData.region +
              "_" +
              formData.startingYear +
              "_" +
              formData.endingYear +
              "_2.png",
          },
        });

        setComparisonImage(comparison.data.comparisonByQuery.items[0].image);
      } else {
      }
    }, 5000);
    setLoading(false)
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h1 className="text-white text-4xl font-bold text-center mt-20 mb-10">
        Forest Change Detection Using Deep Learning
      </h1>
      <div class="w-3/4 mx-auto">
        <form
          class="bg-black mx-4 my-4 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div class="mb-4 mr-2 grid grid-cols-2 justify-items-center">
            <div>
              <label for="startingYear" className="text-white">
                Starting Year:
              </label>

              <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="startingYear"
                id="startingYear"
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="2014">Year</option>
                <option value="2014">2014</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
              </select>
            </div>
            <div>
              <label for="endingYear" className="text-white">
                Ending Year:
              </label>
              <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="endingYear"
                id="endingYear"
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="#">Year</option>
                <option value="2014">2014</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
              </select>
            </div>
          </div>
          <div class="mb-4 mr-4 grid grid-cols-1 justify-items-center">
            <label for="region" className="text-white">
              Region:
            </label>
            <select
              class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="region"
              id="region"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="#">Region</option>
              <option value="abbottabad">Abbottabad</option>
              <option value="chitral">Chitral</option>
              <option value="battagram">Battagram</option>
              <option value="hangu">Hangu</option>
              <option value="haripur">Haripur</option>
              <option value="kohat">Kohat</option>
              <option value="karak">Karak</option>
              <option value="lower_dir">Lower Dir</option>
              <option value="malakand">Malakand</option>
              <option value="nowshehra">Nowshehra</option>
              <option value="shangla">Shangla</option>
              <option value="swat">Swat</option>
              <option value="tor_ghar">Tor Ghar</option>
              <option value="upper_dir">Upper Dir</option>
            </select>
          </div>
          <div class="grid grid-cols-1 justify-items-center">
            <button class=" w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Process
            </button>
          </div>
        </form>
        <Map/>
        <Spin spinning={loading}>
          {comparisonImage != null ? (
            <div className="grid grid-cols-1 justify-items-center">
              <h1 className="text-white">Comparison</h1>
              <img
                width={"50%"}
                src={process.env.PUBLIC_URL + comparisonImage}
                alt=""
              />
            </div>
          ) : null}
        </Spin>
      </div>
    </div>
  );
}
