import { UserInfoIcons } from '../../components/portfolio/UserHeadLine';
import { GridSkillsSection } from '../../components/portfolio/UserSkills';
import { GridIntroduceSection } from '../../components/portfolio/UserIntroduce';
import { ArticleCard } from '../../components/portfolio/ArticleCard';

export default function Home() {
  return (
    <main className="">
      {/* 自分のアイコン画像入れる */}
      <UserInfoIcons />
      <GridSkillsSection />
      <GridIntroduceSection />  
      {/* 以下に自分が投稿した記事が一覧で出るようにする */}
      {/* <ArticleCard /> */}
    </main>
  )
}
