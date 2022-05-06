using System.Text.Json.Serialization;

namespace mpt_group_site_back.Data.Models
{
    public class Art
    {
        public int Id { get; set; }

        [JsonIgnore]
        public int PhotoId { get; set; }
        public Photo Photo { get; set; } = null!;
    }
}
