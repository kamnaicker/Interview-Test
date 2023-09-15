using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewTest.Controllers
{
    public class Hero:IHero
    {
        public string name { get; set; }
        public string power { get; set; }
        public List<KeyValuePair<string, int>> stats {get;set;}
        public void evolve(int statIncrease = 5)
        {
            int originalStat;
            int newStat;

            for(int i = 0; i < stats.Count; i++)
            {
                originalStat = stats[i].Value;
                newStat = originalStat + originalStat/2 * statIncrease;
                stats[i] = new KeyValuePair<string, int>(stats[i].Key, newStat);
            }
        }
    }
}
