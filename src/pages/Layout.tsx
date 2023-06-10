import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;

  a {
    color: #777;
  }

  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        {/*todo (1) 프로필 꾸미기*/}
        <div>
          <ProfilePicture
            src="data:image/jpeg;base64,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"
            alt="프로필 사진"
          />
        </div>
        <div>
          <Name>나준수</Name>
          <Description>설명</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
