import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

function Comments() {
  const article = {
    url: 'http://localhost:3000',
    id: 'article-1',
    title: 'Judul Artikel Pertama',
  };

  return (
    <div>
      <DiscussionEmbed
        shortname="ibac-2"
        config={{
          url: article.url,
          identifier: article.id,
          title: article.title,
          language: 'en',
        }}
      />
    </div>
  );
}

export default Comments;
