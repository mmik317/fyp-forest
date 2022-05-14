// import React, { useEffect, useState } from "react";
// import { API } from "aws-amplify"
// import { createComparison, createInference } from "../graphql/mutations"

// export default function Admin() {
//   const [formData, updateFormData] = useState({});
//   const handleChange = (e) => {
//     updateFormData({
//       ...formData,

//       // Trimming any whitespace
//       [e.target.name]: e.target.value.trim(),
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await API.graphql({
//         authMode: "API_KEY",
//         query: createComparison,
//         variables: { input: { image: ownerID, query: model.Id } },
//       });
//   };
//   useEffect(() => {
//     return () => {};
//   }, []);

//   return (
//     <div>
//       <h1 className="text-white text-4xl font-bold text-center mt-20 mb-10">
//         Forest Change Detection Using Deep Learning
//       </h1>
//       <div class="w-3/4 mx-auto">
//         <form class="bg-black mx-4 my-4 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => {handleSubmit(e)}}>
//           <div class="mb-4 mr-2 grid grid-cols-2 justify-items-center">
//             <div>
//               <label for="startingYear" className="text-white">
//                 Starting Year:
//               </label>

//               <select
//                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 name="startingYear"
//                 id="startingYear"
//                 onChange={(e) => {
//                   handleChange(e);
//                 }}
//               >
//                 <option value="2014">2014</option>
//                 <option value="2016">2016</option>
//                 <option value="2017">2017</option>
//                 <option value="2018">2018</option>
//               </select>
//             </div>
//             <div>
//               <label for="endingYear" className="text-white">
//                 Ending Year:
//               </label>
//               <select
//                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 name="endingYear"
//                 id="endingYear"
//                 onChange={(e) => {
//                   handleChange(e);
//                 }}
//               >
//                 <option value="2014">2014</option>
//                 <option value="2016">2016</option>
//                 <option value="2017">2017</option>
//                 <option value="2018">2018</option>
//               </select>
//             </div>
//           </div>
//           <div class="mb-4 mr-4 grid grid-cols-1 justify-items-center">
//             <label for="region" className="text-white">
//               Regions:
//             </label>
//             <select
//               class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               name="region"
//               id="region"
//               onChange={(e) => {
//                 handleChange(e);
//               }}
//             >
//               <option value="abbottabad">Abbottabad</option>
//               <option value="chitral">Chitral</option>
//               <option value="bagh">Bagh</option>
//               <option value="battagram">Battagram</option>
//               <option value="bhimber">Bhimber</option>
//               <option value="hangu">Hangu</option>
//               <option value="haripur">Haripur</option>
//               <option value="hyderabad">Hyderabad</option>
//               <option value="kohat">Kohat</option>
//               <option value="karak">Karak</option>
//               <option value="kotli">Kotli</option>
//               <option value="lowerDir">Lower Dir</option>
//               <option value="malakand">Malakand</option>
//               <option value="matiari">Matiari</option>
//               <option value="mirpur">Mirpur</option>
//               <option value="muzaffarabad">Muzaffarabad</option>
//               <option value="nowshehra">Nowshehra</option>
//               <option value="shangla">Shangla</option>
//               <option value="shikarpur">Shikarpur</option>
//               <option value="swat">Swat</option>
//               <option value="torGhar">Tor Ghar</option>
//               <option value="upperDir">Upper Dir</option>
//             </select>
//           </div>
//           <div class="grid grid-cols-1 justify-items-center">
//             <button
//               class=" w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Process
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
