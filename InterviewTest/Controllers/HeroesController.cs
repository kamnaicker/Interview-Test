using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace InterviewTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroesController : ControllerBase
    {
        private Hero[] heroes = new Hero[] {
               new Hero()
               {
                   name= "Hulk",
                   power="Strength from gamma radiation",
                   stats=
                   new List<KeyValuePair<string, int>>()
                   {
                       new KeyValuePair<string, int>( "strength", 5000 ),
                       new KeyValuePair<string, int>( "intelligence", 50),
                       new KeyValuePair<string, int>( "stamina", 2500 )
                   }
               }
            };

        // GET: api/Heroes
        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            return this.heroes;
        }

        // GET: api/Heroes/5
        [HttpGet("{id}", Name = "Get")]
        public Hero Get(int id)
        {
            return this.heroes.FirstOrDefault();
        }

        // POST: api/Heroes
        //refactored Post method to accept a JObject instead of string values
        //changed the return type to IActionResult to allow for more flexibility in the response
        [HttpPost]        
        public IActionResult Post([FromBody] JObject data)
        {
            if (data == null)
            {
                return BadRequest("Invalid JSON data in the request body.");
            }

            // Extract the values from the JSON data
            string action = data["action"]?.ToString();
            string name = data["name"]?.ToString();

            if (string.IsNullOrEmpty(action) || string.IsNullOrEmpty(name))
            {
                return BadRequest("Action or name is not specified.");
            }

            //Assuming that name is unique, find the hero with the specified name
            Hero heroToEvolve = heroes.FirstOrDefault(hero => hero.name == name);

            if (heroToEvolve != null)
            {
                if (action.ToLower() == "evolve")
                {
                    heroToEvolve.evolve(1);
                    for(int i = 0; i<this.heroes.Length;i++)
                    {
                        if (this.heroes[i].name == heroToEvolve.name)
                        {
                            this.heroes[i] = heroToEvolve;
                        }
                    }
                    return Ok(this.heroes); // Return the evolved hero
                }
                else
                {
                    return BadRequest("Action is not valid.");
                }
            }

            // If the hero is not found, return a 404 response.
            return NotFound($"Hero with name '{name}' not found.");
        }

        // PUT: api/Heroes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
