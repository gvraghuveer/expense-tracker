import React from "react";
// import CARD_2 from "../../assets/imgs/card2.jpg";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        {/* 🔮 Soft Gradient Waves */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 via-purple-300/10 to-transparent animate-[waveFlow_20s_ease-in-out_infinite]" />

        {/* 🌀 Glowing Rupee Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-[14px] border-orange-500/70 rounded-full animate-[spin_12s_linear_infinite] flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.3)]">
          <span className="text-5xl font-extrabold text-orange-500 animate-[pulse_3s_ease-in-out_infinite]">
            ₹
          </span>
        </div>

        {/* 🟥 Floating Shapes */}
        <div className="w-40 h-40 rounded-[40px] bg-red-400/70 absolute top-10 left-10 animate-[floatRotate_8s_ease-in-out_infinite] shadow-xl shadow-red-400/20" />
        <div className="w-32 h-32 rounded-[32px] bg-red-300/60 absolute bottom-20 right-16 animate-[float_6s_ease-in-out_infinite] shadow-lg shadow-red-300/20" />

        {/* 💳 Content */}
        <div className="grid grid-cols-1 z-20 relative">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="4,30,000"
            color="bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10 drop-shadow-2xl">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">₹{value}</span>
      </div>
    </div>
  );
};
