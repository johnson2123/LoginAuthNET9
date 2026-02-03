using LoginAuth.Entities;
using Microsoft.EntityFrameworkCore;

namespace LoginAuth.Data
{
    public class UserDbContext(DbContextOptions<UserDbContext> options): DbContext(options)
    {
        public DbSet<User> Users { get; set; }

    }
}
