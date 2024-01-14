import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <p class="title">
      <span style={{ "--delay": "0s" }}>Welcome to Taskify</span>
      <span style={{ "--delay": ".5s" }}>List your all tasks here..</span>
      <span style={{ "--delay": "1.5s" }}>Created by Shivaraj K P</span>
      </p>
      <marquee behavior="" direction="">Experience the convenience of managing your tasks with this ReactJS Todo App. Stay organized, stay on top of your goals, and never worry about losing your to-do list again. Your tasks are just a click away!</marquee>
      <h6>Your digital companion for managing tasks efficiently! This intuitive and user-friendly to-do webpage is built using ReactJS, a powerful JavaScript library for building user interfaces.This webpage stores your tasks even after refreshing without backend!!</h6>
    </div>
  );
};

export default About;
