import { PrismaClient } from ".prisma/client";
import AppLayout from "@lib/components/Layouts/AppLayout";
const prisma = new PrismaClient();

const Page = ({recipes}) => {
  return (
    <>
      <AppLayout>
        {/* <blockquote> */}
        <h1>Welcome to the PlanetScale Next.js Starter App!</h1>
        <p>
          This is an example site to demonstrate how to use{" "}
          <a href={`https://next-auth.js.org`}>NextAuth.js</a> for
          authentication with PlanetScale and Prisma.
        </p>
        <blockquote>
          <p>
            You can find how to get started{" "}
            <a href={`https://github.com/planetscale/nextjs-planetscale-starter`}>here</a>.
          </p>
        </blockquote>

        <h2>{recipes.length} Recipes</h2>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              {recipe.name} by {recipe.user.name || recipe.userId}
            </li>
          ))}
        </ul>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  const recipes = await prisma.recipe.findMany({
    include: { user: true }
  })
  return {
    props: {
      recipes
    }
  }
}

export default Page;
