import { useFetchUser } from '../../hooks/useFetchUser';
import { ProfileContainer, ProfileContent, ProfileDescription } from './styles';
import { ArrowSquareUpRightIcon, BuildingOfficeIcon, GithubLogoIcon, UsersThreeIcon } from '@phosphor-icons/react';

export function Profile() {
  const { user } = useFetchUser();

  return (
    <ProfileContainer>
      <ProfileContent>
        {!user ?
          (<p>Carregando...</p>) :
          (<>
            <img src={user.avatar_url} alt={user.name} />

            <ProfileDescription>
              <div>
                <h2>{user.name}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    github
                  </span>
                  <ArrowSquareUpRightIcon size={14} />
                </a>
              </div>

              <p>
                {user.bio}
              </p>

              <div>
                <div>
                  <GithubLogoIcon size={18} weight="duotone" />
                  <span>{user.login}</span>
                </div>
                <div>
                  <BuildingOfficeIcon size={18} weight="duotone" />
                  <span>{user.company}</span>
                </div>
                <div>
                  <UsersThreeIcon size={18} weight="duotone" />
                  <span>{user.followers} {user.followers > 1 ? 'seguidores' : 'seguidor'}</span>
                </div>
              </div>
            </ProfileDescription>
          </>)}
      </ProfileContent>
    </ProfileContainer>
  );
};
