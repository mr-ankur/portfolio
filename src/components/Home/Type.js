import React from "react";
import Typewriter from "typewriter-effect";

const roles = [
  "Senior Full Stack Engineer",
  "Ruby on Rails Developer",
  "Golang Developer",
  "ReactJS Developer",
];

function Type() {
  return (
    <Typewriter
      options={{
        strings: roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
