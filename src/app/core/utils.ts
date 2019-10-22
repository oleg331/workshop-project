import { APIUrl } from './contants';
import { HttpParams, Status, HttpMethods, NotificationOptions, Notification } from './models';

export const isArray = (value: any) => {
  return Array.isArray(value);
};

export const getServiceFromUrl = (url: string, method: any) => {
  const updatedUrl = url.replace(`${APIUrl}/`, '');

  let name: string;
  let id: string;

  if (updatedUrl.indexOf('/')) {
    [name, id] = [...updatedUrl.split('/')];
  } else {
    name = updatedUrl;
  }

  return { name, id, method } as HttpParams;
};

export const getNotificationParams = (
  type: Notification['type'],
  httpParams: HttpParams
) => {
  const typeResponseText = (type === Status.success)
    ? 'have successfully'
    : 'are not';

  let name: string;
  let id: string;
  let method: string;

  [name, id, method] = Object.values(httpParams);

  const options = {
    type: name as Notification['type'],
    title: '',
    message: ''
  };

  let typeAction: string;

  switch (method) {
    case HttpMethods.POST: {
      typeAction = 'added';
      break;
    }
    case HttpMethods.PUT: {
      typeAction = 'updated';
      break;
    }
    case HttpMethods.DELETE: {
      typeAction = 'deleted';
      break;
    }
    case HttpMethods.PATCH: {
      typeAction = 'toggle user on';
      break;
    }
    default: break;
  }

  if (name === 'auth') {
    typeAction = '';
    options.title = id;
  } else {
    options.title = name;
    id = 'a ' + name.slice(0, -1);
  }

  options.message = `You ${typeResponseText} ${typeAction} ${id}`;
  return options as NotificationOptions;
};

export const trackById = <T extends { _id: string }>(
  index: number,
  item: T
): string => {
  return item._id;
};
