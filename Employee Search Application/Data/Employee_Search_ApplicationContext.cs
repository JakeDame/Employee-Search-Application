using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Employee_Search_Application.Models;

namespace Employee_Search_Application.Data
{
    public class Employee_Search_ApplicationContext : DbContext
    {
        public Employee_Search_ApplicationContext (DbContextOptions<Employee_Search_ApplicationContext> options)
            : base(options)
        {
        }

        public DbSet<Employee_Search_Application.Models.Employee> Employee { get; set; }
    }
}
