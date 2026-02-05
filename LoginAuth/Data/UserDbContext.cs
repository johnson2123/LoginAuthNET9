using LoginAuth.Entities;
using LoginAuth.Models;
using Microsoft.EntityFrameworkCore;

namespace LoginAuth.Data
{
    public class UserDbContext(DbContextOptions<UserDbContext> options): DbContext(options)
    {
        public DbSet<User> Users { get; set; }
        public DbSet<UserDocument> UsersDocuments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserDocument>()
                .HasOne(d => d.User)
                .WithMany(u => u.Documents)
                .HasForeignKey(d => d.UserId);

            modelBuilder.Entity<UserDocument>()
                        .Property(d => d.Date)
                        .HasColumnType("date");
        }


    }
}
