import React from "react";
export default () => {
  const onDragStart = (event, nodeType, name) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("name", name);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the left.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "input", "Player 1")}
        draggable
      >
        Player 1
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default", "Player 2")}
        draggable
      >
        Player 2
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default", "Player 3")}
        draggable
      >
        Player 3
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "default", "Coach 1")}
        draggable
      >
        Coach 1
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "default", "Coach 2")}
        draggable
      >
        Coach 2
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "default", "Coach 3")}
        draggable
      >
        Coach 3
      </div>
    </aside>
  );
};
