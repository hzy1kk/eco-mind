export interface QuizQuestion {
  id: number;
  q: string;
  options: string[];
  correct: number;
  feedback: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    q: "Qual é a concentração aproximada de CO₂ na atmosfera em 2025?",
    options: ["280 ppm", "350 ppm", "426 ppm", "600 ppm"],
    correct: 2,
    feedback:
      "A concentração de CO₂ ultrapassou 426 ppm em 2025 — o nível mais alto em pelo menos 800 mil anos, segundo a NOAA.",
  },
  {
    id: 2,
    q: "Quanto 2024 ficou acima da temperatura média da era pré-industrial?",
    options: ["0,5°C", "1,0°C", "1,55°C", "3,0°C"],
    correct: 2,
    feedback:
      "2024 foi o primeiro ano a superar 1,5°C acima do período pré-industrial (1850–1900), segundo a OMM e o Copernicus.",
  },
  {
    id: 3,
    q: "O que aconteceu com o desmatamento da Amazônia entre 2024 e 2025?",
    options: [
      "Aumentou 30%",
      "Caiu 11,1%, menor nível desde 2014",
      "Ficou estável",
      "Dobrou de tamanho",
    ],
    correct: 1,
    feedback:
      "O desmatamento caiu 11,1%, o menor índice desde 2014 — um exemplo real de que política pública bem aplicada funciona.",
  },
  {
    id: 4,
    q: "Quantas toneladas de plástico vão parar nos oceanos por ano, em média?",
    options: [
      "800 mil toneladas",
      "2 milhões de toneladas",
      "8 milhões de toneladas",
      "50 milhões de toneladas",
    ],
    correct: 2,
    feedback:
      "Cerca de 8 milhões de toneladas de plástico chegam aos oceanos todos os anos — o equivalente a um caminhão de lixo por minuto.",
  },
  {
    id: 5,
    q: "Qual ação, segundo a calculadora da EcoMind, costuma gerar o maior corte individual de CO₂?",
    options: [
      "Trocar o carro por transporte público/bike",
      "Desligar o carregador do celular",
      "Usar sacola retornável 1x por mês",
      "Reduzir 1 banho por ano",
    ],
    correct: 0,
    feedback:
      "Trocar o carro por transporte público, bike ou caminhada costuma ter o maior impacto individual entre os hábitos do dia a dia.",
  },
];
