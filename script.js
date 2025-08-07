/**
 * 💻 Desafio: Escrevendo as Classes de um Jogo
 * O Que deve ser utilizado:
 * - Variáveis
 * - Operadores
 * - Laços de repetição
 * - Estruturas de decisões
 * - Funções
 * - Classes e Objetos
 */

// 1. Classe genérica que representa um herói
class Heroi {
    // Propriedades da classe
    nome;
    idade;
    tipo; // pode ser: guerreiro, mago, monge, ninja

    // O construtor é chamado quando criamos uma nova instância (objeto) da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // 2. Método para o herói realizar um ataque
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o ataque com base no tipo do herói
        // Usamos um objeto (Map) para associar o tipo ao ataque, uma abordagem limpa e escalável
        const ataques = {
            mago: 'magia',
            guerreiro: 'espada',
            monge: 'artes marciais',
            ninja: 'shuriken'
        };

        // Atribui o ataque correspondente ou um ataque padrão caso o tipo não seja encontrado
        ataque = ataques[this.tipo] || 'um ataque indefinido';

        // 3. Exibição da mensagem de saída
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// --- Demonstração de Uso ---

console.log("--- Testes Individuais ---");

// Criando uma instância (objeto) para cada tipo de herói
const mago = new Heroi('Gandalf', 150, 'mago');
const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
const monge = new Heroi('Aang', 12, 'monge');
const ninja = new Heroi('Naruto', 17, 'ninja');

// Chamando o método atacar para cada herói
mago.atacar();       // Saída esperada: o mago atacou usando magia
guerreiro.atacar(); // Saída esperada: o guerreiro atacou usando espada
monge.atacar();     // Saída esperada: o monge atacou usando artes marciais
ninja.atacar();     // Saída esperada: o ninja atacou usando shuriken

console.log("\n--- Teste com Laço de Repetição ---");

// Criando uma lista de heróis para demonstrar o uso de laços de repetição
const listaDeHerois = [
    new Heroi('Merlin', 200, 'mago'),
    new Heroi('He-Man', 30, 'guerreiro')
];

// Usando um laço de repetição (forEach) para que cada herói na lista ataque
listaDeHerois.forEach(heroi => {
    heroi.atacar();
});
