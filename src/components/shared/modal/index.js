const Modal = ({ data }) => {
  
  const{
    setIsOpened,
    isOpened,
    title,
    children,
    close
    }=data

  
  const handleClose = () => setIsOpened(false);
  
  return (
    <>
      {isOpened && (
        <div className="fixed inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gray-500 bg-opacity-75">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4">
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md">
              <div className="flex flex-col p-6 text-black">
                <h2 className="mb-8 text-xl font-bold leading-tight">{title}</h2>
                {children}
                <button onClick={handleClose} className="self-end px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                  {close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;