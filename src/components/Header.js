import styled from "styled-components";

export default function Header() {
    return (
        <Top>
            <h1>TrackIt</h1>
            <img src="imgs/bobesponja.png" alt="" />
        </Top>
    )
}

const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 20px;

    font-family: 'Playball';
    font-size: 39px;
    color: #FFFFFF;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img{
        width: 50px;
        height: 50px;
    }
`