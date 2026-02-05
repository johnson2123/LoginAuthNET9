using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LoginAuth.Migrations
{
    /// <inheritdoc />
    public partial class changedDateinUserDocument : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserDocumentDto");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "UsersDocuments",
                type: "date",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "UsersDocuments",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "date",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "UserDocumentDto",
                columns: table => new
                {
                    Date = table.Column<DateTime>(type: "date", nullable: true),
                    DocumentName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HardCopy = table.Column<bool>(type: "bit", nullable: false),
                    SoftCopy = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                });
        }
    }
}
