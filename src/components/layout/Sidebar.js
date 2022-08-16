export default function Sidebar({ show, toggleSidebar }) {
  return (
    show && (
      <div>
        <div
          className="fixed z-20 bg-black/40 h-full w-full"
          onClick={toggleSidebar}
        ></div>
        <div className="bg-[#fafafa] overflow-y-scroll z-30 fixed transition duration-300 w-[300px] opacity-100 h-full flex-col px-1 pt-8">
          <div className="border-b bg-indigo-100 hover:bg-indigo-200 mb-[2px]">
              <div className="uppercase font-bold py-2 px-4 cursor-pointer flex items-center gap-4">
                <div>Stats</div>
              </div>
          </div>
          <div className="border-b bg-indigo-100 hover:bg-indigo-200">
              <div className="uppercase font-bold py-2 px-4 cursor-pointer flex items-center gap-4">
                <div>Board</div>
              </div>
          </div>
        </div>
      </div>
    )
  );
}
