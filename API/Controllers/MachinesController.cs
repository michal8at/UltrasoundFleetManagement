using Application.Machines;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MachinesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Machine>>> GetMachines()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Machine>> GetMachine(Guid id)
        {
            return await Mediator.Send(new Details.Query {Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Machine machine)
        {
            await Mediator.Send(new Create.Command { Machine = machine });
            return Ok();
        }
    }
}
