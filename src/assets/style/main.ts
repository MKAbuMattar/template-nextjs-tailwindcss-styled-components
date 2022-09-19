import styled from 'styled-components';
import tw from 'twin.macro';

type ButtonProps = {
  isRed: boolean;
};

export const TailwindButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`;

export const ConditionalButton = styled.button<ButtonProps>(({ isRed }) => [
  isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-500`,
  tw`
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
  `,
]);

export const Container = tw.div`
  flex
  min-h-screen
  flex-col
  items-center
  justify-center
  py-2
`;

export const Main = tw.main`
  flex
  w-full
  flex-1
  flex-col
  items-center
  justify-center
  px-20
  text-center
`;

export const Title = tw.h1`
  text-6xl
  font-bold
`;

export const TitleLink = tw.a`
  text-blue-600
`;

export const Description = tw.p`
  mt-3
  text-2xl
`;

export const DescriptionHighlight = tw.code`
  rounded-md
  bg-gray-100
  p-3
  font-mono 
  text-lg
`;

export const Cards = tw.div`
  mt-6 flex
  max-w-4xl
  flex-wrap
  items-center
  justify-around
  sm:w-full
`;

export const Card = tw.a`
  mt-6
  w-96
  rounded-xl
  border
  p-6
  text-left
  hover:text-blue-600
  focus:text-blue-600
`;

export const CardTitle = tw.h3`
  text-2xl
  font-bold
`;

export const CardDescription = tw.p`
  mt-4
  text-xl
`;

export const Footer = tw.footer`
  flex
  h-24
  w-full
  items-center
  justify-center
  border-t
`;

export const FooterCopyRight = tw.a`
  flex
  items-center
  justify-center
  gap-2
`;
