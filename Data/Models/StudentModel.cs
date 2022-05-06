using System.Text.Json.Serialization;

namespace mpt_group_site_back.Data.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string LastName { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string? MiddleName { get; set; }
        public int Age { get; set; }
        public string LikedFood { get; set; } = null!;

        [JsonIgnore]
        public int? PhotoId { get; set; }
        public Photo Photo { get; set; } = null!;

        [JsonIgnore]
        public int LikedSubjectId { get; set; }
        //[JsonIgnore]
        public Subject LikedSubject { get; set; } = null!;

        [JsonIgnore]
        public int LikedTeacherId { get; set; }
        //[JsonIgnore]
        public Teacher LikedTeacher { get; set; } = null!;

        [JsonIgnore]
        public int FunctionId { get; set; }
        //[JsonIgnore]
        public Function Function { get; set; } = null!;
    }
}
