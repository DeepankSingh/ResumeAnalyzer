using Microsoft.AspNetCore.Mvc;
using ResumeAnalyzer.API.DTOs;

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


		[HttpPost("analyze")]
		public async Task<IActionResult> AnalyzeResume(AnalyzeResumeRequest req)
		{
			if(req == null)
			{
				return BadRequest("No resume file or JD uploaded.");
			}



			try
			{
				//decoding base64 
				byte[] fileBytes = Convert.FromBase64String(req.ResumeFile);

				return Ok(new
				{
					message = "Resume decoded successfully.",
					resumeFileName = req.FileName,
					fileSizeInBytes = fileBytes.Length,
					jobDescription = req.JobDescription
				});
			}
			catch (FormatException)
			{
				return BadRequest("Invalid Base64 file data.");
			}

		}


	}

	




}
