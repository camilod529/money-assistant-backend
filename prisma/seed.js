// 1) Importa el PrismaClient desde la carpeta `generated/prisma`.
//    No hace falta “/index” porque Node buscará automáticamente index.js en esa carpeta.
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
  // 2) Define las monedas “base” que quieres insertar:
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', exchangeRate: 1 },
    { code: 'COP', name: 'Peso Colombiano', symbol: 'COL$', exchangeRate: 1 },
    { code: 'EUR', name: 'Euro', symbol: '€', exchangeRate: 1 },
    { code: 'GBP', name: 'British Pound', symbol: '£', exchangeRate: 1 },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', exchangeRate: 1 },
    { code: 'ARS', name: 'Argentine Peso', symbol: 'AR$', exchangeRate: 1 },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', exchangeRate: 1 },
  ];

  // 3) Inserta todas con createMany + skipDuplicates (Postgres: ON CONFLICT DO NOTHING)
  const result = await prisma.currency.createMany({
    data: currencies,
    skipDuplicates: true,
  });

  console.log(`✅ Seed: se aseguraron ${result.count} registros en Currency.`);
}

main()
  .catch((e) => {
    console.error('❌ Error en seed.js:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
