import { useState } from 'react';
import './aside.css';

const Aside = () => {
  const [page, setPage] = useState('posts');

  const onClick = (p) => () => {
    setPage(p);
  };

  return (
    <div className='aside'>
      <div>
        <a
          className={page === 'posts' ? 'active' : ''}
          onClick={onClick('posts')}
        >
          <img src='https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png' />
        </a>
      </div>
      <div>
        <a
          className={page === 'page2' ? 'active' : ''}
          onClick={onClick('page2')}
        >
          <img src='http://simpleicon.com/wp-content/uploads/note-2.png' />
        </a>
      </div>
      <div>
        <a
          className={page === 'page3' ? 'active' : ''}
          onClick={onClick('page3')}
        >
          <img src='https://cdn0.iconfinder.com/data/icons/social-media-glyph-1/64/Facebook_Social_Media_User_Interface-38-512.png' />
        </a>
      </div>
    </div>
  );
};

export default Aside;
