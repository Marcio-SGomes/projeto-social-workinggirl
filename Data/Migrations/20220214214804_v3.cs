using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetoEntrega15_02.Data.Migrations
{
    public partial class v3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Anuncios");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Anuncios",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
