import tw, { styled } from 'twin.macro'

export const Logo = styled.div<{ isHeaderDark?: boolean }>`
    height: 70px;
    svg {
        width: 200px;
        height: 70px;
    }

    // svg:hover {
    //     fill: #6b7280;
    // }
`
