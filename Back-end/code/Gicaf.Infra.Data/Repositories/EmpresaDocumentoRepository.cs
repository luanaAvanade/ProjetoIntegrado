using Gicaf.Domain.Entities;
using Gicaf.Domain.Entities.Fornecedores;
using Gicaf.Infra.Data.Context;
using Gicaf.Infra.Data.Mappings;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Gicaf.Infra.Data.Repositories
{
    public class DocumentoEmpresaRepository : RepositoryBase<DocumentoEmpresa>
    {
        public DocumentoEmpresaRepository(AppDbContext db) : base(db)
        {
        }

        public override DocumentoEmpresa Get(long id, object queryDetails)
        {
            var documento = base.Get(id, queryDetails);

            _dbSet.Where(x => x.Id == id).Include(x => x.Arquivo).FirstOrDefault();

            if(documento.Arquivo != null)
            {
            }
            return documento;
        }


        public override DocumentoEmpresa Add(DocumentoEmpresa documentoEmpresa, IDictionary<string, object> input)
        {
            documentoEmpresa.Arquivo.Origem = OrigemArquivo.Gdrive;
            var entry = base.Add(documentoEmpresa, input);
            return entry;
        }
    }
}
