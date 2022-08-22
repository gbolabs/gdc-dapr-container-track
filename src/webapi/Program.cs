using webapi.services;

var builder = WebApplication.CreateBuilder(args);
const string MyAllowSpecificOrigins = "_mySpecificCorsRules";

// Add services to the container.
builder.Services.AddSingleton<IWeatherForecastService, WeatherForecastService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:4200");
                          builder.WithOrigins("http://127.0.0.1:4200");
                      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();

app.MapGet("/", () => "Hello CORS!").RequireCors(MyAllowSpecificOrigins).Produces(200, contentType: "application/json");
app.MapGet("/weatherforecast/today", (IWeatherForecastService weatherForecastService) =>
{
    return weatherForecastService.Generate().First();
}).RequireCors(MyAllowSpecificOrigins);

// HERE

app.Run();