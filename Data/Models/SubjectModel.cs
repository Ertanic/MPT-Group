using System.Text.Json.Serialization;

namespace mpt_group_site_back.Data.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;

        [JsonIgnore]
        public List<Student> Students { get; set; } = new();
        [JsonIgnore]
        public List<Teacher> Teachers { get; set; } = new();
    }
}
