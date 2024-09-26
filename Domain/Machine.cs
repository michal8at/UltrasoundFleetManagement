namespace Domain
{
    public class Machine
    {
        public Guid Id { get; private set; }
        public string SerialNumber { get; private set; }
        public string Manufacturer { get; private set; }
        public string Model { get; private set; }
        public DateTime LastMaintenanceDate { get; private set; }
        public DateTime NextMaintenanceDue { get; private set; }
        
        private readonly List<Department> _departments = new List<Department>();
        public IReadOnlyCollection<Department> Departments => _departments.AsReadOnly();

        public Machine(string serialNumber, string manufacturer, string model)
        {
            Id = new Guid();
            SerialNumber = serialNumber;
            Manufacturer = manufacturer;
            Model = model;
        }
    }
}