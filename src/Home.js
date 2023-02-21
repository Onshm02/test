import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  isNode,
  useStore
} from "react-flow-renderer";

import LeftSidebar from "./LeftSidebar.js";
import RightSidebar from "./RighSideBar1";
import "./Home.css";
import defaultData from "./KonnectionData1.json";
import ContactDetails from "./ContactDetails.js";
import ContactInstance from "./ContactInstance.js";
import TreeView from "./TreeView";
import Button from "@material-ui/core/Button";
import "date-fns";
//import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  DateTimePicker
} from "@material-ui/pickers";

import AppBar from "./AppBar.js";
import ListIcon from "@material-ui/icons/List";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Filters from "./Filters.js";
import Paper from "@material-ui/core/Paper";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";

import AddIcon from "@material-ui/icons/Add";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GridData from "./Grid.js";
import CustomNode from "./CustomNode";
import Export from "./Export.js";
import Fab from "@material-ui/core/Fab";

import dagre from "dagre";

import SearchNode from './SearchNode';

const nodeTypes = {
  special: CustomNode
};

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  FabMargin: {
    bottom: 20,
    right: 10,
    position: "absolute",
    margin: theme.spacing(1),
    zIndex: 10000
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  navigation: {
    width: 60
  }
}));

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Player 1" },
    position: { x: 250, y: 5 }
  }
];
const style = {
  width: "160px",
  height: "75px",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  justifyContent: "center"
};

const flowKey = "example-flow";
let id = 0;
const getId = () => `dndnode_${id++}`;
const connectionLineStyle = { stroke: "blue" };

const Home = (props) => {
  const classes = useStyles();
  const reactFlowWrapper = useRef(null);
  const [rfInstance, setRfInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);
  const [openContectInstance, setOpenContectInstance] = useState(false);
  const [currentPlayer, setcurrentPlayer] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openVideoList, setOpenVideoList] = React.useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [addPersonInTree, setAddPersonInTree] = useState(false);

  const getNodeId = () => `randomnode_${+new Date()}`;

  const onConnect = (params) => {
    const date = new Date().toDateString();
    params.label = date;
    setElements((els) => addEdge(params, els));
  };

  useEffect(() => {
    var elementsList = [];

    if (props.resultCount && elements.length === 0) {
      var tempElements = defaultData.elements;
      tempElements.map((element, index) => {
        if (element.source && element.target) {
          elementsList.push(element);
          //console.log(index, element);
        } else {
          var data =
            element.data && element.data.label.props
              ? element.data.label.props
              : {};
          const newNode = {};
          newNode.id = element.id;
          newNode.type = element.type;
          newNode.root = element.root;
          newNode.style = element.style;
          newNode.position = element.position;
          newNode.animated = true;
          newNode.data = {};
          newNode.data.label = CustomNewNode(data.id, data.name, data.image);
          elementsList.push(newNode);
        }
      });
      //console.log("elementsList", elementsList);
      setElements((es) => es.concat(elementsList));
      //setElements(elementsList);
    }
  }, [rfInstance]);

  const removeNode = (id) => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      const selectedNode = flow.elements.filter((els) => els.id === id);
      onElementsRemove(selectedNode);
    }

    if (elements) {
      const selectedNode = elements.filter((els) => els.id === id);
      onElementsRemove(selectedNode);
    }
  };

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) => setRfInstance(_reactFlowInstance);

  const onSave = () => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      console.log("Result::", JSON.stringify(flow));
      localStorage.setItem(JSON.stringify(flowKey), flow);
    }
    if (elements) {
      console.log("elements::", JSON.stringify(elements));
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const CustomNewNode = (id, name, image) => {
    return (
      <CustomNode
        id={id}
        name={name}
        image={image}
        onElementClick={onElementClick}
        removeNode={removeNode}
        openContactDetails={openContactDetails}
      />
    );
  };

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const name = event.dataTransfer.getData("name");
    const image = event.dataTransfer.getData("image");
    const position = rfInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    });

    const id = getId();

    const newNode = {
      id: id,
      type,
      style,
      position,
      data: { label: CustomNewNode(id, name, image) }
    };

    if (type) setElements((es) => es.concat(newNode));
  };

  const onElementClick = (event, element) => {
    console.log("element", element);
    if (element.source && element.target) {
      setcurrentPlayer(element);
      setOpenContectInstance(true);
    }
    // if (element && element.data) {
    //   setOpenDetails(true);
    // } else {
    //   setOpenContectInstance(true);
    // }
  };

  const openContactDetails = (id) => {
    if (id && rfInstance) {
      const flow = rfInstance.toObject();
      const selectedNode = flow.elements.filter((els) => els.id === id);
      setcurrentPlayer(selectedNode[0]);
      setOpenDetails(true);
    }
    //setcurrentPlayer(element);
    //if (element && element.data) {

    //} else {
    //   setOpenContectInstance(true);
    //}
  };

  const onClose = (value) => {
    setOpenDetails(false);
    setOpenContectInstance(false);
    if (value) {
      currentPlayer.data.label = value;
      setElements((es) => es.concat(currentPlayer));
    }
  };

  const onAdd = () => {
    if (tabValue === 0) {
      const id = getNodeId();
      const tempNode = {
        id: id,
        data: { label: CustomNewNode(id, "New Member", "") },
        style,
        position: {
          x: Math.random() * window.innerWidth - 100,
          y: Math.random() * window.innerHeight
        }
      };
      setElements((els) => els.concat(tempNode));
    } else {
      setAddPersonInTree(true);
    }
  };

  const resetStatus = () => {
    setAddPersonInTree(false);
  };

  const handleDrawerOpen = () => {
    setOpenVideoList(true);
  };

  const handleDrawerClose = () => {
    setOpenVideoList(false);
  };

  const deleteInstance = () => {
    var instance = [];
    instance.push(currentPlayer);
    console.log("delete instance", instance);
    onElementsRemove(instance);
  };

  const onLayout = useCallback(
    (direction) => {
      const layoutedElements = getLayoutedElements(elements, direction);
      setElements(layoutedElements);
    },
    [elements]
  );

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const getLayoutedElements = (elements, direction = "TB") => {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });
    elements.forEach((el) => {
      if (isNode(el)) {
        dagreGraph.setNode(el.id, { width: 200, height: 350 });
      } else {
        dagreGraph.setEdge(el.source, el.target);
      }
    });
    dagre.layout(dagreGraph);
    return elements.map((el) => {
      if (isNode(el)) {
        const nodeWithPosition = dagreGraph.node(el.id);
        el.targetPosition = isHorizontal ? "left" : "top";
        el.sourcePosition = isHorizontal ? "right" : "bottom";
        // unfortunately we need this little hack to pass a slighltiy different position
        // in order to notify react flow about the change
        el.position = {
          x: nodeWithPosition.x + Math.random() / 1000,
          y: nodeWithPosition.y
        };
      }
      return el;
    });
  };

  return (
    <div>
      <AppBar />

      <Paper>
        <div style={{ display: "flex" }}>
          <div style={{ width: "26%", display: "inline" }}>
            <span
              style={{ float: "left", marginTop: "12px", marginLeft: "10px" }}
            >
              Person List
            </span>
            <Button
              variant="contained"
              style={{ float: "right", height: "40px", marginTop: "3px" }}
              color="primary"
              onClick={onAdd}
            >
              <AddIcon className={classes.extendedIcon} />
              Add New
            </Button>
          </div>
          <div style={{ width: "35%", display: "flex" }}>
            <BottomNavigation
              value={tabValue}
              onChange={(event, newValue) => {
                setTabValue(newValue);
              }}
              style={{ height: "50px" }}
              //className={classes.navigation}
            >
              <BottomNavigationAction
                style={{ minWidth: "20px" }}
                icon={<GroupWorkOutlinedIcon />}
              />
              <BottomNavigationAction
                style={{ minWidth: "20px" }}
                icon={<AccountTreeOutlinedIcon />}
              />
            </BottomNavigation>
          </div>
          <div style={{ width: "30%" }}>
            <Filters />
          </div>
          <div style={{ width: "5%", display: "flex" }}>
            <Export />
          </div>
          <div style={{ width: "5%", display: "flex" }}>
            <IconButton
              color="primary"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <VideocamOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </Paper>
      <div style={{ display: "flex" }}>
        <div className="dndflow">
          {tabValue === 0 ? (
            <div style={{ width: "100%", display: "flex" }}>
              <LeftSidebar onAdd={onAdd} />
              <ReactFlowProvider>
                <div
                  id="container"
                  className="reactflow-wrapper"
                  ref={reactFlowWrapper}
                  style={{
                    margin: "1px",
                    //backgroundColor: "#f5f5f5",
                    minHeight: "85vh",
                    width: "100%"
                  }}
                >
                  <ReactFlow
                    elements={elements}
                    onConnect={onConnect}
                    onElementsRemove={onElementsRemove}
                    onLoad={onLoad}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    onElementClick={onElementClick}
                    //connectionLineStyle={connectionLineStyle}
                    //connectionLineType="smoothstep"
                    nodeTypes={nodeTypes}
                  >
                    <Controls />
                  </ReactFlow>
                  <div className="controls">
                  <button onClick={() => onLayout("TB")}>
                    vertical layout
                  </button>
                  <SearchNode />
                  {/* <button onClick={() => onLayout("LR")}>
                    horizontal layout
                  </button> */}
                </div>
                </div>

              </ReactFlowProvider>
            </div>
          ) : (
            <GridData
              openContactDetails={openContactDetails}
              playerData={rfInstance}
              elements={elements}
              addPersonInTree={addPersonInTree}
              resetStatus={resetStatus}
            />
          )}
          <Fab
            style={{ color: "white", backgroundColor: "#c8102e" }}
            aria-label="list"
            className={classes.FabMargin}
            onClick={props.showList}
          >
            <ListIcon />
          </Fab>
        </div>
      </div>

      {/* <div style={{ width: "26%", padding: "5px" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "5px" }}
          onClick={onSave}
        >
          Save Result
        </Button>
      </div> */}

      {openDetails ? (
        <ContactDetails
          currentPlayer={currentPlayer}
          open={open}
          onClose={onClose}
        />
      ) : null}

      {openContectInstance ? (
        <ContactInstance
          currentPlayer={currentPlayer}
          open={open}
          onClose={onClose}
          deleteInstance={deleteInstance}
        />
      ) : null}

      {openVideoList ? (
        <RightSidebar
          CloseVideoList={handleDrawerClose}
          openVideoList={openVideoList}
        />
      ) : null}
    </div>
  );
};
export default Home;
