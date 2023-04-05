import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase';

function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        db.collection('movies')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setMovie(doc.data());
                } else {
                    console.log('no such document in firebase');
                    navigate('/');
                }
            })
            .catch((error) => {
                console.log('error getting document:', error);
            });
    }, [id]);

    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg} alt={movie.title} />
            </Background>

            <ImageTitle>
                <img src={movie.titleImg} alt={movie.title} />
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>

            <SubTitle>
                {movie.subTitle}
            </SubTitle>

            <Description>
                {movie.description}
            </Description>
        </Container>
    );
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
    }
`;

const TrailerButton = styled(PlayButton)`
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgb(249, 249, 249);
        color: rgb(249, 249, 249);
        text-transform: uppercase;
`;

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

    @media (max-width: 768px) {
    font-size: 12px;
    }
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;

    @media (max-width: 768px) {
    font-size: 14px;
    }
`;