import React from 'react';

import { 
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';
import { Link } from 'react-router-dom';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={`/subyster`}>
          subyster
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/subyster/test-repo'}>
          test-repo
        </Link>
      </Breadcrumb>

      <p>Test Repository</p>

      <Stats>
        <li>
          <StarIcon />
          <b>5</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>2</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/subyster'} >
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;