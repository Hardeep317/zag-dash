import logo from "./logo.svg";
import { data } from "./Data/data";
import "./App.css";
import { BiTrendingUp, BiGridHorizontal, BiSearch } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import RadialBarChart from "./Component/PieChart";
import Horizontal from "./Component/Horizontal";
import { useEffect, useState } from "react";

function App() {
  const [usersData, setUsersData] = useState(data);
  const [page, setPage] = useState(1);
  const [constData, setConstData] = useState(data);
  const [filter, setFilter] = useState("");

  const paginate = () => {
    let startIdx = (page - 1) * 8;
    const endIndex = startIdx + 8;
    setUsersData(data.slice(startIdx, endIndex));
  };

  useEffect(() => {
      paginate();
    // }
  }, []);

  const handleChange = (value) => {
    if(value === 'inactive'){
      setUsersData(constData.sort((a, b) => Number(a.status) - Number(b.status)))
    }else if(value === 'active'){
      setUsersData(constData.sort((a, b) => Number(b.status) - Number(a.status)))
    }else if(value === 'newest'){
      setUsersData(constData.sort((a, b) => (a.created > b.created ? -1 : 1)))
    }else if(value === 'select'){
        setUsersData(data)
    }
    console.log(value);
  };
  // console.log(usersData);

  return (
    <div className="App bg-gray-100">
      <div className="fixed min-h-full min-w-[230px] left-0 top-0 shadow-md p-3 z-10 bg-white">
        <img
          src="/logo.png"
          className="w-[73px] h-[47px] top-[28px] left-[69px] relative"
          alt=""
        />
        <div className="mt-[55px] pl-6">
          <p className="flex items-center w-[193px] mt-2 m-auto">
            <BiTrendingUp className="mr-3" /> Reports
          </p>
          <div className="flex items-center p-2 w-[193px] mt-2 m-auto text-blue-700 bg-blue-100 text-center text-sm rounded-md font-semibold">
            <BiGridHorizontal className="mr-3 text-xl" /> Workplace
          </div>
          <p className="flex items-center w-[193px] mt-2 m-auto">
            <IoMdSettings className="mr-3" /> Settings
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-[300px] mr-[80px] border-b-[3px] border-gray-200 p-3 mb-12">
        <h1 className="font-bold text-lg">Orders</h1>
        <button className="bg-blue-600 text-white py-[8px] px-[12px] rounded-xl text-sm font-semibold w-[128px] flex">
          {" "}
          <AiOutlinePlus className="text-xl" /> Add Other
        </button>
      </div>

      <div className=" ml-[350px] mr-[150px]">
        <div className="flex justify-between">
          <div className="p-3 bg-white rounded-xl max-w[100%] shadow-md text-left ">
            <h1 className="ml-4 font-semibold">All Coustmers</h1>
            <div className="flex justify-between max-w-[500px]">
              <div className="block">
                <RadialBarChart series={76} color={"#5f27cd"} className="w-12" />
                <p className="absolute left-[380px] top-[240px] text-[10px] text-gray-400 font-semibold">Currect Customers</p>
              </div>
              <div className="block">
                <RadialBarChart series={61} color={"#16C098"} className="w-12" />
                <p className="absolute left-[515px] top-[240px] text-[10px] text-gray-400 font-semibold">New Customers</p>
              </div>
              <div className="block">
                <RadialBarChart series={47} color={"#FF6B6B"} className="w-12" />
                <p className="absolute left-[650px] top-[240px] text-[10px] text-gray-400 font-semibold">Target Customers</p>
              </div>
              <div>
                <RadialBarChart series={74} color={"#FFC5C5"} className="w-12" />
                <p className="absolute left-[765px] top-[240px] text-[10px] text-gray-400 font-semibold">Retarget Customers</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-left">
            <h1 className="font-semibold">Site Overview</h1>
            <div className="text-left">
              <p className="text-[12px] text-gray-400 font-semibold">Active</p>
              <div className="w-[300px] h-[6px] bg-gray-300 rounded-lg">
                <div className="w-[216px] bg-[#16C098] h-[6px] rounded-l-lg"></div>
              </div>
              <p className="text-[12px] text-gray-400 font-bold ml-[275px]">72%</p>
            </div>
            <div className="text-left">
              <p className="text-[12px] text-gray-400 font-semibold">Inactive</p>
              <div className="w-[300px] h-[6px] bg-gray-300 rounded-lg">
                <div className="w-[171px] bg-[#FF6B6B] h-[6px] rounded-l-lg"></div>
              </div>
              <p className="text-[12px] text-gray-400 font-semibold ml-[275px]">57%</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" ml-[300px] mr-[150px]  shadow-md">
        <div className="mt-10 bg-white rounded-2xl p-2">
          <div className="flex justify-between px-5 pt-8 pb-3">
            <p className="text-[#16C098] font-normal text-[14px] ">
              Active Members
            </p>
            <div className="flex items-center">
              <BiSearch className="text-gray-500 text-[39px] rounded-l-xl bg-gray-100 p-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 text-[12px] p-3 rounded-r-xl"
              />
              <label
                htmlFor=""
                className="bg-gray-100 text-[12px] p-1 px-4 rounded-xl ml-6"
              >
                Sort by:
                <select
                  name=""
                  id=""
                  className="bg-gray-100 text-[12px] p-2 rounded-xl outline-0 text-black font-bold"
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value);
                    handleChange(e.target.value);
                  }}
                >
                  <option className="m-3 " value="select">
                    Select
                  </option>
                  <option className="m-3 " value="newest">
                    Newest
                  </option>
                  <option className="m-3 " value="active">
                    Active
                  </option>
                  <option className="m-3 " value="inactive">
                    Inactive
                  </option>
                </select>
              </label>
            </div>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-300 uppercase bg-white">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    Customer name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Company
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Phone Number
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Country
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user, i) => {
                  return (
                    <tr key={i} className="bg-white">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {user.full_name}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {user.company}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {user.phone}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {user.country}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {user.status ? (
                          <button className="border-[2px] py-1 px-3 text-[12px] border-[#00B087] bg-[#16C098] bg-opacity-[0.38] rounded-md w-20 text-[#008767]">
                            Active
                          </button>
                        ) : (
                          <button className="border-[2px] py-1 px-3 text-[12px] border-[#DF0404] bg-[#FFC5C5] rounded-md w-20 text-[#DF0404]">
                            Inactive
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="flex justify-between items-center px-6 py-2 ">
              <p className="text-[12px] font-bold text-gray-400">
                Showing items {page + (page - 1) * 8} to {page + page * 8} of{" "}
                {data.length} entries
              </p>
              <div>
                <button
                  onClick={() => {
                    setPage((page) => page - 1);
                    paginate();
                  }}
                  className={`py-1 px-2 rounded-md mr-2 text-[13px] ${
                    page === 1 ? "bg-gray-400" : "bg-gray-200"
                  }`}
                  disabled={page === 1}
                >
                  {"<"}
                </button>
                <button className="py-1 px-2 rounded-md mr-2 text-[13px] bg-gray-200 ">
                  {page}
                </button>
                <button
                  className={`py-1 px-2 rounded-md mr-2 text-[13px] ${
                    page === Math.round(data.length / 8) - 1
                      ? "bg-gray-400"
                      : "bg-gray-200"
                  }`}
                  onClick={() => {
                    setPage((page) => page + 1);
                    paginate();
                  }}
                  disabled={page === Math.round(data.length / 8) - 1}
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
