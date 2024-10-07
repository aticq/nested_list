import styled from "styled-components";
import MainLogo from "@/shared/assets/icons/main_logo.svg";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <MainLogo />
      <h4>Тестовое задание</h4>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 15px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
