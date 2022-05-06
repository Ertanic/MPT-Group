using mpt_group_site_back.Data.Contexts;

var builder = WebApplication.CreateBuilder(args);

var DbFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Data/Files/Databases/ApplicationData.db");
builder.Services.AddSqlite<ApplicationContext>($"Data Source={DbFilePath}");
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    });

builder.Services.AddSpaStaticFiles(spa => spa.RootPath = @"front\dist");

var app = builder.Build();

app.UseCors(builder => builder.AllowAnyOrigin());

app.UseRouting();
app.UseEndpoints(endpoints => endpoints.MapControllers());

app.UseStaticFiles();
app.UseSpaStaticFiles();
app.UseSpa(spa =>
{
    spa.Options.SourcePath = @"front\";
});

app.Run();