// 3 - Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido

db.produtos.findOne({}, { nome: 1, vendidos: 1, _id: 0 });