using Microsoft.EntityFrameworkCore;
using TrabalhoWebDicasAmbientais.Model;

namespace TrabalhoWebDicasAmbientais.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Dica>? Dicas { get; set; }
    }
}