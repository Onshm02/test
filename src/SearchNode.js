import React, { useState } from "react";
import { useStore, useZoomPanHelper } from "react-flow-renderer";
export default () => {
  const store = useStore();
  const { zoomIn, zoomOut, setCenter } = useZoomPanHelper();
  const [name, setName] = useState(null);
  const focusNode = () => {
    const { nodes } = store.getState();
    if (nodes.length && name) {
      const node = nodes.filter((els) => els.data.label.props.name === name);

      //const node = nodes[0];
      if (node.length) {
        const x = node[0].__rf.position.x + node[0].__rf.width / 2;
        const y = node[0].__rf.position.y + node[0].__rf.height / 2;
        const zoom = 1;
        setCenter(x, y, zoom);
      }
    }
  };
  return (
    <aside>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={focusNode}>Focus</button>
      </div>
    </aside>
  );
};
