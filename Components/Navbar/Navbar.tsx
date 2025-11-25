import React from "react";
import Image from "next/image";

function Navbar() {
    return (
        <div 
            className="w-full py-2 px-8 items-center justify-between bg-white"
            style={{ direction: "rtl" }}
        >
            <div className="w-[200px] h-auto">
                <Image
                  width={100}
                  height={100}
                  src="/images/home/logo.svg"
                  alt="logo"
                  className="w-full h-full" 
                />
            </div>
        </div>
    );
}

export default Navbar;