using Gicaf.Domain.Entities;
using Gicaf.Domain.Interfaces.Repository;
using Gicaf.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Gicaf.Infra.Data.Repositories
{
    public class ArquivoRepository: RepositoryBase<Arquivo>, IArquivoRepository
    {
        public ArquivoRepository(AppDbContext db) : base(db)
        {
        }

        public override Arquivo Get(long id, object queryDetails)
        {
            var arquivo = base.Get(id, queryDetails);
            if (arquivo.Origem == OrigemArquivo.Gdrive && arquivo.CodigoExterno != null)
            {
            };
            return arquivo;
        }
    }
}
