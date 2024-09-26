using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Machines
{
    // Leveraging Command Query Responsibility Segregation pattern

    public class List
    {
        public class Query : IRequest<List<Machine>> {}

        public class Handler : IRequestHandler<Query, List<Machine>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Machine>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Machines.ToListAsync();
            }
        }
    }
}