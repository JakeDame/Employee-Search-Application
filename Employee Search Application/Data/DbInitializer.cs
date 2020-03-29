using Employee_Search_Application.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee_Search_Application.Data
{
    public class DbInitializer
    {
        public static void Initialize(Employee_Search_ApplicationContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Employee.Any())
            {
                return;   // DB has been seeded
            }

            var employees = new Employee[]
            {
                new Employee{FirstName="Carson",LastName="Alexander",StartDate=DateTime.Parse("2005-09-01")},
                new Employee{FirstName="Meredith",LastName="Alonso",StartDate=DateTime.Parse("2002-09-01")},
            };
            foreach (Employee e in employees)
            {
                context.Employee.Add(e);
            }
            context.SaveChanges();
        }
    }
}
