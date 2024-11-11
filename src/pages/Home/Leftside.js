import React from "react";

export default function Leftside() {
  return (
    <div className="fixed left-0 bottom-0 px-10  sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row ">
          <a href="https://www.facebook.com/profile.php?id=100012939960395&mibextid=ZbWKwL">
            <i class="ri-facebook-circle-line text-gray-600 text-2xl "></i>
          </a>
          <a href="mailto:sooraj4475@gmail.com">
            <i class="ri-mail-send-line text-gray-600 text-2xl "></i>
          </a>
          <a href="https://www.instagram.com/invites/contact/?igsh=qfk6j2yco4z5&utm_content=3meu9mr">
            <i class="ri-instagram-line text-gray-600 text-2xl "></i>
          </a>
          <a href="https://www.linkedin.com/in/suraj-kumar-4919a51b3/">
            <i class="ri-linkedin-box-fill text-gray-600 text-2xl "></i>
          </a>
          <a href="https://github.com/Surajgupta000">
            <i class="ri-github-fill text-gray-600 text-2xl "></i>
          </a>
        </div>

        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}
