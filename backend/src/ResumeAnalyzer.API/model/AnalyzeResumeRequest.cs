namespace ResumeAnalyzer.API.DTOs
{
	public class AnalyzeResumeRequest
	{
		public string JobDescription { get; set; }
		public string ResumeFile { get; set; }
		public string FileName { get; set; }
	}
}