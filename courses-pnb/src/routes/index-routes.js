const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
        "courses": [
            {
                "id": "1",
                "name": "Pacote Hemato e Banco de Sangue",
                "time": "190 Horas"
            },
            {
                "id": "2",
                "name": "Acupuntura Efetiva: Científica e Tradicional",
                "time": "Extensão"
            },
            {
                "id": "3",
                "name": "Aprenda Auriculoterapia",
                "time": "30 Horas"
            },
            {
                "id": "4",
                "name": "Aprenda Ventosaterapia",
                "time": "20 Horas"
            },
            {
                "id": "5",
                "name": "Bioquímica Básica - 5 Semanas",
                "time": "Ebook"
            },
            {
                "id": "6",
                "name": "Bioquímica e Integração Metabólica Básico",
                "time": "3 Horas"
            },
            {
                "id": "7",
                "name": "Bioquímica e Integração Metabólica Plus",
                "time": "6 Horas"
            },
            {
                "id": "8",
                "name": "Bioquímica e Metabolismo dos Nutrientes",
                "time": "Extensão"
            }
        ]
    });
});

module.exports = router;