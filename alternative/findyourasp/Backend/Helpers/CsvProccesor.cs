using find_your_language.Models;

namespace find_your_language.Helpers
{
    internal class CsvProccesor : ICsvProccesor
    {


        public Result Reader(string path)
        {
            var lines = File.ReadAllLines(path).Select(a => { a.Split(';'); return a; });
            List<string[]> output = new List<string[]>();
           foreach(var line in lines)
            {
                string[] filtered = line.Split(",");
                output.Add(filtered);
            }


            return new Result(output);
        }
    }
}
