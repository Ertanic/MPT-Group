#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mpt_group_site_back.Data.Contexts;
using mpt_group_site_back.Data.Models;

namespace mpt_group_site_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtsController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public ArtsController(ApplicationContext context)
        {
            _context = context;
        }

        // GET: api/Arts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Art>>> GetArts()
        {
            return await _context.Arts
                .Include(a => a.Photo)
                .ToListAsync();
        }

        // GET: api/Arts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Art>> GetArt(int id)
        {
            var art = await _context.Arts.FindAsync(id);

            if (art == null)
            {
                return NotFound();
            }

            return art;
        }

        // PUT: api/Arts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArt(int id, Art art)
        {
            if (id != art.Id)
            {
                return BadRequest();
            }

            _context.Entry(art).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Arts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Art>> PostArt(Art art)
        {
            _context.Arts.Add(art);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArt", new { id = art.Id }, art);
        }

        // DELETE: api/Arts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArt(int id)
        {
            var art = await _context.Arts.FindAsync(id);
            if (art == null)
            {
                return NotFound();
            }

            _context.Arts.Remove(art);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtExists(int id)
        {
            return _context.Arts.Any(e => e.Id == id);
        }
    }
}
