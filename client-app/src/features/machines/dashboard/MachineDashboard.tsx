import { Grid, List } from "semantic-ui-react";
import { Machine } from "../../../app/models/machine";
import { useStore } from "../../../app/stores/store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import MachineList from "./MachineList";

export default observer(function MachineDashboard() {
  const { machineStore } = useStore();
  const { selectedMachine } = machineStore;

  // pass machineStore also as dependency
  useEffect(() => {
    machineStore.loadMachines();
  }, [machineStore]);

  return (
    <Grid>
      <Grid.Column width='10'>
        <p>Your hospital is equipped by {machineStore.machines.length} Ultrasound machines:</p>
        <MachineList />
      </Grid.Column>

      <Grid.Column width='6'>
        <p>Selected machine:</p>
        {selectedMachine?.model}
      </Grid.Column>
    </Grid>
  );
});
