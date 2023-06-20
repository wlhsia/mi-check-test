import React, { useState, useEffect } from "react";
import Drawer from "./project/Drawer";

const ProjectPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="fixed ">
      <button onClick={toggleDrawerOpen}>test</button>
      <Drawer isOpen={isDrawerOpen}></Drawer>
    </div>
  );
};

export default ProjectPage;
