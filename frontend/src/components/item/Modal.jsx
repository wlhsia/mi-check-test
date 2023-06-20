import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

const Modal = ({
  isOpen,
  toggleModal,
  isNew,
  item,
  setItem,
  createItem,
  updateItem,
  getItems,
}) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (isNew) {
      await createItem();
    } else {
      await updateItem();
    }
    await getItems();
    await toggleModal();
  };
  const handleCancel = (e) => {
    e.preventDefault();
    toggleModal();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={toggleModal}
          />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
        <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full h-5/6">
          <div className="bg-white p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 表單欄位 */}
              <div>
                <label htmlFor="itemNo" className="block text-gray-700 text-lg">
                  評核項目序號
                </label>
                <input
                  type="text"
                  id="itemNo"
                  value={item.itemNo}
                  className="border rounded w-full p-2 text-gray-700 focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="item" className="block text-gray-700 text-lg  ">
                  評核項目
                </label>
                <input
                  type="text"
                  id="item"
                  value={item.item}
                  className="border rounded w-full p-2 text-gray-700 focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="standardNo"
                  className="block text-gray-700 text-lg  "
                >
                  評核標準序號
                </label>
                <input
                  type="text"
                  id="standardNo"
                  value={item.standardNo}
                  className="border rounded w-full p-2 text-gray-700 focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="standard"
                  className="block text-gray-700 text-lg  "
                >
                  評核標準
                </label>
                <textarea
                  id="standard"
                  value={item.standard}
                  className="border rounded w-full h-48 p-2 text-gray-700 focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                  onClick={handleCancel}
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
                >
                  {isNew ? "新增" : "編輯"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  isNew: PropTypes.bool,
  item: PropTypes.object,
  setItem: PropTypes.func,
  createItem: PropTypes.func,
  updateItem: PropTypes.func,
  getItems: PropTypes.func,
};

export default Modal;
