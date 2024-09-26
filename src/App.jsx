import {  useRef, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import {
  // BryntumButton,
  BryntumSchedulerPro,
  BryntumSchedulerProProjectModel,
  // BryntumTextField,
  // MyRenderingComponent
} from "@bryntum/schedulerpro-react";
// import { Toast } from "@bryntum/schedulerpro";
import { config } from "./config.jsx";

function App() {
  // const textFieldRef = useRef(null);
  const projectRef = useRef(null);
  const projectRef1 = useRef(null);
  // const onToastClick = useCallback(() => {
  //   Toast.show(textFieldRef.current.instance.value);
  // }, []);

  const [resources, setResources] = useState([
    { id: 1, name: "Andrew" },
    { id: 2, name: "Pavithara" },
    { id: 3, name: "Adiv" },
  ]);

  const [resources1, setResources1] = useState([
    { id: 1, name: "Andrew" },
    { id: 2, name: "Pavithara" },
    { id: 3, name: "Adiv" },
  ]);


  const [events, setEvents] = useState( [{
    id: 1,
    resourceId: 1,
    name: 'Birthday Party',
    startDate: '2024-09-26',
    endDate: '2024-10-5',
    preamble: '2 days',
    postamble: '1 day'
  },
  {
    id: 2,
    resourceId: 1,
    name: 'Andrews 2nd Wedding ',
    startDate: '2024-09-27',
    endDate: '2024-10-5'
  },
  {
    id: 3,
    resourceId: 2,
    name: 'My Weeding',
    startDate: '2024-09-27',
    endDate: '2024-10-5'
  }
])

const [dependencies, setDependencies] = useState( [{
  id:1,
  from: 1,
  to: 3
}])

  // const [columns] = useState([
  //   { field: "name", text: "Person", type: "resourceInfo" },
  // ]);

  // const [columns] = useState( [
  //   {field: 'name', text: 'Person', type: 'resourceInfo'},
  //   {field: 'name', text: 'JSX', renderer({value}) {
  //         return <MyRenderingComponent value = {value} />
  //   }}
  //   ]);
  const [columns] = useState( [
      {field: 'name', text: 'Person', type: 'resourceInfo'},
      {field: 'name', text: 'JSX', renderer({value}) {
      return <b>{value}</b>
    }}
    ]);

  // setTimeout(() => {
  //   setResources([
  //     {
  //       id: 1,
  //       name: "Hillary",
  //     },
  //   ]);
  // }, 5000);

  return (
    <>
      {/* <BryntumTextField 
        ref={textFieldRef} 
      />
      <BryntumButton 
        text="Show Toast!" onAction={onToastClick} margin="5em" 
      /> */}
      <BryntumSchedulerProProjectModel 
        ref={projectRef} 
        resources={resources} 
      />
      <BryntumSchedulerPro 
        project={projectRef} 
        columns={columns} 
        {...config}
        events={events}
        dependencies ={dependencies}
      />
      <BryntumSchedulerProProjectModel 
        ref={projectRef1} 
        resources={resources1} 
      />
      <BryntumSchedulerPro 
        project={projectRef} 
        columns={columns} 
        {...config}
        events={events}
      />
      {/* <BryntumGrid
      /> */}
    </>
  );
}

export default App;
