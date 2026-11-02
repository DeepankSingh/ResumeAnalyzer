using ResumeAnalyzer.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using UglyToad.PdfPig;
using UglyToad.PdfPig.Content;


namespace ResumeAnalyzer.Infrastructure.Services
{
	public class PdfPigResumeTextExtractor: IResumeTextExtractor
	{

		public Task<string> ExtractTextAsync(byte[] fileBytes){

			if (fileBytes == null || fileBytes.Length == 0)
			{
				return Task.FromResult("PDF file cannot be empty.");
			}

			StringBuilder pageText = new StringBuilder();
			using Stream stream = new MemoryStream(fileBytes);
			using PdfDocument document = PdfDocument.Open(stream);
			foreach(var page in document.GetPages()){

				String extractedText = page.Text;
				pageText.AppendLine(extractedText);
			}

			return Task.FromResult(pageText.ToString());
		}
	}
}
