import { get } from './http.js';

async function getDataset ({ id, source, options }) {
  const data = await get(source);
  return { id, data, options };
}

export async function getDatasets(sources) {
  const dataGetters = sources.map(getDataset);

  const objectifer = (acc, {id, data, options}) => {
    acc[id] = {
      data,
      options,
    };
    return acc;
  };
  return (await Promise.all(dataGetters)).reduce(objectifer, {});
}
