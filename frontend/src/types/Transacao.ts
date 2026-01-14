export type TipoTransacao = "Despesa" | "Receita";

export interface Transacao {
  id: string;
  descricao: string;
  valor: number;
  tipo: TipoTransacao;
  pessoaId: string;
  pessoaNome: string;
  categoriaId: string;
  categoriaDescricao: string;
}

export interface TransacaoCreate {
  descricao: string;
  valor: number;
  tipo: TipoTransacao;
  pessoaId: string;
  categoriaId: string;
}