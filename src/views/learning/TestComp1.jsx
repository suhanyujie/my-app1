import { createRef } from 'react';
import Event1 from '@/views/learning/9_event/Event1';
import UncontrolledComp from '@/views/learning/10_formData/UncontrolledComp';
import LifeTime1 from './12_lifetime/LifeTime1';
import LifeTime2 from './12_lifetime/LifeTime2';
import GetSnapShotBeforeUpdate from './12_lifetime/GetSnapShotBeforeUpdate';

export default function TestComp1() {
  let tmpEle1;
  // React.createRef调用后可以返回一个容器，该容器可以存储被 ref 所标识的节点,该容器是“专人专用”的
  let ele1MyRef = createRef();
  const showData = () => {
    if (tmpEle1) {
      console.log('1001: ', tmpEle1.value);
    }
    console.log('1002: ', ele1MyRef.current.value);
  };
  const getInputEle = (ele) => {
    tmpEle1 = ele;
    console.log('@', ele);
  };

  return (
    <div>
      <h1>TestComp1</h1>
      <div>
        <div className="left">
          <input
            // ref={(ele) => {
            //   // 回调形式的 ref (内联函数)
            //   // 形参 ele 是当前节点
            //   tmpEle1 = ele;
            // }}
            // ref 使用方法 2
            // ref={getInputEle}
            // ref 使用方法 3
            ref={ele1MyRef}
            type="text"
            placeholder="请输入"
          />
          <button
            onClick={() => {
              showData();
            }}
          >
            点击
          </button>
        </div>
        <div className="right">
          <Event1 />
          <hr />
          <UncontrolledComp />
          <hr />
          <LifeTime1 />
          <hr />
          <LifeTime2 />
          <hr />
          <GetSnapShotBeforeUpdate />
        </div>
      </div>
    </div>
  );
}
