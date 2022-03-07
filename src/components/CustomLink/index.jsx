import React from 'react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, className, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  let classNameFinal = `pr-5 py-3 ${match ? 'text-linkactive font-bold border-b-4 border-linkactive' : 'text-link'}`;

  if (className) {
    classNameFinal += ` ${className}`;
  }

  return (
    <Link className={classNameFinal} to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
