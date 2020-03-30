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
                new Employee{FirstName="Carson",LastName="Alexander",JobTitle="CEO",Age=DateTime.Parse("1970-7-10"),StartDate=DateTime.Parse("2005-09-01"),EndDate=DateTime.Parse("2018-06-15")},
                new Employee{FirstName="Meredith",LastName="Alonso",JobTitle="CFO",Age=DateTime.Parse("1974-3-01"),StartDate=DateTime.Parse("2002-09-01"), EndDate=DateTime.Parse("2019-03-30")},
                new Employee{FirstName="Laurie",LastName="Thomas",JobTitle="COO",Age=DateTime.Parse("1980-8-21"),StartDate=DateTime.Parse("2004-10-15"),EndDate=DateTime.Parse("2009-07-10")},
                new Employee{FirstName="Kamil",LastName="Bates",JobTitle="Vice President",Age=DateTime.Parse("1982-2-17"),StartDate=DateTime.Parse("2006-6-12"),EndDate=DateTime.Parse("2016-04-01")},
                new Employee{FirstName="Tyson",LastName="Feeney",JobTitle="Manager",Age=DateTime.Parse("1980-6-01"),StartDate=DateTime.Parse("2007-09-01"),EndDate=DateTime.Parse("2012-12-30")},
                new Employee{FirstName="Ruari",LastName="Ortega",JobTitle="Project Lead",Age=DateTime.Parse("1986-8-8"),StartDate=DateTime.Parse("2010-4-10"),EndDate=DateTime.Parse("2017-2-1")},
                new Employee{FirstName="Gia",LastName="Stokes",JobTitle="Developer",Age=DateTime.Parse("1979-3-28"),StartDate=DateTime.Parse("2011-06-20"),EndDate=DateTime.Parse("2018-06-15")},
                new Employee{FirstName="Ariel",LastName="Mclellan",JobTitle="Developer",Age=DateTime.Parse("1988-9-30"),StartDate=DateTime.Parse("2013-1-27"),EndDate=DateTime.Parse("2019-03-10")},
                new Employee{FirstName="Woody",LastName="O'Gallagher",JobTitle="Developer",Age=DateTime.Parse("1990-11-27"),StartDate=DateTime.Parse("2013-01-20"),EndDate=DateTime.Parse("2016-03-22")},
                new Employee{FirstName="Kirsten",LastName="Farley",JobTitle="Intern",Age=DateTime.Parse("1998-2-15"),StartDate=DateTime.Parse("2016-09-01"),EndDate=DateTime.Parse("2017-06-15")},
                new Employee{FirstName="Elyas",LastName="Pickett",JobTitle="Receptionist",Age=DateTime.Parse("1995-7-28"),StartDate=DateTime.Parse("2010-5-12"),EndDate=DateTime.Parse("2018-2-10")},
                new Employee{FirstName="Fatima",LastName="Juarez",JobTitle="Office Manager",Age=DateTime.Parse("1993-9-6"),StartDate=DateTime.Parse("2015-6-11"),EndDate=DateTime.Parse("2019-06-15")},
            };
            foreach (Employee e in employees)
            {
                context.Employee.Add(e);
            }
            context.SaveChanges();
        }
    }
}
