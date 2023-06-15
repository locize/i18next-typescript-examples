import { useTranslation } from "react-i18next";
import './i18n';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';

function App() {
  const {t} = useTranslation();
  return (
    <div className="App">
      <h1>{t('salutaion', { name: 'there'})}</h1>
      <Comp1 />
      <hr />
      <Comp2 />
      <hr />
      <Comp3 />
    </div>
  );
}

export default App;
