import { useState } from "react";

const DynamicTable = () => {
  const [tables, setTables] = useState([]);

  // Function to add a new table to the state
  const addTable = () => {
    const newTable = {
      headers: ["Name", "Age", "Job"],
      rows: [
        { name: "Aymaan", age: 21, job: "SWE" },
        { name: "Sanjay", age: 30, job: "Pilot" },
      ],
    };
    setTables([...tables, newTable]);
  };

  // Function to delete a specific table from the state
  const deleteTable = (tableIndex) => {
    setTables(tables.filter((_, index) => index !== tableIndex));
  };

  return (
    <div className="p-8 ">
      <h2 className="text-2xl font-bold mb-4">Dynamic Table Generator</h2>
      <p className="mt-6 mb-6 text-lg text-red-600">
        Change Array Values from DynamicTable.jsx to Generate New Table{" "}
      </p>
      <button
        onClick={addTable}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add New Table
      </button>

      {tables.map((table, tableIndex) => (
        <div key={tableIndex} className="mt-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
                {table.headers.map((header, headerIndex) => (
                  <th key={headerIndex} className="py-3 px-6">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {table.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-gray-200 hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-6">{row.name}</td>
                  <td className="py-3 px-6">{row.age}</td>
                  <td className="py-3 px-6">{row.job}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => deleteTable(tableIndex)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Delete Table
          </button>
        </div>
      ))}
    </div>
  );
};

export default DynamicTable;
