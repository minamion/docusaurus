import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cheap and Cool',
    Svg: require('@site/static/img/emoji_u1f4b8.svg').default,
    description: (
      <>
        海蛞蝓杂货铺是一个同人制品社团，同时也是业余电子工程社团，专注于低成本和简单易用的、炫酷又好用 <del>电子垃圾</del> 电子创作。
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/emoji_u1f9d0.svg').default,
    description: (
      <>
        本文档包括我们的社团概况以及我个人的电子产品和制品的详细信息。
        每个产品都附带了在线预览、原理图、Gerber文件和芯片数据表，以帮助您更好地了解和使用它们。
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/emoji_u1f924_200d_2063.svg').default,
    description: (
      <>
        为了确保任何人都能免费取用这些资源，我们发布的软件都基于第3版GNU通用公共许可协议，
        我们的文档遵循署名-非商业性-相同方式共享协议，
        硬件则遵循开源硬件协议
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
