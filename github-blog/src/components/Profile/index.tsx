import { ProfileContainer, ProfileContent, ProfileDescription } from './styles';
import { ArrowSquareUpRightIcon, BuildingOfficeIcon, GithubLogoIcon, UsersThreeIcon } from '@phosphor-icons/react';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <img src="https://github.com/chatacks.png" alt="" />

        <ProfileDescription>
          <div>
            <h2>Thyago Chatack</h2>
            <a
              href="https://www.github.com/chatacks"
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
            Olá, eu sou o Thyago! Sou Desenvolvedor FullStack com quase 2 anos de experiência e atualmente graduando em Engenharia de Software. Trabalho com tecnologias de frontend e backend como React.js/Next.js, TypeScript, Express.js, NestJS e SQL.
          </p>

          <div>
            <div>
              <GithubLogoIcon size={18} weight="duotone" />
              <span>chatacks</span>
            </div>
            <div>
              <BuildingOfficeIcon size={18} weight="duotone" />
              <span>TeamSoft Tecnologia e Sistemas</span>
            </div>
            <div>
              <UsersThreeIcon size={18} weight="duotone" />
              <span>14 seguidores</span>
            </div>
          </div>
        </ProfileDescription>
      </ProfileContent>
    </ProfileContainer>
  );
};
