using Gicaf.Domain.Entities;
using Gicaf.Domain.Entities.Fornecedores;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gicaf.Domain.Interfaces.Repository;
using Newtonsoft.Json;
using Gicaf.Domain.Interfaces;


namespace Gicaf.Domain.Services
{
  public interface IAuthenticatorService
    {
        Task<object> RegisterUserAsync(Usuario usuario);
    }

    public class EmpresaService : ServiceBase<Empresa>
    {
        IAuthenticatorService _authenticatorService;
        public EmpresaService(IServiceProvider serviceProvider, IAuthenticatorService authenticatorService) : base(serviceProvider)
        {
            _authenticatorService = authenticatorService;
        }

        public override Empresa Add(Empresa empresa, IDictionary<string, object> input)
        {
            if(empresa.Usuarios != null)
            {
                var usuario = empresa.Usuarios.FirstOrDefault();
                if (usuario != null && usuario.PassWord != usuario.ConfirmPassWord)
                {
                    throw new Exception("Confirmação de Password inválida!");
                }
                if (usuario != null && usuario.Id == default(long))
                {
                    // Adicionado a perfil de fornecedor para todo novo usuario criado atraves do 
                    // cadastro de empresa
                    usuario.Roles = new List<string>(){"Fornecedor"};
                    _authenticatorService.RegisterUserAsync(usuario);
                }
            }    
            
    
            return base.Add(empresa, input);
            
        }
    

        public override Empresa Update(Empresa empresa, IDictionary<string, object> input)
        {
          
            return base.Update(empresa, input);
        }

       
        
    }

}
