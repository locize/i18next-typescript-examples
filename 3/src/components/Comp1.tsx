import { useTranslation, Trans } from "react-i18next";

function Comp1() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <p>
        <Trans i18nKey="title">
          Welcome to react using <code>react-i18next</code> fully type-safe
        </Trans>
      </p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
    </div>
  );
}

export default Comp1;