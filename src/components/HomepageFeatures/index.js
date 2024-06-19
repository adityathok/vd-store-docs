import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pengaturan Toko',
    Svg: require('@site/static/img/undraw_personal_settings.svg').default,
    description: (
      <>
        Pengaturan umum untuk memulai menggunakan VD Store
      </>
    ),
    url: 'docs/category/pengaturan',
  },
  {
    title: 'Shortcodes',
    Svg: require('@site/static/img/undraw_design_feedback.svg').default,
    description: (
      <>
        Daftar Shortcode yang disediakan plugin VD Store
      </>
    ),
    url: 'docs/category/shortcodes',
  },
  {
    title: 'Catatan Developer',
    Svg: require('@site/static/img/undraw_publish_article.svg').default,
    description: (
      <>
        Catatan atau informasi pengembangan terbaru dari plugin VD Store.
      </>
    ),
    url: 'blog',
  },
];

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a href={url} className="button button--primary">Selengkapnya</a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
