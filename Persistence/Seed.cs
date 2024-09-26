using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Machines.Any()) return;
            if (context.Departments.Any()) return;
            
            var machines = new List<Machine>
            {
                new Machine("Serial number 1", "Manufacturer 1", "Model 1"),
                new Machine("Serial number 2", "Manufacturer 2", "Model 2"),
                new Machine("Serial number 3", "Manufacturer 3", "Model 3")
            };

            var departments = new List<Department>
            {
                new Department("Name 1", "Location 1"),
                new Department("Name 2", "Location 2"),
                new Department("Name 3", "Location 3")
            };

            await context.Machines.AddRangeAsync(machines);
            await context.SaveChangesAsync();
            await context.Departments.AddRangeAsync(departments);
            await context.SaveChangesAsync();
        }
    }
}