import React from 'react';
import ContentLoader from 'react-content-loader';

export default () => {
  return (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <ContentLoader>
        <rect x='0' y='10' rx='2' ry='2' width='350' height='50' />
        <rect x='0' y='70' rx='2' ry='2' width='100' height='20' />
        <rect x='0' y='100' rx='2' ry='2' width='250' height='20' />
        <rect x='0' y='100' rx='2' ry='2' width='250' height='20' />
      </ContentLoader>
    </div>
  );
};
