namespace LoginAuth.Entities
{
    public class UserDocument
    {
        public int Id { get; set; }
        public string DocumentName { get; set; }
        public DateTime? Date { get; set; }
        public bool SoftCopy { get; set; }
        public bool HardCopy { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; } = null!;
        public string Username { get; set; } = string.Empty;
    }
}
