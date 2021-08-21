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

type CheckResultCache = { readonly [candidate: string]: boolean };
export class SingleRedirectUriVariantSpecification extends CompositeSpecification<string> {
  private readonly _checkResultCache: CheckResultCache = {};
  private readonly _uriReferenceUriUsageParser: IUriReferenceUriUsageParser =
    new UriReferenceUriUsageParser();
  private readonly _authorityUriComponentParser: IAuthorityUriComponentParser =
    new AuthorityUriComponentParser();

  private readonly _absoluteUrlSpecification = new AbsoluteUrlSpecification();
  private readonly _dNSRegNameHostAuthorityUriComponentSpecification =
    new DNSRegNameHostAuthorityUriComponentSpecification();
  private readonly _httpsSchemeUriComponentSpecification =
    new HttpsSchemeUriComponentSpecification();
  private readonly _localhostIPv4HostAuthorityUriComponentSpecification =
    new LocalhostIPv4HostAuthorityUriComponentSpecification();
  private readonly _localhostRegNameHostAuthorityUriComponentSpecification =
    new LocalhostRegNameHostAuthorityUriComponentSpecification();
  private readonly _noTraversalPathUriComponentSpecification =
    new NoTraversalPathUriComponentSpecification();
  private readonly _noUserInfoAuthorityUriComponentSpecification =
    new NoUserInfoAuthorityUriComponentSpecification();

  isSatisfiedBy(candidate: string): boolean {
    const cachedCheckResult = this._getCachedCheckResult(candidate);

    if (cachedCheckResult !== null) {
      return cachedCheckResult;
    }

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

  private _getCachedCheckResult(candidate: string) {
    return Object.prototype.hasOwnProperty.call(
      this._checkResultCache,
      candidate
    )
      ? this._checkResultCache[candidate]
      : null;
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
    return this._absoluteUrlSpecification
      .and(this._noTraversalPathUriComponentSpecification)
      .isSatisfiedBy(uri);
  }

  private _isSatisfiedCommonRequirementsForUriComponentAthority(
    host: IUserInfoAuthorityUriComponentPart
  ) {
    return this._noUserInfoAuthorityUriComponentSpecification.isSatisfiedBy(
      host
    );
  }

  private _getLocalhostSpecifications() {
    return this._localhostIPv4HostAuthorityUriComponentSpecification.or(
      this._localhostRegNameHostAuthorityUriComponentSpecification
    );
  }

  private _getNotLocalhostSpecification() {
    return new DownCastSpecificationChainHelper<
      ISchemeUriComponent & IHostAuthorityUriComponentPart
    >()
      .and(this._httpsSchemeUriComponentSpecification)
      .and(this._dNSRegNameHostAuthorityUriComponentSpecification);
  }
}
