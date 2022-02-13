using find_your_language.Models;

namespace find_your_language.Helpers
{
    public interface ICsvProccesor
    {

        public Result Reader(string path);


    }
}
