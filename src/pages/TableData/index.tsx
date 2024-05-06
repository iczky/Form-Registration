import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../components/context/TableDataContext";
import Navbar from "../../components/Navbar";

const TableData = () => {
  const { formData } = useFormData();

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="overflow-x-auto px-3 pt-3">
        <h2
          className="text-lg font-bold mb-4 cursor-pointer"
          onClick={handleClick}>
          Form Data
        </h2>
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Password</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {formData.map(({ id, name, email, password }) => (
              <tr
                key={id}
                className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{id}</td>
                <td className="py-3 px-6 text-left">{name}</td>
                <td className="py-3 px-6 text-left">{email}</td>
                <td className="py-3 px-6 text-left">{password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableData;

// useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/data");
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       setFormData(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
