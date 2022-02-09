import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';

const Container = styled.div`
    color: red
    ${tw`
        flex
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center
    `};
`;

const NavItems = tw.ul`
   list-none
   w-full
   h-auto
   lg:h-full
   flex
   lg:ml-20
   justify-center
   items-center
`;

const NavItem = tw.li`
    
`;

export function NavBar() {
    // return
}