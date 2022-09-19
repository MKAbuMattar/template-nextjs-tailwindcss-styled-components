import type { NextPage } from 'next';
import Head from 'next/head';

import {
  Card,
  CardDescription,
  Cards,
  CardTitle,
  Container,
  Description,
  DescriptionHighlight,
  Footer,
  FooterCopyRight,
  Main,
  Title,
  TitleLink,
} from '@/style/main';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Template NextJS TailwindCSS Styled Components</title>
      </Head>

      <Main>
        <Title>
          Welcome to <TitleLink href="https://nextjs.org">Next.js!</TitleLink>
        </Title>

        <Description>
          Get started by editing{' '}
          <DescriptionHighlight>pages/index.tsx</DescriptionHighlight>
        </Description>

        <Cards>
          <Card href="https://nextjs.org/docs">
            <CardTitle>Documentation &rarr;</CardTitle>
            <CardDescription>
              Find in-depth information about Next.js features and its API.
            </CardDescription>
          </Card>

          <Card href="https://nextjs.org/learn">
            <CardTitle>Learn &rarr;</CardTitle>
            <CardDescription>
              Learn about Next.js in an interactive course with quizzes!
            </CardDescription>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/canary/examples">
            <CardTitle>Examples &rarr;</CardTitle>
            <CardDescription>
              Discover and deploy boilerplate example Next.js projects.
            </CardDescription>
          </Card>

          <Card href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <CardTitle>Deploy &rarr;</CardTitle>
            <CardDescription>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </CardDescription>
          </Card>
        </Cards>
      </Main>

      <Footer>
        <FooterCopyRight
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
        </FooterCopyRight>
      </Footer>
    </Container>
  );
};

export default Home;
