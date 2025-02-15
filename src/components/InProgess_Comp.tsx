
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkInProgress = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm"
          >
            <div onClick={()=>{
                navigate("/")
            }} className="flex justify-end">
              <XCircle
                className="w-6 h-6 text-gray-600 cursor-pointer hover:text-red-500"
              />
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Work in Progress 🚀
            </h2>
            <p className="text-gray-600 mt-2">
              This project is currently under development. Stay tuned for updates!
            </p>
            <button onClick={()=>{
                navigate("/")
            }}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Got it!
            </button>
          </motion.div>
        </div>
    </div>
  );
};

export default WorkInProgress;
