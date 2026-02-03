namespace LoginAuth.Models
{
    public class TokenResponseDto
    {
        public required string AcessToken { get; set; }
        public required string RefreshToken { get; set; }
    }
}
