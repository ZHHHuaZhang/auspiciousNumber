import { ProFormText, StepsForm } from '@ant-design/pro-components';
import { Modal } from 'antd';
import React from 'react';

export interface FormValueType {
  number?: number;
  state?: string;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<any>;
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => (
  console.log(props),
  (
    <>
      <StepsForm
        stepsProps={{
          size: 'small',
        }}
        stepsFormRender={(dom, submitter) => {
          return (
            <Modal
              width={640}
              bodyStyle={{ padding: '32px 40px 48px' }}
              destroyOnClose
              title="号码配置"
              open={props.updateModalVisible}
              footer={submitter}
              onCancel={() => props.onCancel()}
            >
              {dom}
            </Modal>
          );
        }}
        onFinish={props.onSubmit}
      >
        <StepsForm.StepForm
          initialValues={{
            number: props.values.number,
            state: props.values.state,
          }}
          title="基本信息"
        >
          <ProFormText
            width="md"
            name="number"
            label="号码"
            rules={[{ required: true, message: '请输入规则名称！' }]}
          />
          <ProFormText
            name="state"
            width="md"
            label="状态"
            allowClear={false}
          />
        </StepsForm.StepForm>
      </StepsForm>
    </>
  )
);

export default UpdateForm;
