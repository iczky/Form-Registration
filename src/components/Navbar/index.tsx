import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/data");
  }, [navigate]);

  return (
    <>
      <nav className="py-3 flex justify-between px-2 bg-teal-700 font-sans">
        <h1 className="text-white">NETWORK CALLS PRACTICE</h1>
        <div className="flex gap-3 pr-4">
          <h3>Users</h3>
          <h3 onClick={handleClick} className="cursor-pointer">
            Registers
          </h3>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
