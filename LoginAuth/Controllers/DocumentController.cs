using LoginAuth.Data;
using LoginAuth.Entities;
using LoginAuth.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace LoginAuth.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private readonly UserDbContext _context;

        public DocumentController(UserDbContext context)
        {
            _context = context;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitDocuments([FromBody] List<UserDocumentDto> documents)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            
            if (userIdClaim == null)
            {
                return Unauthorized();
            }

            var userId = Guid.Parse(userIdClaim);

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            if (user == null)
            {
                return Unauthorized();
            }


            var userDocuments = documents.Select(d => new UserDocument
            {
                DocumentName = d.DocumentName,
                Date = d.Date,
                SoftCopy = d.SoftCopy,
                HardCopy = d.HardCopy,
                UserId = userId,
                Username = user.Username
            }).ToList();

            _context.UsersDocuments.AddRange(userDocuments);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Documents saved successfully" });
        }
    }
}
