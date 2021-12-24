namespace find_your_language.Models
{
    public class Result
    {
        private IEnumerable<string[]> m_Results;

        public IEnumerable<string[]> Results { get => m_Results; set => m_Results = value; }
        public Result(IEnumerable<string[]> results)
        {
            m_Results = results;

        }

        public Result PreprateForFrontEnd()
        {
            List<string[]> m_FrontEndResult = new();
            var index = 0;
            foreach(string[] res in m_Results)
            {
                if(index != 0)
                {
                    double t = Convert.ToDouble(res[0]);
                    res[0] = String.Format("{0:.00}", t);
               
                }
                m_FrontEndResult.Add(res);
                index++;
            }
            return new Result(m_FrontEndResult);

        }

    }
}
