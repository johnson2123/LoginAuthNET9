using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LoginAuth.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDocumentDateColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserDocumentDto",
                columns: table => new
                {
                    DocumentName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Date = table.Column<DateTime>(type: "date", nullable: true),
                    SoftCopy = table.Column<bool>(type: "bit", nullable: false),
                    HardCopy = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserDocumentDto");
        }
    }
}
