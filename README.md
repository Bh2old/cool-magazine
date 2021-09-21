# cool-magazine

Proof of concepts:

1) DDD + hexagonal architecture (possible analogue at the front),
2) auth flow on receiving a token (-> redirect): front -> bff -> oidc provider -> bff -> front.

Look at partially adequate code - [partial DDD domain implementation using Specification Pattern](https://github.com/Bh2old/cool-magazine/tree/feature/base-oidc-identity/cool-magazine-workspace/libs/domains/generic/identity/oidc-core/src/lib/oidc-1.0-bounded-context), however this code is for the backend, but it will be reused in a modified form on the front.
And [CDK](https://github.com/Bh2old/cool-magazine/tree/feature/base-oidc-identity/cool-magazine-workspace/libs/shared/ddd-expc/src/lib).

The rest of the code is dirty so far
