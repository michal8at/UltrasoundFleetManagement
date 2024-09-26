import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityList() {
  const { machineStore } = useStore();
  const { machines, selectMachine } = machineStore;

  return (
    <Segment>
      <Item.Group divided>
        {machines.map((machine) => (
          <Item key={machine.id}>
            <Item.Content>
              <Item.Header as='a'>{machine.model}</Item.Header>
              <Item>{machine.departments}</Item>
              <Item>{machine.departments}</Item>

              <Item.Extra>
                <Button onClick={() => selectMachine(machine.id)} floated='right' content='View' color='blue' />
                <Label basic content={machine.serialNumber} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
});
