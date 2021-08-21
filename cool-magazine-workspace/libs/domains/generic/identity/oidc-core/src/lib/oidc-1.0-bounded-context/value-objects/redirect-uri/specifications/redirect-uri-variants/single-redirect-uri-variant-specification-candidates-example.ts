import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';

export class SingleRedirectUriVariantSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<string>
{
  get valid() {
    return new Set<string>([
      'http://127.0.0.1:1234/path1/path2',
      'http://127.0.0.1:1234',
      'http://127.0.0.1',
      'http://localhost:1234/path1/path2',
      'http://localhost:1234',
      'http://localhost',
      'https://127.0.0.1:1234/path1/path2',
      'https://127.0.0.1:1234',
      'https://127.0.0.1',
      'https://do.main.dom:1234/path1/path2',
      'https://do.main.dom:1234',
      'https://do.main.dom',
    ]);
  }

  get invalid() {
    return new Set<string>([
      'http://domain.dom:1234/path1/path2',
      'http://domain.dom:1234',
      'http://domain.dom',
      'https://143.50.66.7:1234/path1/path2',
      'https://198.45.16.57:1234',
      'https://198.45.16.57',
      'https://[1:2:3:4:5:6:7:8]:1234/path1/path2',
      'https://[::11]/:1234',
      'https://[1::8]',
      'http://user:info@localhost:1234/path1/path2',
      'http://user:info@localhost:1234',
      'http://user:info@localhost',
      'http://user:info@127.0.0.1:1234/path1/path2',
      'http://user:info@127.0.0.1:1234',
      'http://user:info@127.0.0.1',
      'https://user:info@localhost:1234/path1/path2',
      'https://user:info@localhost:1234',
      'https://user:info@localhost',
      'https://user:info@127.0.0.1:1234/path1/path2',
      'https://user:info@127.0.0.1:1234',
      'https://user:info@127.0.0.1',
      'https://user:info@domain.dom:1234/path1/path2',
      'https://user:info@domain.dom:1234',
      'https://user:info@domain.dom',
      '/relative/URI/with/absolute/path/to/resource.txt',
      '//example.org/scheme-relative/URI/with/absolute/path/to/resource.txt',
      'relative/path/to/resource.txt',
      '../../../resource.txt',
      'resource.txt',
      '/resource.txt#frag01',
      '#frag01',
      '',
      'http://localhost:1234/path1/../../../resource.txt',
      'https://localhost:1234/path1/../../../resource.txt',
      'http://localhost/path1/../../../resource.txt',
      'https://localhost/path1/../../../resource.txt',
      'http://127.0.0.1:1234/path1/../../../resource.txt',
      'https://127.0.0.1:1234/path1/../../../resource.txt',
      'http://127.0.0.1/path1/../../../resource.txt',
      'https://127.0.0.1/path1/../../../resource.txt',
      'https://domain.dom:1234/path1/../../../resource.txt',
      'https://domain.dom/path1/../../../resource.txt',
    ]);
  }
}
