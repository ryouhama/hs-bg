import { RatingGraph } from "./ratingGraph";
import { BattleHistories } from "./BattleHistories";
import { PageLayout } from "pages/pageLayout";
import { PropsWithChildren } from "react";

type Props = {};

export const Presenter: React.FC<Props> = () => {
  return (
    <PageLayout>
      <TopSection>
        <RatingGraph />
      </TopSection>
      <SubSection>
        <BattleHistories />
      </SubSection>
    </PageLayout>
  );
};

const TopSection: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

const SubSection: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};
