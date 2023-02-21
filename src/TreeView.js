// import React, {useState, useRef, useCallback} from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import ReactFlow, {
//   ReactFlowProvider,
//   addEdge,
//   removeElements,
//   Controls,
//   useZoomPanHelper
// } from "react-flow-renderer";
// import LeftSidebar from "./LeftSidebar.js";


// const useStyles = makeStyles({});
// const style = {
//   width: "160px",
//   height: "75px",
//   display: "flex",
//   alignItems: "center",
//   flexShrink: 0,
//   justifyContent: "center"
// };
// const initialElements = [
//   {
//     id: "1",
//     type: "input",
//     data: { label: "Player 1" },
//     position: { x: 250, y: 5 }
//   }
// ];

// export default function TreeView() {
//   const classes = useStyles();
//   const reactFlowWrapper = useRef(null);
//   const [rfInstance, setRfInstance] = useState(null);
//   const [elements, setElements] = useState([]);
//   const [openDetails, setOpenDetails] = useState(false);
//   const [openContectInstance, setOpenContectInstance] = useState(false);
//   const [currentPlayer, setcurrentPlayer] = React.useState(false);
//   const [open, setOpen] = React.useState(false);
//   const [openVideoList, setOpenVideoList] = React.useState(false);
//   const [tabValue, setTabValue] = useState(0);
//   const flowKey = "example-flow";
//   let id = 0;
//   const getId = () => `dndnode_${id++}`;
  
//   const onConnect = (params) => setElements((els) => addEdge(params, els));
//   const onElementsRemove = (elementsToRemove) =>
//     setElements((els) => removeElements(elementsToRemove, els));

//   const onLoad = (_reactFlowInstance) => setRfInstance(_reactFlowInstance);
//   const getNodeId = () => `randomnode_${+new Date()}`;

//   const onSave = useCallback(() => {
//     if (rfInstance) {
//       const flow = rfInstance.toObject();
//       console.log("Result::", flow);
//       localStorage.setItem(JSON.stringify(flowKey), flow);
//     }
//   }, [rfInstance]);

//   const onDragOver = (event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "move";
//   };
//   const onDrop = (event) => {
//     event.preventDefault();
//     const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
//     const type = event.dataTransfer.getData("application/reactflow");
//     const name = event.dataTransfer.getData("name");
//     const position = rfInstance.project({
//       x: event.clientX - reactFlowBounds.left,
//       y: event.clientY - reactFlowBounds.top
//     });

//     const newNode = {
//       id: getId(),
//       type,
//       style,
//       position,
//       data: { label: `${name}` }
//     };
//     setElements((es) => es.concat(newNode));
//   };

//   const onElementClick = (event, element) => {
//     setcurrentPlayer(element);
//     if (element && element.data) {
//       setOpenDetails(true);
//     } else {
//       setOpenContectInstance(true);
//     }
//   };

//   return (
//     <div style={{ width: "100%", display: "flex" }}>
//       <LeftSidebar onAdd={onAdd} />
//       <ReactFlowProvider>
//         <div
//           id="container"
//           className="reactflow-wrapper"
//           ref={reactFlowWrapper}
//           style={{
//             margin: "1px",
//             backgroundColor: "#f5f5f5",
//             height: "75vh",
//             width: "100%"
//           }}
//         >
//           <ReactFlow
//             elements={elements}
//             onConnect={onConnect}
//             onElementsRemove={onElementsRemove}
//             onLoad={onLoad}
//             onDrop={onDrop}
//             onDragOver={onDragOver}
//             onElementClick={onElementClick}
//           >
//             <Controls />
//           </ReactFlow>
//         </div>
//       </ReactFlowProvider>
//     </div>
//   );
// }
