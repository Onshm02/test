import React, {useState, useEffect} from "react";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css";
import { DndProvider, DragSource } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const externalNodeType = 'yourNodeType';
const externalNodeSpec = {
  // This needs to return an object with a property `node` in it.
  // Object rest spread is recommended to avoid side effects of
  // referencing the same object in different trees.
  beginDrag: componentProps => ({ node: { ...componentProps.node } }),
};
const externalNodeCollect = (connect /* , monitor */) => ({
  connectDragSource: connect.dragSource(),
  // Add props via react-dnd APIs to enable more visual
  // customization of your component
  // isDragging: monitor.isDragging(),
  // didDrop: monitor.didDrop(),
});

export default function Grid(props) {
  const [treeData, setTreeData] = useState([
    { title: "Player 1",subtitle: 'December 18, 2020', expanded: true, children: [{ title: "Player 2", subtitle: 'December 18, 2020' }, { title: "Player 3", subtitle: 'December 18, 2020' }, { title: "Player 4", subtitle: 'December 18, 2020' }, { title: "Player 5", subtitle: 'December 18, 2020' }, { title: "Coach 1", subtitle: 'December 18, 2020' }, { title: "Coach 2", subtitle: 'December 18, 2020' }] }
  ]);

  useEffect(() => {
    if(props.playerData){
        console.log('props.playerData', props.playerData)
    }
  }, [props])


  const onChange =(treeData) => {
    setTreeData(treeData);
  }

  return (
    <DndProvider backend={HTML5Backend}>
    <div style={{ height: 500, width: '100%' }}>
      <SortableTree 
        onChange={onChange} 
        treeData={treeData} 
        dndType={externalNodeType}
      />
    </div>
    </DndProvider>
  );
}