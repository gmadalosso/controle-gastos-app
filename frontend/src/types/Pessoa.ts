export interface Pessoa {
  id: string;
  nome: string;
  idade: number;
}

export interface PessoaTotais {
  pessoaId: string;
  nome: string;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}

export interface PessoaTotaisGerais {
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}