export interface Machine {
  id: string;
  serialNumber: string;
  manufacturer: string;
  model: string;
  lastMaintenanceDate: string;
  nextMaintenanceDue: string;
  departments: any[];
}
