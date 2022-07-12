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
        <meta name="description" content="Trafflab Academy" />
        <meta name="keywords" content="Trafflab, academy" />
        <link rel="icon" type='image/x-icon' href={favicon} />
        
        <meta name="yandex-verification" content="yandex webmaster id" />
        <meta name="google-site-verification" content="google webmaster id" />
      </Helmet>
      <div className={styles.page}>
        {children}
        <YMInitializer accounts={[89406166]} options={{webvisor: true}} version="2" />
      </div>
    </Is480Context.Provider>
  )
};
