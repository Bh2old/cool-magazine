import {
  AbsoluteUrlSpecification,
  AuthorityUriComponentParser,
  CompositeSpecification,
  DNSRegNameHostAuthorityUriComponentSpecification,
  DownCastSpecificationChainHelper,
  HttpsSchemeUriComponentSpecification,
  IAuthorityUriComponentParser,
  IHostAuthorityUriComponentPart,
  ISchemeUriComponent,
  IUriReferenceUriUsageParser,
  IUriReferenceUriUsageParsingResult,
  IUserInfoAuthorityUriComponentPart,
  LocalhostIPv4HostAuthorityUriComponentSpecification,
  LocalhostRegNameHostAuthorityUriComponentSpecification,
  NoTraversalPathUriComponentSpecification,
  NoUserInfoAuthorityUriComponentSpecification,
  UriReferenceUriUsageParser,
} from '@bh2old/ddd-expc';

export class CreateUriRedirectUriSpecification extends CompositeSpecification<string> {
  private readonly _uriReferenceUriUsageParser: IUriReferenceUriUsageParser =
    new UriReferenceUriUsageParser();
  private readonly _authorityUriComponentParser: IAuthorityUriComponentParser =
    new AuthorityUriComponentParser();

  isSatisfiedBy(candidate: string): boolean {
    const uriComponents = this._getUriComponents(candidate);
    if (uriComponents === null || !uriComponents.authority) {
      return false;
    }

    if (!this._isSatisfiedCommonRequirementsForUriComponents(uriComponents)) {
      return false;
    }

    const uriComponentAuthority = this._getUriComponentAuthority(
      uriComponents.authority
    );

    if (uriComponentAuthority === null) {
      return false;
    }

    if (
      !this._isSatisfiedCommonRequirementsForUriComponentAthority(
        uriComponentAuthority
      )
    ) {
      return false;
    }

    type FinalSpecificationChainCandidate = ISchemeUriComponent &
      IHostAuthorityUriComponentPart;

    const finalUriComponents: FinalSpecificationChainCandidate = {
      ...uriComponents,
      ...uriComponentAuthority,
    };

    const isSatisfied =
      new DownCastSpecificationChainHelper<FinalSpecificationChainCandidate>()
        .chain(
          this._getLocalhostSpecifications().or(
            this._getNotLocalhostSpecification()
          )
        )
        .isSatisfiedBy(finalUriComponents);

    return isSatisfied;
  }

  private _getUriComponents(uri: string) {
    return this._uriReferenceUriUsageParser.parse(uri);
  }

  private _getUriComponentAuthority(authority: string) {
    return this._authorityUriComponentParser.parse(authority);
  }

  private _isSatisfiedCommonRequirementsForUriComponents(
    uri: IUriReferenceUriUsageParsingResult
  ) {
    return new AbsoluteUrlSpecification()
      .and(new NoTraversalPathUriComponentSpecification())
      .isSatisfiedBy(uri);
  }

  private _isSatisfiedCommonRequirementsForUriComponentAthority(
    host: IUserInfoAuthorityUriComponentPart
  ) {
    return new NoUserInfoAuthorityUriComponentSpecification().isSatisfiedBy(
      host
    );
  }

  private _getLocalhostSpecifications() {
    return new LocalhostIPv4HostAuthorityUriComponentSpecification().or(
      new LocalhostRegNameHostAuthorityUriComponentSpecification()
    );
  }

  private _getNotLocalhostSpecification() {
    return new DownCastSpecificationChainHelper<
      ISchemeUriComponent & IHostAuthorityUriComponentPart
    >()
      .and(new HttpsSchemeUriComponentSpecification())
      .and(new DNSRegNameHostAuthorityUriComponentSpecification());
  }
}
