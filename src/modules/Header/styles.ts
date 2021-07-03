import tw, { styled } from 'twin.macro'

export const Header = styled.header`
    ${tw`flex items-center justify-between flex-wrap bg-green-200 font-sans`}
    height: 70px;
    a {
        display: inline;
    }
`

export const LinkListLeft = styled.ul`
    ${tw`flex items-center mr-6 h-full`}
    li:first-child {
        margin-right: 50px;
    }
    a {
        color: black;
    }
`

export const LinkContainer = styled.li<{ isActive?: boolean }>`
    ${tw`flex items-center h-full px-3 uppercase text-black hover:underline  `}
    font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
`

export const HeaderItemListRight = styled.ul`
    ${tw`flex items-center  mr-3`}
`

export const CircleButton = styled.button`
    ${tw`flex items-center content-center rounded-full bg-white w-10 h-10 mx-3`}
    position: relative;

    &:hover {
        .hoveredIcon {
            opacity: 1;
        }
        .initialIcon {
            opacity: 0;
        }
    }
`
export const IconWrapper = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.5s;

    svg {
        height: 24px;
        width: 24px;
    }
    &.hoveredIcon {
        opacity: 0;
        position: absolute;
    }

    &.initialIcon {
        top: 3px;
    }
`
