namespace LoginAuth.Models
{
    public class UserDocumentDto
    {
        public string DocumentName { get; set; }=string.Empty;
        public DateTime? Date { get; set; }
        public bool SoftCopy { get; set; }
        public bool HardCopy { get; set; }
    }
}
