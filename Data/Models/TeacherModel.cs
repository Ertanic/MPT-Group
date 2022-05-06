using System.Text.Json.Serialization;

namespace mpt_group_site_back.Data.Models
{
    public class Teacher
    {
        public int Id { get; set; }
        public string LastName { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string? MiddleName { get; set; } = null!;

        public int? PhotoId { get; set; }
        public Photo Photo { get; set; } = null!;

        [JsonIgnore]
        public List<Subject> Subjects { get; set; } = new();
    }
}
