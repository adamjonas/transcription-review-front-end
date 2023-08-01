/* eslint-disable react/no-unescaped-entities */
import HomePageTutorial from "@/components/home/Tutorial";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import type { Session } from "next-auth";
import { getServerSession } from "next-auth/next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { authOptions } from "./api/auth/[...nextauth]";

type HomePageProps = {
  serverSession: Session | null;
};

const Home: NextPage<HomePageProps> = ({ serverSession }) => {
  const router = useRouter();
  useEffect(() => {
    if (serverSession) {
      router.push(`/${serverSession.user?.githubUsername || "no-user"}`);
    }
  }, [serverSession, router]);
  if (serverSession) {
    return <></>;
  }

  return <HomePageTutorial />;
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      serverSession: session,
    },
  };
};

export default Home;
