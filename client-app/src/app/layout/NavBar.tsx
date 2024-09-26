import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
  const { machineStore } = useStore();

  return (
    <Menu inverted>
      <Container>
        <Menu.Item header>Ultrasound Fleet Management</Menu.Item>
        <Menu.Item>Departments</Menu.Item>
        <Menu.Item>Machines</Menu.Item>
        <Menu.Item>
          <Button onClick={() => machineStore.openForm} positive content='Order machine' />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
