import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import { useState, Suspense, useEffect } from 'react';
import Footer from './Footer'

type LngRet = { [lng: string]: { nativeName: string; }; }

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  const [lngs, setLngs] = useState<LngRet>({ en: { nativeName: 'English' }});

  useEffect(() => {
    i18n.services.backendConnector.backend.getLanguages((err: any, ret: LngRet) => {
      if (err) return // TODO: handle err...
      setLngs(ret);
    });
  }, [i18n]);

  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.svg" className="App-logo" alt="logo" />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => {
              i18n.changeLanguage(lng);
              setCounter(count + 1);
            }}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          <i>{t('counter', { count })}</i>
        </p>
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
          {/* <div>{t('new.key', 'this will be added automatically')}</div> */}
          {/* <div>{t('new.keyWithContext', 'also this will be added automatically', 'and here some context')}</div> */}
          {/* <div>{t('new.keyWithContextTwo', { defaultValue: 'default via options', tDescription: 'context via options' })}</div> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
      </header>
      <Footer t={t} />
    </div>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}