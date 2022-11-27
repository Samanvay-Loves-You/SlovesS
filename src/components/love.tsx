/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';


export const EnvironmentBanner = () => {
  const environment:string = "Shreya Best Girlfriend"
  let color: string;
  color = 'red';

  return (
    <React.Fragment>
      {environment !== 'audits' && (
        <div
          css={css`
            position: fixed;
            top: 79px;
            right: -35px;
            width: 350px;
            height: 36px;
            line-height: 36px;
            background-color: ${color};
            transform: rotate(45deg);
          `}>
            {environment}
        </div>
      )}
    </React.Fragment>
  );
};
