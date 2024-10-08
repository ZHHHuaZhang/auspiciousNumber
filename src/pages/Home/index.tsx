import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <p>Welcome to ausipcious number management platfrom.</p>
      </div>
    </PageContainer>
  );
};

export default HomePage;
