import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Test() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/publications">Publications</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Test;
