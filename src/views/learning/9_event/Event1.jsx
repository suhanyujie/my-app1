// ref: https://github.com/dselegent/Learning-Notes/blob/master/react/03%20%E3%80%90%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E3%80%91.md
export default function Event1(params) {
  const blurFunc1 = (event) => {
    console.log('event:', event, event.target);
  };

  return (
    <>
      <h1>Event1</h1>
      <div className="main">
        <input onBlur={blurFunc1} type="text" placeholder="请输入" />
      </div>
    </>
  );
}
