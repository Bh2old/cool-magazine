const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/services/identity-service',
    '<rootDir>/libs/adapters/identity/node-oidc-provider',
    '<rootDir>/libs/domains/generic/identity/oidc-core',
    '<rootDir>/libs/shared/ddd-expc',
  ],
};
