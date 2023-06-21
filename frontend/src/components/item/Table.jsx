import PropTypes from "prop-types";

const Table = ({
  items,
  setItem,
  getItems,
  deleteItem,
  toggleModal,
  setIsNew,
}) => {
  const handleEditClick = async (item) => {
    setItem(item);
    setIsNew(false);
    toggleModal();
  };
  const handleDeleteClick = async (itemId) => {
    await deleteItem(itemId);
    await getItems();
  };
  return (
    <table className="min-w-full divide-y divide-gray-600">
      <thead className="bg-gray-500">
        <tr>
          <th className="text-md w-1/12 px-6 py-3 text-left font-medium text-gray-100">
            項次
          </th>
          <th className="text-md w-2/12 px-6 py-3 text-left font-medium text-gray-100">
            評核項目序號
          </th>
          <th className="text-md w-1/12 px-6 py-3 text-left font-medium text-gray-100">
            評核項目
          </th>
          <th className="text-md w-2/12 px-6 py-3 text-left font-medium text-gray-100">
            評核標準序號
          </th>
          <th className="text-md w-5/12 px-6 py-3 text-left font-medium text-gray-100">
            評核標準
          </th>
          <th className="text-md w-1/12 px-6 py-3 text-left font-medium text-gray-100">
            編輯
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 bg-white">
        {items.map((item, index) => (
          <tr key={index}>
            <td className="text-md px-6 py-3">{index + 1}</td>
            <td className="text-md whitespace-nowrap px-6 py-3">
              {item.itemNo}
            </td>
            <td className="text-md whitespace-nowrap px-6 py-3">{item.item}</td>
            <td className="text-md whitespace-nowrap px-6 py-3">
              {item.standardNo}
            </td>
            <td className="text-md whitespace-nowrap px-6 py-3">
              {item.standard}
            </td>
            <td className="space-x-2 px-6 py-3">
              <button className="inline" onClick={() => handleEditClick(item)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-500 hover:text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
              <button
                className="inline"
                onClick={() => handleDeleteClick(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-red-600 hover:text-red-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  items: PropTypes.array,
  setItem: PropTypes.func,
  getItems: PropTypes.func,
  deleteItem: PropTypes.func,
  toggleModal: PropTypes.func,
  setIsNew: PropTypes.func,
};

export default Table;
