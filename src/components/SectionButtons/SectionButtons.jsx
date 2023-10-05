import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 400px) {
        flex-direction: column;
        gap: 20px;
    }
`

const SectionButtons = styled.section`
    display: flex;
    gap: 15px;
    align-items: center;
`

export default SectionButtons;