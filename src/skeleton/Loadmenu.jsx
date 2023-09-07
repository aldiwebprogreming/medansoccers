import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadmenu() {
  return (
    <div className="card">
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
        <Skeleton count={3} height={"50px"} />
      </SkeletonTheme>
    </div>
  );
}
