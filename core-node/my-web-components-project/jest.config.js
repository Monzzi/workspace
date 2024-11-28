module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testMatch: [
    '<rootDir>/__tests__/**/*.(test|spec).ts',  // Busca en la carpeta __tests__ en la raíz
    '<rootDir>/src/**/*.(test|spec).ts',      // También puedes mantener la búsqueda en src
    '<rootDir>/src/**/*.(test|spec).tsx'
  ],
};



