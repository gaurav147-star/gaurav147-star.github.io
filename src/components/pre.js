import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"} className="flex justify-center items-center">
      {/* Simple spinner if image fails */}
      <div className="w-20 h-20 border-4 border-neon-blue border-t-transparent rounded-full animate-spin absolute" />
  </div>;
}

export default Pre;