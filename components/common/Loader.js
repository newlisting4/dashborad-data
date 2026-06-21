import React from "react";

function Loader({ isLoading, children }) {
  const loader = (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Outer circle */}
      <div 
        className="absolute w-24 h-24 border-4 rounded-full animate-spin" 
        style={{
          borderColor: "#7A80B4 transparent transparent transparent",
          animationDuration: "1.2s"
        }}
      ></div>
      {/* Middle circle */}
      <div 
        className="absolute w-16 h-16 border-4 rounded-full animate-spin" 
        style={{
          borderColor: "transparent transparent #7A80B4 transparent",
          animationDuration: "1.5s",
          animationDirection: "reverse"
        }}
      ></div>
      {/* Inner circle */}
      <div 
        className="absolute w-8 h-8 border-4 rounded-full animate-spin" 
        style={{
          borderColor: "#7A80B4 transparent transparent transparent",
          animationDuration: "0.8s"
        }}
      ></div>
    </div>
  );

  return (
    <>
      {isLoading && (
        <div className="absolute flex justify-center items-center h-[calc(100vh-100px)] inset-0">
          {loader}
        </div>
      )}

      {!isLoading && <>{children}</>}
    </>
  );
}

export default Loader;

