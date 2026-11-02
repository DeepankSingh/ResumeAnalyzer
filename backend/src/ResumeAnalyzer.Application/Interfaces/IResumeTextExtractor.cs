using System;
using System.Collections.Generic;
using System.Text;

namespace ResumeAnalyzer.Application.Interfaces
{
	public interface IResumeTextExtractor
	{
		Task<string> ExtractTextAsync(byte[] fileBytes);

	}
}
