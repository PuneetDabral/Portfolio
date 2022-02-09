import React, { FunctionComponent } from 'react';
import { Service } from '../types';

const ServiceCard:FunctionComponent<{service:Service}>= ({service:{Icon,about,title}}) =>
     {
        function createMarkup() {
            return {
               __html: about,
            }
         }

  return ( <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
          <h5 className="font-bold">{title}</h5>
          <p dangerouslySetInnerHTML={createMarkup()} />
      </div>

  </div>)
};

export default ServiceCard;
