import React, { useState, useEffect } from "react";
import SortableTree, {
  addNodeUnderParent,
  removeNodeAtPath
} from "react-sortable-tree";
import "react-sortable-tree/style.css";

import { DndProvider, DragSource } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import LeftSideBar1 from "./LeftSideBar1";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const externalNodeType = "covidTracing";
const externalNodeSpec = {
  beginDrag(props) {
    console.log("props", props);
    return {
      node: { ...props.node }
    };
  },
  canDrag(props, monitor) {
    return true;
  },
  endDrag(props, monitor) {
    console.log("You dropped .... into " + monitor.getDropResult());
  }
  //beginDrag: (componentProps) => ({ node: { ...componentProps.node } })
};
const externalNodeCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(externalNodeSpec),
  isDragging: monitor.isDragging()
});

// const externalNodeCollect = (connect /* , monitor */) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging()
// });

const YourExternalNodeComponent = DragSource(
  externalNodeType,
  externalNodeSpec,
  externalNodeCollect
)(LeftSideBar1);

export default function Grid(props) {
  const [treeData, setTreeData] = useState([
    {
      title: "Giannis Antetokounmpo",
      subtitle: "December 18, 2020",
      image:
        "https://nbacoaches.com/wp-content/uploads/2020/08/Untitled-design-300x300.png",
      expanded: true,
      children: [
        { title: "Kostas Antetokounmpo", subtitle: "December 18, 2020" },
        {
          title: "Carmelo Anthony",
          subtitle: "December 18, 2020",
          expanded: true,
          children: [
            { title: "Thanasis Antetokounmpo", subtitle: "December 18, 2020" }
          ]
        },
        { title: "Ryan Arcidiacono", subtitle: "December 18, 2020" }
      ]
    }
  ]);
  const [addAsFirstChild, setAddAsFirstChild] = useState(false);

  const getNodeKey = ({ treeIndex }) => treeIndex;

  useEffect(() => {
    if (props.addPersonInTree) {
      addNewNode();
      props.resetStatus();
      //console.log("props.playerData", JSON.stringify(props.playerData));
    }

    if (props.elements) {
      var list = [];
      const playerNodes = props.elements.filter((e) => e.data && e.root === true);

      playerNodes.map(function (element, index) {
        const nodeExist = list.filter(
          (e) => e.id === element.data.label.props.id
        );
        if (nodeExist.length === 0) {
          const player = addPlayer(element.data.label.props.id, props.elements);
          list.push(player);
          setTreeData(list);
        }
        return true;
      });
    }
  }, [props]);

  const addPlayer = (id, sourceData) => {
    const element = sourceData.filter((e) => e.id === id);
    var player = {};

    player.id = id;
    player.title = element[0].data.label.props.name;
    player.subtitle = "";
    player.image = element[0].data.label.props.image;
    player.expanded = true;
    player.children = [];
    const childNodes = sourceData.filter((e) => e.source === player.id);

    childNodes.map(function (child, index) {
      player.children.push(addPlayer(child.target, sourceData));
    });
    return player;
  };

  const onChange = (treeData) => {
    setTreeData(treeData);
  };

  const addNewNode = (rowInfo) => {
    //let { path } = rowInfo;
    const parentKey = rowInfo ? rowInfo.path[rowInfo.path.length - 1] : 0;
    setTreeData(
      addNodeUnderParent({
        treeData: treeData,
        parentKey: parentKey,
        expandParent: true,
        getNodeKey,
        newNode: {
          title: `New Member`
        },
        addAsFirstChild: addAsFirstChild
      }).treeData
    );
  };

  const removeNode = (rowInfo) => {
    let { path } = rowInfo;
    setTreeData(
      removeNodeAtPath({
        treeData: treeData,
        path: path,
        getNodeKey: ({ node: TreeNode, treeIndex: number }) => {
          console.log(number);
          return number;
        }
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ width: "100%", display: "flex" }}>
        <YourExternalNodeComponent />
        <div style={{ height: 500, width: "100%" }}>
          <SortableTree
            onChange={onChange}
            treeData={treeData}
            dndType={externalNodeType}
            generateNodeProps={(rowInfo) => ({
              buttons: [
                <div>
                  <IconButton
                    onClick={(event) => addNewNode(rowInfo)}
                    aria-label="delete"
                    size="small"
                  >
                    <AddIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    onClick={(event) => props.openContactDetails(rowInfo)}
                    aria-label="delete"
                    size="small"
                  >
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    onClick={(event) => removeNode(rowInfo)}
                    aria-label="delete"
                    size="small"
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </div>
              ]
            })}
          />
        </div>
      </div>
    </DndProvider>
  );
}
