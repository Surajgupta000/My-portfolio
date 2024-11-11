import React from "react";
import Tsection from "../../components/Tsection";

export default function Contact() {
  const user = {
    name: "Suraj Kumar",
    age: null,
    gender: "Male",
    email: "sooraj4475@gmail.com",
    mobile: "8651576301",
    country: "INDIA",
  };
  return (
    <div>
      <Tsection title="Say hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary text-sm">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5 text-sm">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]} </span>
            </p>
          ))}
          <p className="text-tertiary text-sm">{"}"}</p>
        </div>
        <div className="h-[350px]">
         

          <dotlottie-player
            src="https://lottie.host/e9be1e18-b3c0-4da3-a5c2-ecb7062b1b9d/2tvvZpAsC1.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}
