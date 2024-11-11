import React from "react";

export default function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary">
      <div className="h-[300px]">
        <dotlottie-player
          src="https://lottie.host/e5fe918c-f2aa-4cb6-a2be-0bb9719dd295/Y3m8atpe27.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
}
