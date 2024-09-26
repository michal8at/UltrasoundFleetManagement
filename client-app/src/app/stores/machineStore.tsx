import { makeAutoObservable, runInAction } from "mobx";
import { Machine } from "../models/machine";
import agent from "../api/agent";

export default class MachineStore {
  machines: Machine[] = [];
  selectedMachine: Machine | undefined = undefined;
  editMode = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadMachines = async () => {
    try {
      const machines = await agent.Machines.list();
      console.log("Count of machines: " + machines.length);
      runInAction(() => {
        machines.forEach((machine) => {
          // this is perfectly fine in MobX, unline Redux. MobX creates mutable objects that we can and should mutate directly
          this.machines.push(machine);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  selectMachine = (id: string) => {
    this.selectedMachine = this.machines.find((a) => a.id === id);
  };

  cancelSelectedMachine = () => {
    this.selectedMachine = undefined;
  };

  openForm = (id?: string) => {
    id ? this.selectMachine(id) : this.cancelSelectedMachine();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };
}
