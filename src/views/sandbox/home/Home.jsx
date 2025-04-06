import React from 'react';
import { Button } from 'antd';
import axios from 'axios';

export default function Home() {
  const ajax = () => {
    // get post
    // axios
    //   .get('http://localhost:7001/posts/1')
    //   .then((res) => {
    //     console.log(111, res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    // add todo
    // axios
    //   .post('http://localhost:7001/posts', {
    //     title: 'post 1001',
    //     content: 'This is a new post',
    //   })
    //   .then((res) => {
    //     console.log(111, res.data);
    //   })
    //   .then((res) => {
    //     console.log(222, res.data);
    //   });

    // edit post
    // axios
    //   .put('http://localhost:7001/posts/1', {
    //     title: 'post 1001-1',
    //     content: 'This is a new post',
    //   })
    //   .then((res) => {
    //     console.log('put: ', res.data);
    //   });

    // axios
    //   .patch('http://localhost:7001/posts/1', {
    //     title: 'post 1001-2',
    //     content: 'This is a new post',
    //   })
    //   .then((res) => {
    //     console.log('patch: ', res);
    //   });

    // delete post
    // axios.delete('http://localhost:7001/posts/1').then((res) => {
    //   console.log('delete: ', res);
    // });

    // `_embed`：获取关联数据。eg：`/posts?_embed=comments`，获取所有文章和评论
    axios
      .get('http://localhost:7001/comments?_embed=post&_per_page=10&_page=1')
      .then((res) => {
        console.log('get: ', res.data);
      });
  };

  return (
    <div>
      <Button type="primary" onClick={() => ajax()}>
        Primary Button
      </Button>
    </div>
  );
}
