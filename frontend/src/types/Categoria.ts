export type Finalidade = "Despesa" | "Receita" | "Ambas";

export interface Categoria {
  id: string;
  descricao: string;
  finalidade: Finalidade;
}

export interface CategoriaTotais {
  categoriaId: string;
  descricao: string;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}

export interface CategoriaTotaisGerais {
  categoriaId: string;
  descricao: string;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}

export interface CategoriaTotaisGeraisResponse {
  categorias: CategoriaTotaisGerais[];
  totalGeral: {
    totalReceitas: number;
    totalDespesas: number;
    saldo: number;
  };
}