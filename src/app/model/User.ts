import { Telefone } from './Telefone';
import { Profissao } from './Profissao';

export class User {
	id: Number;
	login: String;
	senha: String;
	nome: String;
	cpf: String;
	dataNascimento: String;

	salario: DoubleRange;

	profissao: Profissao = new Profissao();

	telefones: Array<Telefone>;

}
