var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options =>

{
	options.AddPolicy("AngularPolicy", policy =>
	{
		policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
	});
});


builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
