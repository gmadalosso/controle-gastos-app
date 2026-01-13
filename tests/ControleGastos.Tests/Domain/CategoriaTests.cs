using ControleGastos.Api.Domain.Entities;
using ControleGastos.Api.Domain.Enums;
using Xunit;

namespace ControleGastos.Tests.Domain;

public class CategoriaTests
{
    [Fact]
    public void CriarCategoria_ComDadosValidos_DeveCriarComSucesso()
    {
        var descricao = "Alimentação";
        var finalidade = Finalidade.Despesa;

        var categoria = new Categoria(descricao, finalidade);

        Assert.NotEqual(Guid.Empty, categoria.Id);
        Assert.Equal(descricao, categoria.Descricao);
        Assert.Equal(finalidade, categoria.Finalidade);
    }

    [Fact]
    public void CriarCategoria_ComDescricaoVazia_DeveLancarArgumentException()
    {
        var descricao = "";
        var finalidade = Finalidade.Receita;

        var exception = Assert.Throws<ArgumentException>(() => new Categoria(descricao, finalidade));
        Assert.Contains("Descrição da categoria é obrigatória", exception.Message);
    }

    [Fact]
    public void PermiteTipo_CategoriaComFinalidadeAmbas_DevePermitirAmbosTipos()
    {
        var categoria = new Categoria("Geral", Finalidade.Ambas);

        Assert.True(categoria.PermiteTipo(TipoTransacao.Despesa));
        Assert.True(categoria.PermiteTipo(TipoTransacao.Receita));
    }
}

