using find_your_language.Helpers;
using find_your_language.Models;
using Microsoft.AspNetCore.Mvc;


namespace find_your_language.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TrendsController : ControllerBase
    {

        private ICsvProccesor m_CsvProccesor;
        private string m_DataFile = @"multiTimeline.csv";
        private string m_DataFile_StackOverflow = @"Date_year_month_sof.csv";
        private string m_DataFile_Github =  @"github_language_popularity_year_month.csv";
        private string m_DataFile_Reddit = @"final-percentages-reddit.csv";

        public TrendsController( ICsvProccesor csvProccesor)
        {
            m_CsvProccesor = csvProccesor;
        }

        private string GetCSVPath(string filename)
        {
            string exePath = System.Reflection.Assembly.GetExecutingAssembly().Location;
            string directory = System.IO.Path.GetDirectoryName(exePath) ?? throw new ArgumentNullException(nameof(filename));
            return directory + $@"/Resources/{filename}";
        }

        // GET: api/<TrendsController>
        [HttpGet("googledata")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public Result Get()
        {

            var result = m_CsvProccesor.Reader(GetCSVPath(m_DataFile));     
            return result.PreprateForFrontEnd();
        }

        // GET: api/<TrendsController>
        [HttpGet("stackoverflow")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public Result GetStackOverflow()
        {
            var result = m_CsvProccesor.Reader(GetCSVPath(m_DataFile_StackOverflow));
            return result.PreprateForFrontEnd();
        }

        // GET: api/<TrendsController>
        [HttpGet("github")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public Result GetGithub()
        {
            var result = m_CsvProccesor.Reader(GetCSVPath(m_DataFile_Github));
            return result.PreprateForFrontEnd();
        }

        // GET: api/<TrendsController>
        [HttpGet("reddit")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public Result GetReddit()
        {
            var result = m_CsvProccesor.Reader(GetCSVPath(m_DataFile_Reddit));
            return result.PreprateForFrontEnd();
        }
    }
}
