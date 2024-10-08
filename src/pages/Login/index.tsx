import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  PageContainer,
  ProFormText,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import styles from './index.less';

const Login: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <LoginForm
          onFinish={() => {
            history.push('/management');
          }}
        >
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'just clicking login button'}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'you can get in'}
            />
          </>
        </LoginForm>
      </div>
    </PageContainer>
  );
};

export default Login;
