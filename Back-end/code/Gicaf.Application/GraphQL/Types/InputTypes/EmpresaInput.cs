using Gicaf.Domain.Entities.Fornecedores;
using Gicaf.Domain.Entities;
using GraphQL.Types;
using Gicaf.Domain.Entities.Enums;

namespace Gicaf.Application.GraphQL.Types.InputTypes
{
    public class EmpresaCreateInput : BaseInputType<Empresa>
    {
        public EmpresaCreateInput()
        {
            Field(x => x.CNPJ);
            Field(x => x.NomeEmpresa);
            Field(x => x.InscricaoEstadual);
            Field(x => x.InscricaoMunicipal);
            Field(x => x.IsentoIE);
            Field(x => x.OptanteSimplesNacional);
            Field(x => x.DataAbertura);
            Field(x => x.TipoEmpresa);
            Field(x => x.TipoCadastro);
            Field(x => x.Enderecos, false, typeof(ListGraphType<EnderecoCreateInput>));
            Field(x => x.ContatoSolicitante, true, typeof(ContatoCreateInput));
            Field(x => x.ContatosAdicionais, false, typeof(ListGraphType<ContatoCreateInput>));
            Field(x => x.Usuarios, false, typeof(ListGraphType<UsuarioCreateInput>));
            Field(x => x.AtividadeEconomicaPrincipalId, true);
            Field(x => x.OcupacaoPrincipalId, true);
            Field(x => x.DadosPessoaFisica, false, typeof(DadosPessoaFisicaCreateInput));
            Field(x => x.CapitalSocialTotalSociedade, true);
            Field(x => x.DataRegistroSociedade, true);
            Field(x => x.Situacao, true, typeof(EnumerationGraphType<SituacaoFornecedor>));
            Field(x => x.LinkCadastro, true);
        }
    }

    public class EmpresaUpdateInput : BaseInputType<Empresa>
    {
        public EmpresaUpdateInput()
        {
            Field(x => x.CNPJ, true);
            Field(x => x.NomeEmpresa, true);
            Field(x => x.InscricaoEstadual, true);
            Field(x => x.InscricaoMunicipal, true);
            Field(x => x.IsentoIE, true);
            Field(x => x.OptanteSimplesNacional, true);
            Field(x => x.DataAbertura, true);
            Field(x => x.TipoEmpresa, true);
            Field(x => x.TipoCadastro, true);
            Field(x => x.Enderecos, false, typeof(ListGraphType<EnderecoCreateInput>));
            Field(x => x.ContatoSolicitante, false, typeof(ContatoCreateInput));
            Field(x => x.ContatosAdicionais, false, typeof(ListGraphType<ContatoCreateInput>));
            Field(x => x.Usuarios, false, typeof(ListGraphType<UsuarioCreateInput>));
            Field(x => x.AtividadeEconomicaPrincipalId, true);
            Field(x => x.OcupacaoPrincipalId, true);
            Field(x => x.DadosPessoaFisica, true, typeof(DadosPessoaFisicaCreateInput));
            Field(x => x.DadosBancarios, true, typeof(DadosBancariosInput));
            Field(x => x.CapitalSocialTotalSociedade, true);
            Field(x => x.DataRegistroSociedade, true);
            Field(x => x.Situacao, true, typeof(EnumerationGraphType<SituacaoFornecedor>));
            Field(x => x.LinkCadastro, true);
        }
    }

    public class DadosBancariosInput : BaseInputType<DadosBancarios>
    {
        public DadosBancariosInput()
        {
            Field(x => x.Id, true);
            Field(x => x.Agencia, true);
            Field(x => x.BancoId, true);
            Field(x => x.Conta, true);
            Field(x => x.DigitoAgencia, true);
            Field(x => x.DigitoConta, true);
        }
    }


    public class ContatoCreateInput : BaseInputType<Contato>
    {
        public ContatoCreateInput()
        {
            Field(x => x.Id, true);
            Field(x => x.Email);
            Field(x => x.NomeContato);
            Field(x => x.Telefone, true);
            Field(x => x.TipoContatoId, true);
            Field(x => x.EmpresaId, true);
        }
    }


    public class DadosPessoaFisicaCreateInput : BaseInputType<DadosPessoaFisica>
    {
        public DadosPessoaFisicaCreateInput()
        {
            Field(x => x.CPF);
            Field(x => x.DataNascimento);
            var enumType = typeof(EnumerationGraphType<>);
            var graphType = enumType.MakeGenericType(typeof(Sexo));
            Field(x => x.Sexo, true, graphType);
            Field(x => x.PisPasepNit);
            Field(x => x.MunicipioId);
        }
    }

    public class EnderecoCreateInput : BaseInputType<Endereco>
    {
        public EnderecoCreateInput()
        {
            Field(x => x.Id, true);
            Field(x => x.CEP);
            Field(x => x.TipoEndereco);
            Field(x => x.Logradouro);
            var enumType = typeof(EnumerationGraphType<>);
            var graphType = enumType.MakeGenericType(typeof(TipoLogradouro));
            Field(x => x.TipoLogradouro, true, graphType);
            Field(x => x.Numero);
            Field(x => x.Complemento);
            Field(x => x.Bairro);
            Field(x => x.MunicipioId);
            Field(x => x.EmpresaId, true);
        }
    }

    public class UsuarioCreateInput : BaseInputType<Usuario>
    {
        public UsuarioCreateInput()
        {
            Field(x => x.Id, true);
            Field(x => x.Nome, true);
            Field(x => x.CPF, true);
            Field(x => x.Telefone, true);
            Field(x => x.Celular, true);
            Field(x => x.Email, true);
            Field(x => x.CargoEmpresa, true);
            Field(x => x.EmpresaId, true);
            Field(x => x.UserName);
            Field(x => x.PassWord);
            Field(x => x.ConfirmPassWord);
            Field(x => x.LinkConfirmacao);
        }
    }

}