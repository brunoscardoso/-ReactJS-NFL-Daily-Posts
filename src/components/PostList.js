import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Bruno Cardoso',
          avatar: 'https://avatars0.githubusercontent.com/u/47576846?s=400&u=44c06d48fdc1d947909754943c0c99a2f792cb4a&v=4'
        },
        date: '09 Jun 2019',
        content: 'O comissário Roger Goddell notificou Josh Gordon do New England Patriots que ele será reintegrado na NFL em base condicional..',
        comments: [
          {
            id: 2,
            author: {
              name: 'João Paulo',
              avatar: 'https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-1/p160x160/52720450_2020904551356201_6534517562309345280_n.jpg?_nc_cat=105&_nc_ht=scontent.fudi1-1.fna&oh=c97373b58bc981f2b1f7f2d2231388f3&oe=5D751212'
            },
            date: '10 Jun 2019',
            content:
              'Todos nós estamos torcendo para Gordon ter sucesso, tanto pessoalmente quanto profissionalmente. Espero que afunde o Patriots! haha'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Paulo Antunes',
          avatar: 'https://conteudo.imguol.com.br/blogs/28/files/2017/12/paulo-antunes.png'
        },
        date: '09 Jun 2019',
        content: 'Esse ano as trasmissões serão incríveis, vamos contar com mais câmeras, mais narradores, mais jogos e muito mais emoção!!!',
        comments: [
          {
            id: 4,
            author: {
              name: 'Bruno Cardoso',
              avatar: 'https://avatars0.githubusercontent.com/u/47576846?s=400&u=44c06d48fdc1d947909754943c0c99a2f792cb4a&v=4'
            },
            date: '10 Jun 2019',
            content:
              'É isso aí, estou ansioso pelo inicio dos jogos!!'
          }
        ]
      },
      {
        id: 5,
        author: {
          name: 'Everaldo Marques',
          avatar: 'https://img.estadao.com.br/resources/jpg/5/3/1508874450735.jpg'
        },
        date: '09 Jun 2019',
        content: 'Antonio Brown pediu para ser trocado dos Steelers, mas quais os possíveis destinos?',
        comments: [
          {
            id: 6,
            author: {
              name: 'João Paulo',
              avatar: 'https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-1/p160x160/52720450_2020904551356201_6534517562309345280_n.jpg?_nc_cat=105&_nc_ht=scontent.fudi1-1.fna&oh=c97373b58bc981f2b1f7f2d2231388f3&oe=5D751212'
            },
            date: '10 Jun 2019',
            content:
              'Mesmo sem Antonio Brown o super bowl esse ano é do steelers!'
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;