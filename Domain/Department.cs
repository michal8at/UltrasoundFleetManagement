namespace Domain
{
    public class Department
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public string Location { get; private set; }

        public Department(string name, string location)
        {
            Id = new Guid();
            Name = name;
            Location = location;
        }
    }
}