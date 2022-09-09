// 24 - Ordene em todos os documentos os valores do array valoresNutricionais pelo campo percentual de forma decrescente

// Crie uma query que faça em todos os documentos a ordenação dos valores do array valoresNutricionais pelo campo percentual de forma decrescente. 👀De olho na dica: mesmo sem adicionar nenhum novo valor, para essa operação é necessário utilizar também o modificador $each.

// Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.

db.produtos.updateMany({}, {
  $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } },
});

db.produtos.find({}, {
  nome: 1, valoresNutricionais: 1, _id: 0,
});