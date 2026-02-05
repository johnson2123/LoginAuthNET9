using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LoginAuth.Migrations
{
    /// <inheritdoc />
    public partial class ChangedDocumentsToDocumentName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Documents",
                table: "UsersDocuments",
                newName: "DocumentName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DocumentName",
                table: "UsersDocuments",
                newName: "Documents");
        }
    }
}
