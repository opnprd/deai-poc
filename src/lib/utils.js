let id = 0;

export const nextId = () => `ref-${id++}`;

export default nextId;