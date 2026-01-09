import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';
import GameInterface from '@/components/game/GameInterface';

interface PageProps {
  params: {
    slug: string;
    level: string;
  }
}

export default async function GameLevelPage({ params }: PageProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  const { slug } = params;

  // Fetch Mission
  const mission = await prisma.mission.findUnique({
    where: { slug: slug },
  });

  if (!mission) {
    return notFound();
  }

  const initialCode = mission.starterCode || '// No starter code.';

  return (
    <GameInterface
      slug={slug}
      missionId={mission.id}
      initialCode={initialCode}
      instructions={mission.description}
      title={mission.title}
    />
  );
}
