import services from '@/services/management';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Divider, message } from 'antd';
import { useRef, useState } from 'react';
import CreateForm from './components/CreateForm';
import UpdateForm, { FormValueType } from './components/UpdateForm';
import styles from './index.less';
const { queryNumberList, addNumber, modifyNumber } = services.management;

const HomePage: React.FC = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);
  const [stepFormValues, setStepFormValues] = useState({});

  const handleUpdate = async (fields: FormValueType) => {
    const hide = message.loading('正在配置');
    try {
      await modifyNumber({ ...fields });
      hide();
      message.success('配置成功');
      return true;
    } catch (error) {
      hide();
      message.error('配置失败请重试！');
      return false;
    }
  };

  const handleRemove = async (fields: FormValueType) => {
    const hide = message.loading('正在删除');
    try {
      await modifyNumber({ ...fields });
      hide();
      message.success('删除成功');
      actionRef?.current?.reload();
      return true;
    } catch (error) {
      hide();
      message.error('删除失败请重试！');
      return false;
    }
  };
  const columns: ProColumns<Record<string, any>, 'text'>[] = [
    {
      title: '号码',
      dataIndex: 'number',
    },
    {
      title: '状态',
      dataIndex: 'state',
      valueEnum: {
        open: {
          text: '正常',
          status: 'Error',
        },
        closed: {
          text: '资源已经下达',
          status: 'Success',
        },
      },
    },
    {
      title: '最近审批人',
      dataIndex: 'recentApprover',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '最近审批时间',
      dataIndex: 'recentApprovalTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            配置
          </a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              handleRemove(record);
            }}
          >
            删除
          </a>
        </>
      ),
    },
  ];
  const handleAdd = async (fields: FormValueType) => {
    const hide = message.loading('正在添加');
    try {
      await addNumber({ ...fields });
      hide();
      message.success('添加成功');
      return true;
    } catch (error) {
      hide();
      message.error('添加失败请重试！');
      return false;
    }
  };

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <ProTable
          columns={columns}
          actionRef={actionRef}
          search={{ layout: 'vertical' }}
          toolBarRender={() => [
            <Button
              key="1"
              type="primary"
              onClick={() => handleModalVisible(true)}
            >
              新建
            </Button>,
          ]}
          request={async (params, sorter, filter) => {
            const { data, success } = await queryNumberList({
              ...params,
              // FIXME: remove @ts-ignore
              // @ts-ignore
              sorter,
              filter,
            });
            const res = await queryNumberList({
              ...params,
              // FIXME: remove @ts-ignore
              // @ts-ignore
              sorter,
              filter,
            });
            console.log('res', res);
            console.log('res', res.data);
            console.log(data);
            return {
              data: data ? (data as any[]) : undefined,
              success,
            };
          }}
        ></ProTable>
        <CreateForm
          onCancel={() => handleModalVisible(false)}
          modalVisible={createModalVisible}
        >
          <ProTable
            onSubmit={async (value) => {
              const success = await handleAdd(value);
              if (success) {
                handleModalVisible(false);
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }
            }}
            rowKey="id"
            type="form"
            columns={columns}
          />
        </CreateForm>
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      </div>
    </PageContainer>
  );
};

export default HomePage;
