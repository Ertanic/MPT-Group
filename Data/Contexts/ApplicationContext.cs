using Microsoft.EntityFrameworkCore;
using mpt_group_site_back.Data.Models;

namespace mpt_group_site_back.Data.Contexts
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Student> Students { get; set; } = null!;
        public DbSet<Function> Functions { get; set; } = null!;
        public DbSet<Teacher> Teachers { get; set; } = null!;
        public DbSet<Photo> Photos { get; set; } = null!;
        public DbSet<Subject> Subjects { get; set; } = null!;
        public DbSet<Art> Arts { get; set; } = null!;

        string DbFilePath { get; } = null!;

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }
    }
}
