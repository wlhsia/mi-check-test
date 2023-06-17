import React from "react";

const Table = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-800">
      <thead className="bg-gray-500">
        <tr>
          <th className="px-6 py-3 w-24 text-left text-md font-medium text-gray-100">
            項次
          </th>
          <th className="px-6 py-3 w-36 text-left text-md font-medium text-gray-100">
            評核項目序號
          </th>
          <th className="px-6 py-3 w-72 text-left text-md font-medium text-gray-100">
            評核項目
          </th>
          <th className="px-6 py-3 w-36 text-left text-md font-medium text-gray-100">
            評核標準序號
          </th>
          <th className="px-6 py-3 w-auto text-left text-md font-medium text-gray-100">
            評核標準
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-800">
        {data.map((item, index) => (
          <tr key={index}>
            <td className="px-6 py-3 text-md">{index + 1}</td>
            {Object.values(item).map((value, index) => (
              <td key={index} className="px-6 py-3 whitespace-nowrap text-md">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
