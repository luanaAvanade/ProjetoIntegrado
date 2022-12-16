using Gicaf.Domain.Entities;
using Gicaf.Domain.Interfaces.Repository;
using Gicaf.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Gicaf.Domain.Entities.Fornecedores;

namespace Gicaf.Infra.Data.Repositories
{
    public class EmpresaRepository : RepositoryBase<Empresa>//, IResultadoRepository
    {
        public EmpresaRepository(AppDbContext db) : base(db)
        {
        }
 
        public override Empresa Add(Empresa obj, IDictionary<string, object> input)
        {
            if(obj.Documentos != null)
            {
                foreach(var documento in obj.Documentos)
                {
                    if(documento?.Arquivo?.Conteudo != null)
                    {
                    }
                }         
            }
             

            return base.Add(obj, input);
        }
    }
}
