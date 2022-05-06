using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

namespace mpt_group_site_back.Data.Models
{
    [Index(nameof(Path), IsUnique = true)]
    public class Photo
    {
        public int Id { get; set; }
        public string Path { get; set; } = null!;

        [JsonIgnore]
        public List<Student> Students { get; set; } = new();
        [JsonIgnore]
        public List<Teacher> Teachers { get; set; } = new();
    }
}
