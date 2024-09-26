using Domain;
using MediatR;
using Persistence;

namespace Application.Machines
{
    // Leveraging Command Query Responsibility Segregation pattern

    public class Details
    {
        public class Query : IRequest<Machine>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Machine>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Machine> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Machines.FindAsync(request.Id);
            }
        }
    }
}