using Microsoft.AspNetCore.Mvc;

namespace ResumeAnalyzer.API.Controller
{

	[ApiController]
	[Route("api/[controller]")]
	public class ResumeAnalyzerController : ControllerBase
	{
		[HttpGet("test")]
		public async Task<IActionResult> UploadPdf()
		{
			return Ok(new
			{
				message = "Resume Analyzer API is running."
			});
		}
	}
}
