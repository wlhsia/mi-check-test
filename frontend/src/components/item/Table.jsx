import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-300">
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th
              key={key}
              className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
            >
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, index) => (
              <td
                key={index}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
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
