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
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={toggleModal}
          />
        </div>
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" />
        <div className="inline-block h-5/6 transform overflow-hidden rounded-xl bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:align-middle">
          <div className="bg-white p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 表單欄位 */}
              <div>
                <label htmlFor="itemNo" className="block text-lg text-gray-700">
                  評核項目序號
                </label>
                <input
                  type="text"
                  id="itemNo"
                  value={item.itemNo}
                  className="focus:shadow-outline w-full rounded border p-2 text-gray-700 focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="item" className="block text-lg text-gray-700  ">
                  評核項目
                </label>
                <input
                  type="text"
                  id="item"
                  value={item.item}
                  className="focus:shadow-outline w-full rounded border p-2 text-gray-700 focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="standardNo"
                  className="block text-lg text-gray-700  "
                >
                  評核標準序號
                </label>
                <input
                  type="text"
                  id="standardNo"
                  value={item.standardNo}
                  className="focus:shadow-outline w-full rounded border p-2 text-gray-700 focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="standard"
                  className="block text-lg text-gray-700  "
                >
                  評核標準
                </label>
                <textarea
                  id="standard"
                  value={item.standard}
                  className="focus:shadow-outline h-48 w-full rounded border p-2 text-gray-700 focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
                  onClick={handleCancel}
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700"
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
