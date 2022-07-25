import * as React from 'react'
import '../../../styles/global.css';

import * as styles from './page-layout.module.css';
import useIs480 from '../../../hooks/use-is-480';
import { Is480Context } from '../../../utils/contexts';
import { Helmet } from 'react-helmet';
import favicon from '../../../images/misc/favicon.ico'
import { YMInitializer } from 'react-yandex-metrika';

export default function PageLayout({ children }) {
  const is480 = useIs480()

  return (
    <Is480Context.Provider value={is480}>
      <Helmet htmlAttributes={{lang: 'ru'}}>
        <meta charSet='utf-8' />
        <meta name='author' content='Trafflab' />
        <meta name="description" content="Как зарабатывать 30 000 $ на арбитраже трафика от Тамерлана Сафиуллина" />
        <meta name="keywords" content="Trafflab, Traffacademy, академия арбитража, academy, арбитраж, трафик, заработок, обучение, Тамерлан Сафиуллина" />
        <link rel="icon" type='image/x-icon' href={favicon} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta name="yandex-verification" content="a71896519426bd38" />
        <meta name="google-site-verification" content="WIioruuTqjwjxZLLtd6XLTpy892y3B2tSbQjm7q825Q" />
        <title>Trafflab Academy</title>
      </Helmet>
      <div className={styles.page}>
        {children}
        <YMInitializer accounts={[89616968]} options={{webvisor: false}} version="2" />
      </div>
    </Is480Context.Provider>
  )
};
