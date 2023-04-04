import styled from 'styled-components';

function Header() {

    return (
        <Nav>
            <Logo src="/images/logo.svg" />

            {userName
                ? (<>
                    <NavMenu>
                        <a>
                            <img src="/images/home-icon.svg" alt="home" />
                            <span>HOME</span>
                        </a>
                        <a>
                            <img src="/images/search-icon.svg" alt="search" />
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <img src="/images/watchlist-icon.svg" alt="watchlist" />
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <img src="/images/original-icon.svg" alt="original" />
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src="/images/movie-icon.svg" alt="movie" />
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg" alt="series" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>

                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span>Sign out</span>
                        </DropDown>
                    </SignOut>

                </>)
                : (<LoginContainer>
                    <Login>Login</Login>
                </LoginContainer>
                )
            }

        </Nav>
    );
}

export default Header;

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a { 
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px; 
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform:scaleX(0);

            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

    @media (max-width: 768px) {
    display: none;
    }
`;

const UserImg = styled.img`
    width: 48px;
    height:48px;
    border-radius: 50%;
`;

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const DropDown = styled.div`
    position: absolute;
    top: 5px;
    right: 50px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.3);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 115px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
 
  &:hover {
    ${DropDown} {
        opacity: 1;
        transition-duration: 1s;
        text-transform: uppercase;
    }
  }
`;