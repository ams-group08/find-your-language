using find_your_language.Helpers;
using find_your_language.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace find_your_language.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TrendsController : ControllerBase
    {

        private ILogger m_Logger;
        private ICsvProccesor m_CsvProccesor;
        private string m_DataFile = Directory.GetCurrentDirectory() + @"\Resources\multiTimeline.csv";
        private string m_DataFile_StackOverflow = Directory.GetCurrentDirectory() + @"\Resources\Date_year_month_sof.csv";

        public TrendsController(ILogger<TrendsController> Logger, ICsvProccesor csvProccesor )
        {
            m_Logger = Logger;
            m_CsvProccesor = csvProccesor;
        }

        // GET: api/<TrendsController>
        [HttpGet("googledata")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public Result Get()
        {
            var result = m_CsvProccesor.Reader(m_DataFile);     
            return result.PreprateForFrontEnd();
        }

        // GET: api/<TrendsController>
        [HttpGet("stackoverflow")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public Result GetStackOverflow()
        {
            var result = m_CsvProccesor.Reader(m_DataFile_StackOverflow);
            return result.PreprateForFrontEnd();
        }


        // GET api/<TrendsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TrendsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TrendsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TrendsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
