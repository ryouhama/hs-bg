import { Table, Body, Cell, Head, Row } from "components/Table";

type Props = {
  battleHistories: BattleHistory[];
};

export const Presenter: React.FC<Props> = ({ battleHistories }) => {
  return (
    <Table aria-label="simple table">
      <Head>
        <Row>
          <Cell>rate</Cell>
          <Cell>ranking</Cell>
          <Cell>hero</Cell>
        </Row>
      </Head>
      <Body>
        {battleHistories.map((battleHistory) => {
          return (
            <Row>
              <Cell>{battleHistory.rate}</Cell>
              <Cell>{battleHistory.rank}</Cell>
              <Cell>{battleHistory.hero}</Cell>
            </Row>
          );
        })}
      </Body>
    </Table>
  );
};
