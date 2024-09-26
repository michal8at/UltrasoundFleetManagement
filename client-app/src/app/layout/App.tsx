import { Fragment, useEffect } from "react";
import { Machine } from "../models/machine";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { Container, Grid, Header, List } from "semantic-ui-react";
import NavBar from "./NavBar";
import MachineDashboard from "../../features/machines/dashboard/MachineDashboard";

// import MachineDashboard from '../../features/machines/dashboard/MachineDashboard';

function App() {
  // const { machineStore } = useStore();

  // // pass machineStore also as dependency
  // useEffect(() => {
  //   machineStore.loadMachines();
  // }, [machineStore]);

  return (
    <>
      <NavBar />
      <Container>
        <MachineDashboard />
        {/* <p>Your hospital got {machineStore.machines.length} Ultrasound machines:</p>
        <List>
          {machineStore.machines.map((machine: Machine) => (
            <List.Item key={machine.id}>{machine.model}</List.Item>
          ))}
        </List> */}
      </Container>
    </>
  );
}

export default observer(App);
