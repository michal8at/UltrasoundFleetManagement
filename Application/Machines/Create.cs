
using Domain;
using MediatR;
using Persistence;

namespace Application.Machines
{
    // Leveraging Command Query Responsibility Segregation pattern

    public class Create
    {
        public class Command : IRequest
        {
            public Machine Machine { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Machines.Add(request.Machine);

                await _context.SaveChangesAsync();
            }
        }
    }
}