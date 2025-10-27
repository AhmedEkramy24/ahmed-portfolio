import React from "react";
import Logo from "./Logo";
import Links from "./Links";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between p-3">
          <Logo />
          <Links />
        </div>
      </nav>
    </>
  );
}
